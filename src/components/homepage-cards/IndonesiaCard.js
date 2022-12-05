import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HomepageSkeleton } from "../utils/Loader";

const IndonesiaCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const indonesia = useSelector((state) => state.indonesia.indonesia);

  const getIndonesiaNews = () => {
    axios("https://jakpost.vercel.app/api/category/indonesia")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS_INDONESIA",
          payload: { indonesia: res.data.posts },
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
    return text.slice(30);
  };

  useEffect(() => {
    getIndonesiaNews();
  }, []);

  return (
    <>
      {indonesia.length !== 0 ? (
        <div className="w-8/12 bg-white rounded-xl overflow-hidden px-5 py-3 mb-3">
          <Link
            to={"/category/most-viewed"}
            className="text-[#1A73E8] w-fit flex items-center gap-x-2 text-xl"
          >
            Indonesia
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
          {indonesia.slice(0, 1).map((data, i) => {
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
                    {indonesia.slice(0, 3).map((data) => {
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

export default IndonesiaCard;
