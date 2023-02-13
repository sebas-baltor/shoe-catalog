import styles from "../src/styles";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = ({home}) => (
  <div className="fixed top-0 right-0 w-full flex justify-end my-1 h-[60px] z-20">
    <nav className={`${home?"w-[90%]":"w-full"} flex justify-between text-2xl px-4 items-center`}>
      <div>Logo</div>
      <div>links</div>
      <div>
        <BiMenuAltRight />
      </div>
    </nav>
  </div>
);
export default Navbar;
