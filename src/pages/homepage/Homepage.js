import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import Helmet from "react-helmet";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.searchNews.datas);
  const tag = useSelector((state) => state.searchNews.tag);

  const getAllCategories = () => {
    axios("https://jakpost.vercel.app/api/category/most-viewed").then((res) => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { datas: res.data.posts },
      });
    });
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
    console.log(tag);
    getAllCategories();
  }, []);

  return (
    <div>
      <div className="w-full pt-32 bg-[#F6F8FC] font-poppins">
        <div className="max-w-[950px] mx-auto flex flex-wrap justify-between">
          <div className="w-8/12 bg-white rounded-xl overflow-hidden px-5 py-3 mb-3">
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
            {datas.slice(0, 1).map((data, i) => {
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
                      {datas.slice(6, datas.length).map((data) => {
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
          <div className="w-8/12 bg-white rounded-xl overflow-hidden px-5 py-3">
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
            {datas.slice(0, 1).map((data, i) => {
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
                      {datas.slice(6, datas.length).map((data, i) => {
                        return (
                          <div key={i} className="ml-5 mt-2">
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
                  <hr className="mb-2" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
