import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Reusable animation variants for easy maintenance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.2,
      ease: "easeOut",
    },
  }),
};

const heroImageVariant = {
  hidden: { scale: 1.1, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  // ACTION REQUIRED: Replace with your actual WhatsApp number
  const WHATSAPP_NUMBER = "255XXXXXXXXX"; // Replace with your Tanzania number
  const WHATSAPP_TEXT = encodeURIComponent(
    "Hello Coolex-Links! I'm interested in learning more about your products."
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <motion.div
      className="relative min-h-[90vh] flex items-center"
      initial="hidden"
      animate="visible"
    >
      {/* Background image with overlay - animated */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          variants={heroImageVariant}
          style={{
            // ACTION REQUIRED: Replace with high-quality image showing cars and appliances
            backgroundImage:
              'url("/images/hero-background-cars-appliances.jpg")',
          }}
        ></motion.div>
        {/* Overlay with subtle animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-coolex-blue/80 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            custom={0}
            variants={fadeInUp}
          >
            Your Source for Quality Cars & Home Appliances
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-100"
            custom={1}
            variants={fadeInUp}
          >
            Explore our curated selection of reliable vehicles and essential
            home appliances, backed by excellent customer support.
          </motion.p>

          {/* Primary WhatsApp CTA Button with animation */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg flex items-center space-x-2"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block mr-2"
                >
                  <MessageSquare size={20} />
                </motion.span>
                <span>Inquire on WhatsApp</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
