import styles from "../src/styles"
import {BiMenuAltRight} from "react-icons/bi"
const Navbar =()=>(
    <nav className={`fixed top-0 right-0 flex justify-between w-[90%] text-2xl px-4`}>
        <div>Logo</div>
        <div>
            links
        </div>
        <div>
            <BiMenuAltRight/>
        </div>
    </nav>
)
export default Navbar;