import { motion } from "framer-motion";

const RippleEffect = () => {
  return (
    <div className="relative flex items-center justify-center h-[200px] w-[200px]">
      {/* İlk Ripple */}
      <motion.div
        className="absolute rounded-full border border-[#684DF4]"
        style={{
          width: "40px",
          height: "40px",
          borderWidth: "1px", // Border genişliği 1px
        }}
        initial={{ scale: 1, opacity: 0.2 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute rounded-full border border-[#684DF4]"
        style={{
          width: "50px",
          height: "50px",
          borderWidth: "1px", // Border genişliği 1px
        }}
        initial={{ scale: 1, opacity: 0.2 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute rounded-full border border-[#684DF4]"
        style={{
          width: "60px",
          height: "60px",
          borderWidth: "1px", // Border genişliği 1px
        }}
        initial={{ scale: 1, opacity: 0.2 }}
        animate={{ scale: 3.5, opacity: 0 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default RippleEffect;
