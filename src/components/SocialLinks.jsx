import { socialLinks } from "../constants/constants";
import { motion } from "framer-motion";

function SocialLinks({ Styles }) {
  return (
    <ul className={Styles}>
      {socialLinks.map((link) => (
        <li
          key={link.id}
          className="text-white hover:text-white font-sans text-[16px] font-medium cursor-pointer p-4"
          onClick={() => {}}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.3,
            }}
          >
            <a target="_blank" href={`${link.link}`}>
              <img
                src={`${link.icon}`}
                alt="icon"
                className="w-10 h-10 sm:w-36 sm:h-12"
              />
            </a>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
