import { motion } from "framer-motion";
function Skill({ directionleft, icon, title }) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{ x: directionleft ? -200 : 200, opacity: 0 }}
        transistion={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-slate-700 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transistion duration-300 ease-in-out shadow-lg shadow-slate-600"
        src={icon}
      />
      <div className="bg-gradient-to-b absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-white opacity-100">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
