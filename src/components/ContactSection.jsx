import { motion } from "framer-motion";


function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-20 text-center px-6">
      <div className="absolute inset-0 bg-gradient-radial from-cosmic-blue/10 via-transparent to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-20 w-32 h-48 bg-gradient-to-t from-black to-gray-800 rounded-t-full opacity-60"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-6xl md:text-8xl font-black text-primary mb-6 tracking-wider">
          HELLO@COSMOS.STUDIO
        </h2>

        <p className="text-2xl text-cosmic-glow mb-8 tracking-wider">
          +380638324731
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-xl text-muted-foreground tracking-wide mb-12 max-w-2xl text-right"
      >
        "CREATING MEMORABLE DIGITAL EXPERIENCES"
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8"
      >
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-8 text-sm text-muted-foreground text-left"
      >
        <p>COSMOS STUDIO</p>
        <p>Kyiv, Ukraine</p>
        <p>50°27'0.0036"N, 30°31'23.9988"E</p>
      </motion.div>
    </div>
  );
}

export default ContactSection;
