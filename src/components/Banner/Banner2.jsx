import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import BTN from "../BTN/BTN";
const Banner2 = () => {
  return (
    <section className="">
      <div
        className="container grid grid-cols-1 
      md:grid-cols-2 space-y-6 py-14 md:py-24">
        {/* Brand info */}
        <BannerInfo />
        {/* Banner image */}
        <BannerImage />
      </div>
    </section>
  );
};
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
          Online Fruit Store
        </motion.h1>

        <TextP fadeUP={FadeUp(0.7)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          nobis omnis minus nesciunt consequatur cupiditate sequi reprehenderit.
          Consequuntur itaque voluptates sint quasi nobis, ipsam iusto
          voluptatem necessitatibus eos aliquam. Facere!
        </TextP>
        <TextP fadeUP={FadeUp(0.9)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero et
          enim nihil, voluptas cum.
        </TextP>
        {/* button section */}
        <BTN fade={FadeUp(1.1)}>Download the App</BTN>
      </div>
    </div>
  );
}
function TextP({ fadeUP, children }) {
  return (
    <motion.p
      variants={fadeUP}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {children}
    </motion.p>
  );
}

function BannerImage() {
  return (
    <div className="flex  justify-center items-center">
      <motion.img
        initial={{ opacity: 0, x: 200, rotate: 75 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
        src={BannerPng}
        alt="Fruits"
        className="w-[350px] md:max-w-[500px]
    h-full object-cover drop-shadow"
      />
    </div>
  );
}
export default Banner2;
