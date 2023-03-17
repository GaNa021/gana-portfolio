import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function Hero() {
  return (
    <div className="h-screen snap-center flex justify-center items-center text-white">
      <div className="hidden sm:flex">
        <SocialLinks Styles="list-none flex flex-col gap-4 justify-end items-start" />
      </div>
      <div className="grid md:grid-cols-2 place-items-center gap-8">
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
          transition={{ duration: 4 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4">
            Software Developer
          </div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Harsha Vardhan Ganapathi
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            velit nesciunt! Alias in tempore mollitia culpa aut, molestias
            quidem provident dignissimos itaque expedita fugit laborum saepe
            tempora cumque accusantium incidunt.
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href=""
              className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Download Cv
            </a>
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
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
