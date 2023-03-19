import { motion } from "framer-motion";
import { TechIcons } from "../constants/constants";
import Skill from "./Skill";
function Tech() {
  return (
    <div
      className="h-screen snap-center flex justify-center items-center text-white font-ubuntu "
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="absoulte top-24 tracking-widest font-bold text-5xl hover:text-gray-500 cursor-default">
          Skills
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-4 gap-4">
          {TechIcons.map((Tech) => {
            return (
              <Skill key={Tech.title} title={Tech.title} icon={Tech.icon} />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Tech;
