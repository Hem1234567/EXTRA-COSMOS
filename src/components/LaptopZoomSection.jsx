import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

function LaptopZoomSection() {
  const containerRef = useRef(null);
  const [showNextSection, setShowNextSection] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Adjusted animation controls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.7]); // More subtle zoom
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const isFullscreen = useTransform(scrollYProgress, [0.8, 1], [0, 1]); // Adjusted threshold

  useEffect(() => {
    const unsubscribe = isFullscreen.onChange((value) => {
      if (value === 1) {
        setTimeout(() => {
          setShowNextSection(true);
        }, 2000);
      } else {
        setShowNextSection(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[200vh] relative bg-black">
      {" "}
      {/* Reduced container height */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Laptop Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative w-[800px] h-[500px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Laptop Screen Content */}
          <img
            src="/photo-frame-img.png"
            alt="Hackathon Event"
            className="w-full h-full object-contain"
          />

          {/* Laptop Bezel */}
          <div className="absolute inset-0 border-8 border-gray-800 rounded-lg pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-800 rounded-b-lg flex justify-center">
            <div className="w-24 h-1 bg-gray-600 rounded-full mt-1" />
          </div>
        </motion.div>

        {/* "Explore Our Work" Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0]) }} // Adjusted range
        >
          
        </motion.div>
      </div>
    </div>
  );
}

export default LaptopZoomSection;
