import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomepageSkeleton } from "../utils/Loader";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularCard = () => {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.popular.popular);

  const getPopularNews = () => {
    axios("https://jakpost.vercel.app/api/category/most-viewed")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS_POPULAR",
          payload: { popular: res.data.posts },
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
    // getPopularNews();
  }, []);

  return (
    <>
      {popular.length !== 0 ? (
        <div className="w-full bg-white rounded-xl overflow-hidden px-5 py-3 mb-3">
          <Link
            to={"/category/most-viewed"}
            className="text-[#1A73E8] w-fit flex items-center gap-x-2 text-xl"
          >
            Populer
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
          {popular.slice(0, 1).map((data, i) => {
            return (
              <>
                <div key={i} className="w-full bg-white flex">
                  <div className="w-5/12 py-3">
                    <img
                      src={data.image}
                      className="w-full h-auto rounded-xl mb-2"
                    />
                    <Link
                      to={detailPost(data.link)}
                      className="text-base hover:underline"
                    >
                      {data.title}
                    </Link>
                    <p className="text-xs text-[#5f6368] my-2">
                      {data.pusblised_at}
                    </p>
                  </div>
                  <div className="w-7/12">
                    {popular.slice(6, popular.length).map((data) => {
                      return (
                        <div className="ml-5 mt-2">
                          <Link
                            to={detailPost(data.link)}
                            className="text-sm leading-3 hover:underline"
                          >
                            {truncate(data.title, 35) + "..."}
                          </Link>
                          <p className="text-xs text-[#5f6368]">
                            {data.pusblised_at}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <HomepageSkeleton />
      )}
    </>
  );
};

export default PopularCard;
