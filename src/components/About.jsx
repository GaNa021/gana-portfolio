import { motion } from "framer-motion";
import { styles } from "../styles";
import { Interests } from "../constants/constants";
function About() {
  return (
    <div
      className="h-screen snap-center flex justify-center items-center text-white p-4"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="grid grid-flow-col items-end sm:gap-96">
          <p className={`${styles.sectionHeadText}`}>About</p>
          <img src="src/assets/dev-vector.png" alt="" className="h-44" />
        </div>
        <div className="font-noto font-medium">
          <p>
            I am a software developer based on Hyderbad,India.
            <br />I am into development for nearly half a decade. I try new
            things continuosly and try to keep myself upto date, cause no one
            uses outdated stuff.
            <br />
            Always intrested in things which are fun and difficult.
          </p>

          <p>
            <br />
            <span className="underline underline-offset-8">2019</span>{" "}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Completed Diploma in
            Electronics and Communication Engineering
          </p>
          <p>
            <br />
            <span className="underline underline-offset-8">
              2019 - Present
            </span>{" "}
            &emsp;&emsp; Working for Teleservices International as a Fullstack
            Java Developer
          </p>
          <br />
          <p className={`${styles.sectionHeadText}`}>Interests</p>
          <div className="flex gap-4">
            {Interests.map((interests, index) => {
              return (
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.5,
                  }}
                  key={index}
                  src={interests.icon}
                  alt=""
                  className="w-20 h-16"
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
