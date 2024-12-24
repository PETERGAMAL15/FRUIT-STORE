import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import BTN from "../BTN/BTN";
const Banner = () => {
  return (
    <section className="bg-secondary/10 mt-12">
      <div
        className="container grid grid-cols-1 
      md:grid-cols-2 space-y-6 py-14">
        {/* Banner image */}
        <BannerImage />
        {/* Brand info */}
        <BannerInfo />
      </div>
    </section>
  );
};
function BannerImage() {
  return (
    <div className="flex  justify-center items-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        src={BannerPng}
        alt="Fruits"
        className="w-[300px] md:max-w-[400px] 
    h-full object-cover drop-shadow"
      />
    </div>
  );
}
function BannerInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div
        className="text-center md:text-left space-y-4 
                    lg:max-w-[400px]">
        <motion.h1
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-6xl font-bold uppercase">
          Brand info
        </motion.h1>
        <TextP fadeUp={FadeUp(0.7)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          nobis omnis minus nesciunt consequatur cupiditate sequi reprehenderit.
          Consequuntur itaque voluptates sint quasi nobis, ipsam iusto
          voluptatem necessitatibus eos aliquam. Facere!
        </TextP>
        <TextP fadeUp={FadeUp(0.9)}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero et
          enim nihil, voluptas cum.
        </TextP>

        {/* button section */}
        <BTN fade={FadeUp(1.1)}>learn more</BTN>
      </div>
    </div>
  );
}

function TextP({ children, fadeUp }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {children}
    </motion.p>
  );
}

export default Banner;
