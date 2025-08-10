import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const StarsBackgroundWithMoon = ({ children }) => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const glowSphereRef = useRef(null);
  const moonRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current = camera;

    // Adjust camera position based on screen size
    const isMobile = window.innerWidth < 768;
    camera.position.set(0, 0, isMobile ? 7 : 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    // Fog
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    // Load moon model
    const loader = new GLTFLoader();
    loader.load(
      "/earth.glb",
      (gltf) => {
        const moon = gltf.scene;
        moonRef.current = moon;

        // Adjust scale based on screen size
        const scale = isMobile ? 3 : 4;
        moon.scale.set(scale, scale, scale);

        // Center the moon
        const box = new THREE.Box3().setFromObject(moon);
        const center = box.getCenter(new THREE.Vector3());
        moon.position.x -= center.x;
        moon.position.y -= center.y;
        moon.position.z -= center.z;

        // Emissive material for slight glow
        moon.traverse((child) => {
          if (child.isMesh) {
            child.material.emissive = new THREE.Color(0x000033);
            child.material.emissiveIntensity = 0.1;
            child.material.metalness = 0.1;
            child.material.roughness = 0.8;
          }
        });

        // Deep blue glow with smooth pulsing
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x5a5aca,
          transparent: true,
          opacity: 0.3,
          side: THREE.BackSide,
          depthWrite: false,
        });

        const glowGeometry = new THREE.SphereGeometry(scale * 0.505, 64, 64); // Scale glow with moon
        const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(glowSphere);
        glowSphereRef.current = glowSphere;

        scene.add(moon);
        setLoading(false);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          const time = clockRef.current.getElapsedTime();

          // Rotate moon
          if (moonRef.current) {
            moonRef.current.rotation.y += 0.002;
          }

          // Smooth pulsing glow effect
          if (glowSphereRef.current) {
            const pulseFactor = 0.3 + Math.sin(time * 1.5) * 0.1;
            glowSphereRef.current.material.opacity = pulseFactor;
          }

          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setError(error.message);
        setLoading(false);
      }
    );

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();

        // Adjust camera position for mobile
        const isMobile = window.innerWidth < 768;
        cameraRef.current.position.z = isMobile ? 7 : 5;
      }

      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
      }

      // Adjust moon scale on resize
      if (moonRef.current && glowSphereRef.current) {
        const isMobile = window.innerWidth < 768;
        const scale = isMobile ? 3 : 4;

        moonRef.current.scale.set(scale, scale, scale);

        // Update glow sphere to match
        glowSphereRef.current.geometry.dispose();
        glowSphereRef.current.geometry = new THREE.SphereGeometry(
          scale * 0.505,
          64,
          64
        );
      }
    };

    // Debounce resize handler
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (glowSphereRef.current) {
        glowSphereRef.current.material.dispose();
        glowSphereRef.current.geometry.dispose();
      }
      if (moonRef.current) {
        moonRef.current.traverse((child) => {
          if (child.isMesh) {
            child.material.dispose();
            child.geometry.dispose();
          }
        });
      }
    };
  }, []);

  // Styles
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };

  const bgContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: "none",
  };

  const starsStyle = {
    background:
      "#000 url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "300%",
    height: "100%",
    animation: "move-stars 200s linear infinite",
  };

  const twinklingStyle = {
    background:
      "transparent url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png) repeat",
    backgroundSize: "1000px 1000px",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "300%",
    height: "100%",
    animation: "move-twinkling 100s linear infinite",
  };

  const threeContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    padding: "20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes move-twinkling {
            from { transform: translateX(0); }
            to { transform: translateX(-1000px); }
          }
          @keyframes move-stars {
            from { transform: translateX(0); }
            to { transform: translateX(-2000px); }
          }
          
          /* Mobile-specific adjustments */
          @media (max-width: 767px) {
            .three-container {
              transform: scale(0.8);
            }
          }
        `}
      </style>

      {/* Stars Background */}
      <div style={bgContainerStyle}>
        <div style={starsStyle}></div>
        <div style={twinklingStyle}></div>
      </div>

      {/* Three.js Moon Container */}
      <div
        ref={mountRef}
        style={threeContainerStyle}
        className="three-container"
      ></div>

      {/* Content */}
      <div style={contentStyle}>
        {loading && !error && <div></div>}
        {error && <div>Error: {error}</div>}
        {children}
      </div>
    </div>
  );
};

export default StarsBackgroundWithMoon;
