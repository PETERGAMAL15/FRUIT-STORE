import { FaLeaf } from "react-icons/fa";
const Logo = () => {
  return (
    <div className="text-2xl flex  items-center gap-2 font-bold uppercase">
      <p className=" text-primary">
        Fruit <span className=" text-secondary">Store</span>
      </p>
      <FaLeaf className="text-green-500" />
    </div>
  );
};

export default Logo;
