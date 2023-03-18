import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { styles } from "../styles";

function Hero() {
  return (
    <div
      className="h-screen snap-center flex justify-center items-center text-white"
      id="home"
    >
      <div className="hidden sm:flex">
        <SocialLinks Styles="list-none flex flex-col gap-4 justify-end items-start" />
      </div>

      <div className="grid md:grid-cols-2 place-items-center gap-8 p-4 font-ubuntu">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
        >
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-lg shadow-blur shadow-slate-300">
            <img
              src="src\assets\self.jpeg"
              alt="hero-img"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <div className="font-semibold sm:text-[1.25rem] mb-4">
            Software Developer
          </div>
          <h2 className={`${styles.sectionHeadText}`}>
            Harsha Vardhan Ganapathi
          </h2>
          <p className="opacity-80 text-[1.2rem] pt-6 pb-6">
            MOTTO : Always striving for improvement, cause there is no
            perfection.
          </p>
          <div className="flex mt-4 gap-10">
            <a
              href="/src/assets/Resume-Harsha.pdf"
              className="py-2 px-4 border-x-[0.01rem] hover:border-[0.01rem] text-[1rem] rounded-[2.2rem] shadow-md hover:bg-gradient-to-bl from-gray-600"
              download={true}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="py-2 px-4 border-x-[0.01rem] hover:border-[0.01rem] text-[1rem] rounded-[2.2rem] shadow-md hover:bg-gradient-to-bl from-gray-600"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
