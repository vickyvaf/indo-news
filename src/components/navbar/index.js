import { Link, useParams } from "react-router-dom";
import { NavbarSkeletonLoader } from "../utils/Loader";
import SearchInput from "./SearchInput";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="w-full px-5 bg-white border-[1px] fixed font-poppins">
      <div className="h-16 p-2 flex items-center">
        <Link to={"/"} className="font-medium text-lg text-[#5f6368]">
          <span className="text-black">Jakarta</span> Post
        </Link>
        <SearchInput />
        <button className="font-medium text-sm text-[#5f6368]">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      <div>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
