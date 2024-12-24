import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex flex-col md:flex-row justify-between 
      items-center">
        {/* Logo Section */}
        <Logo />

        {/* Social Icons section */}
        <FooterLinks />
      </motion.div>
    </footer>
  );
};

function FooterLinks() {
  return (
    <div
      className="flex items-center gap-4 text-3xl
              text-gray-700 mt-6">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
    </div>
  );
}
export default Footer;
