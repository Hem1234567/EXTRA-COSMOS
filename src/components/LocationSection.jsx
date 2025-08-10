import { motion } from "framer-motion";

function LocationSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-20 text-center bg-black">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-6xl md:text-8xl font-black ultra-stretch text-primary tracking-wider text-white">
          BASED IN&nbsp;
          <span className="glitch" data-text="UKRAINE">
            UKRAINE
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl md:text-8xl font-black ultra-stretch text-primary tracking-wider text-white">
          WORKING&nbsp;
          <span className="glitch" data-text="WORLDWIDE">
            WORLDWIDE
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-xl text-muted-foreground tracking-wide mt-12 max-w-2xl text-white"
      >
        Creating memorable digital experiences across the globe, powered by
        Ukrainian creativity and innovation.
      </motion.p>
    </div>
  );
}

export default LocationSection;
