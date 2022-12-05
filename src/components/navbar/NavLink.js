import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="flex max-w-[950px] h-12 justify-between mx-auto">
      <Link to={"/"} className="mt-6 text-sm text-[#5f6368] font-medium">
        Beranda
      </Link>
      <Link to={"/category/most-viewed"} className="nav-links">
        Most Viewed
      </Link>
      <Link to={"/category/indonesia"} className="nav-links">
        Indonesia
      </Link>
      <Link to={"/category/business"} className="nav-links">
        Business
      </Link>
      <Link to={"/category/world"} className="nav-links">
        World
      </Link>
      <Link to={"/category/academia/opinion"} className="nav-links">
        Opinion
      </Link>
      <Link to={"/category/life"} className="nav-links">
        Culture
      </Link>
      <Link to={"/category/travel"} className="nav-links">
        Travel
      </Link>
      <Link to={"/category/front-row"} className="nav-links">
        Front Row
      </Link>
      <Link to={"/category/sports"} className="nav-links">
        Sports
      </Link>
    </div>
  );
};

export default NavLink;
