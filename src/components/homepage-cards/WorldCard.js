import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HomepageSkeleton, SideHomepageSkeleton } from "../utils/Loader";

const WorldCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const world = useSelector((state) => state.world.world);
  const tag = useSelector((state) => state.world.tag);

  const getWorldNews = () => {
    axios("https://jakpost.vercel.app/api/category/world")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS_WORLD",
          payload: { world: res.data.posts },
        });
      })
      .catch(() => alert("gak tau pokok error"));
  };

  const truncate = (text, value) => {
    if (text.length >= value) {
      return text.slice(0, value);
    }
  };

  const detailPost = (text) => {
    return "/detailpost/" +  text.slice(42);
  };

  useEffect(() => {
    getWorldNews();
  }, []);

  return (
    <>
      {world.length !== 0 ? (
        <div className="w-full bg-white rounded-xl overflow-hidden px-5 py-3 mb-3">
          <Link
            to={"/category/world"}
            className="text-[#1A73E8] w-fit flex items-center gap-x-2 text-xl"
          >
            World
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <hr className="my-3" />
          {world.slice(3, world.length).map((data, i) => {
            return (
              <>
                <div key={i} className="w-full bg-white flex py-3">
                  <div className="w-full">
                    <Link
                      to={detailPost(data.link)}
                      className="text-sm hover:underline"
                    >
                      {truncate(data.title, 40) + "..."}
                    </Link>
                    <p className="text-xs text-[#5f6368] my-2">
                      {data.pusblised_at}
                    </p>
                  </div>
                  <img src={data.image} className="w-16 h-16 rounded-xl ml-3" />
                </div>
                <hr className="mb-2"/>
              </>
            );
          })}
        </div>
      ) : (
        <SideHomepageSkeleton />
      )}
    </>
  );
};

export default WorldCard;
