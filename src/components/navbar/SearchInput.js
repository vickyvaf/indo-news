import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CircularLoader } from "../utils/Loader";
import Helmet from "react-helmet";
import axios from "axios";

const SearchInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInputValue = useSelector(
    (state) => state.searchNews.searchInputValue
  );
  const tag = useSelector((state) => state.searchNews.tag);

  const search = () => {
    dispatch({ type: "FETCH" });
    axios(`https://jakpost.vercel.app/api/search/${searchInputValue}`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: { datas: res.data.data } });
        navigate(`/search/${searchInputValue}`);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: { errorMsg: err.message } });
        window.location.reload();
      });
  };

  useEffect(() => {
    console.log(tag);
  }, [tag]);

  return (
    <>
      <div
        className={
          tag === "loading"
            ? "w-[720px] h-12 bg-zinc-200 rounded-lg mx-auto flex items-center overflow-hidden -z-10"
            : "w-[720px] h-12 bg-[#F1F3F4] rounded-lg mx-auto flex items-center overflow-hidden"
        }
      >
        <div className="w-14 h-14 grid content-center bg-transparent">
          <BiSearch className="w-9 h-9 text-[#5f6368] hover:bg-slate-50 mx-auto p-2 rounded-full cursor-pointer" />
        </div>
        <input
          value={searchInputValue}
          onChange={(e) =>
            dispatch({
              type: "SEARCH_INPUT",
              payload: { searchInputValue: e.target.value },
            })
          }
          placeholder="Telusuri topik, lokasi, & sumber"
          className="w-[550px] h-full bg-transparent outline-none text-sm"
        />
        <button
          onClick={() => search()}
          className="w-24 h-full ml-auto font-normal text-[#5f6368] text-sm"
        >
          {tag === "loading" ? <CircularLoader /> : "Search"}
        </button>
      </div>
    </>
  );
};

export default SearchInput;
