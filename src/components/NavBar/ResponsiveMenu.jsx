import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="z-20 w-full h-screen top-20 left-0 absolute md:hidden block">
          {/*  menu list */}
          <MenuList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function MenuList() {
  return (
    <div className="text-xl font-semibold uppercase bg-primary text-white rounded-3xl py-10 m-6  ">
      <ul className="flex flex-col items-center gap-10">
        <li>home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
