import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { animate, delay, motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: Fruit4,
    delay: 1.2,
  },
];
const Menus = () => {
  return (
    <section>
      <div className="container">
        <Header />
        <MenuCard />
      </div>
    </section>
  );
};

function Header() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className=" uppercase text-2xl font-bold text-left pb-10">
      Our Menus
    </motion.h1>
  );
}
function MenuCard() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 
              md:grid-cols-4 gap-6">
      {MenusData.map((item) => (
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={FadeLeft(item.delay)}
          whileHover={{ scale: 1.1 }}
          key={item.id}
          className="bg-white rounded-3xl px-4
                        py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row
                        justify-around items-center gap-3">
          <img
            src={item.img}
            alt="Fruit"
            className="w-[60px] mb-4 scale-110
                        transform -translate-y-6"
          />
          <div>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="text-lg font-semibold text-secondary">{item.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
export default Menus;
