// components/SplashScreen.js
import { motion } from "framer-motion";


const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          onAnimationComplete={finishLoading}
        >
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-color-3 text-center font-display tracking-tight">
            Anwesh
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-center font-grotesk text-white dark:text-white text-opacity-90 mt-1">
            Ale
          </p>
        </motion.div>
      </div>
    </section>
  );

};

export default SplashScreen;
