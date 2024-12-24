import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";
import BTN from "../BTN/BTN";
const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};
const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container flex justify-end
      space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Brand info */}
        <BannerInfo />
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
          variants={FadeLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-6xl font-bold uppercase">
          Brand info
        </motion.h1>
        <motion.p
          variants={FadeLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          nobis omnis minus nesciunt consequatur cupiditate sequi reprehenderit.
          Consequuntur itaque voluptates sint quasi nobis, ipsam iusto
          voluptatem necessitatibus eos aliquam. Facere!
        </motion.p>

        {/* button section */}
        <BTN fade={FadeLeft(1.1)}>
          <span>
            <IoBagHandleOutline />
          </span>
          Order Now
        </BTN>
      </div>
    </div>
  );
}

/* function BTN() {
  return (
    <motion.div
      variants={}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center 
md:justify-start">
      <button
        className="primary-btn flex items-center
gap-2 ">
        
      </button>
    </motion.div>
  );
}
 */
export default Banner3;
