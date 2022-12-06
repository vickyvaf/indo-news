import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavbarSkeletonLoader } from "../utils/Loader";

const NavLink = () => {
  const location = useLocation();
  const tagPopular = useSelector((state) => state.popular.tag);
  const tagIndonesia = useSelector((state) => state.indonesia.tag);
  const tagWorld = useSelector((state) => state.world.tag);
  const tagSearchNews = useSelector((state) => state.searchNews.tag);

  return (
    <>
      {tagPopular === "loading" ||
      tagIndonesia === "loading" ||
      tagWorld === "loading" ||
      tagSearchNews === "loading" ? (
        <NavbarSkeletonLoader />
      ) : (
        <div className="flex max-w-[950px] h-12 justify-between mx-auto">
          <Link
            to={"/"}
            className={
              location.pathname === "/" ? "nav-links-active" : "nav-links"
            }
          >
            Beranda
          </Link>
          <Link
            to={"/category/most-viewed"}
            className={
              location.pathname === "/category/most-viewed"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Most Viewed
          </Link>
          <Link
            to={"/category/indonesia"}
            className={
              location.pathname === "/category/indonesia"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Indonesia
          </Link>
          <Link
            to={"/category/business"}
            className={
              location.pathname === "/category/business"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Business
          </Link>
          <Link
            to={"/category/world"}
            className={
              location.pathname === "/category/world"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            World
          </Link>
          <Link
            to={"/category/academia/opinion"}
            className={
              location.pathname === "/category/academia/opinion"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Opinion
          </Link>
          <Link
            to={"/category/life"}
            className={
              location.pathname === "/category/life"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Culture
          </Link>
          <Link
            to={"/category/travel"}
            className={
              location.pathname === "/category/travel"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Travel
          </Link>
          <Link
            to={"/category/front-row"}
            className={
              location.pathname === "/category/front-row"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Front Row
          </Link>
          <Link
            to={"/category/sports"}
            className={
              location.pathname === "/category/sports"
                ? "nav-links-active"
                : "nav-links"
            }
          >
            Sports
          </Link>
        </div>
      )}
    </>
  );
};

export default NavLink;
