import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HudFrame = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const containerRef = useRef(null);

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll transforms
  const titleY = useTransform(scrollY, [0, 300], [0, -200]);
  const titleOpacity = useTransform(scrollY, [200, 300], [1, 0]);
  const elementsOpacity = useTransform(scrollY, [100, 200], [1, 0]);

  // Responsive values
  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;
  const frameInset = isMobile ? "inset-3" : isTablet ? "inset-6" : "inset-10";
  const mainTitleSize = isMobile
    ? "text-5xl"
    : isTablet
    ? "text-7xl"
    : "text-[10vw]";

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div
      className="relative w-full h-full bg-transparent overflow-hidden"
      ref={containerRef}
    >
      {/* Main Frame Container */}
      <motion.div
        className={`fixed ${frameInset} border border-gray-700 flex flex-col z-20`}
        style={{ opacity: elementsOpacity }}
      >
        {/* Frame Corners */}
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((position) => (
          <React.Fragment key={position}>
            <div className={`absolute ${position} w-px h-3 bg-gray-700`} />
            <div className={`absolute ${position} w-3 h-px bg-gray-700`} />
          </React.Fragment>
        ))}

        {/* Midpoints (hidden on mobile) */}
        {!isMobile && (
          <>
            {[
              "top-1/2 left-0",
              "top-1/2 right-0",
              "top-0 left-1/2",
              "bottom-0 left-1/2",
            ].map((position) => (
              <React.Fragment key={position}>
                <div
                  className={`absolute ${position} transform -translate-y-1/2 w-3 h-px bg-gray-700`}
                />
                <div
                  className={`absolute ${position} transform -translate-y-1/2 w-px h-3 bg-gray-700`}
                />
              </React.Fragment>
            ))}
          </>
        )}

        {/* Top Bar - Date & Time */}
        <div className="h-8 flex items-center justify-between px-4 bg-black bg-opacity-50 relative">
          <div className="text-white font-mono text-sm font-semibold">
            {isMobile ? "DEC 2025" : "DECEMBER 2025"}
          </div>
          <div className="text-white font-mono text-sm font-semibold">
            {formatTime(currentTime)}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Bottom Left Text */}
          <div className="absolute bottom-3 left-3 text-sm sm:text-xl text-white font-bold leading-tight">
            <p>Tamilnadu's</p>
            <p>Largest</p>
            <p>Hackathon</p>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute bottom-3 right-3 text-sm sm:text-xl text-white font-bold text-right leading-tight">
            <p>36 - hr</p>
            <p>Hackathon</p>
          </div>

          {/* Since Year (hidden on mobile) */}
          {!isMobile && (
            <div className="absolute left-3 top-1/2 text-xs text-gray-500 rotate-90 origin-left tracking-widest transform -translate-y-1/2">
              since <br /> 2025
            </div>
          )}
        </div>
      </motion.div>

      {/* Title - Positioned relative to viewport but visually inside frame */}
      <motion.div
        className={`fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4 z-30 pointer-events-none`}
        style={{
          y: titleY,
          opacity: titleOpacity,
        }}
      >
        <h1
          className={`text-white ${mainTitleSize} tracking-tight font-extrabold ${
            isMobile ? "whitespace-normal" : "whitespace-nowrap"
          }`}
        >
          PEC {isMobile && <br />}HACKS
        </h1>
      </motion.div>
    </div>
  );
};

export default HudFrame;
