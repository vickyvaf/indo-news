import { useSelector, useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import axios from "axios";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.searchNews.datas);
  const tagSearch = useSelector((state) => state.searchNews.tag);

  const truncate = (text, value) => {
    if (text.length >= value) {
      return text.slice(0, value);
    }
  };

  const detailPost = (text) => {
    return text.slice(30);
  };

  useEffect(() => {
    console.log(tagSearch);
  }, [tagSearch]);

  return (
    <div className="w-full min-h-screen pt-28 bg-[#F6F8FC] font-poppins">
      {tagSearch === "loading" ? (
        "LOADING BRO..."
      ) : (
        <div className="max-w-[950px] mx-auto">
          <div className="w-full mt-5">
            {datas.map((data, i) => {
              return (
                <div
                  key={i}
                  className="w-8/12 h-32 bg-white rounded-xl my-5 p-4 flex gap-x-2"
                >
                  <div className="w-9/12 flex flex-col justify-between">
                    <Link
                      to={detailPost(data.link)}
                      className="hover:underline"
                    >
                      {data.title}
                    </Link>
                    <p className="text-xs text-[#5f6368]">
                      {truncate(data.headline, 12)}
                    </p>
                  </div>
                  <div className="w-3/12 rounded-xl overflow-hidden">
                    <img src={data.image} className="w-full h-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
