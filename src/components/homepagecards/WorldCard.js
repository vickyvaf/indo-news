import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HomepageSkeleton, SideHomepageSkeleton } from "../utils/Loader";

const WorldCard = () => {
  const [data, setData] = useState([]);

  // const navigate = useNavigate();
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

  const getDatas = () => {
    axios(
      "https://berita-indo-api.vercel.app/v1/cnn-news/nasional?title=indonesia"
    ).then((res) => setData(res.data.data));
  };

  const truncate = (text, value) => {
    if (text.length >= value) {
      return text.slice(0, value);
    }
  };

  const detailPost = (text) => {
    return "/detailpost/" + text.slice(42);
  };

  useEffect(() => {
    getDatas();
    console.log(data);
  }, []);

  return (
    <>
      {data.length !== 0 ? (
        <div className="w-full bg-white rounded-xl overflow-hidden px-5 py-3 mb-3">
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
          {data.slice(0, 1).map((item, i) => {
            return (
              <div key={i} className="w-full bg-white flex">
                <div className="w-5/12 py-3">
                  <img
                    src={item.image.small}
                    className="w-full h-auto rounded-xl mb-2"
                  />
                  <Link
                    to={detailPost(item.link)}
                    className="text-base hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs text-[#5f6368] my-2">{item.isoDate}</p>
                </div>
                {data.slice(3, 3).map((item, i) => {
                  return (
                    <div key={i} className="w-full bg-white flex py-3">
                      <div className="w-full">
                        <Link
                          to={detailPost(item.link)}
                          className="text-sm hover:underline"
                        >
                          {truncate(item.title, 40) + "..."}
                        </Link>
                        <p className="text-xs text-[#5f6368] my-2">
                          {item.isoDate}
                        </p>
                      </div>
                      <img
                        src={item.image.small}
                        className="w-16 h-16 rounded-xl ml-3"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <HomepageSkeleton />
      )}
    </>
  );
};

export default WorldCard;
