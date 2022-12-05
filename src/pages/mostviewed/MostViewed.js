import { useSelector, useDispatch } from "react-redux";
import Helmet from "react-helmet";

const Homepage = () => {
  // const dispatch = useDispatch();
  // const baseUrl = useSelector((state) => state.news.baseUrl);
  // const newsCategories = useSelector((state) => state.news.categories);
  // const endPoint = useSelector((state) => state.news.endPoint);

  return (
    <div>
      <div className="h-screen w-full pt-28 bg-[#F6F8FC] font-poppins">
        <div className="max-w-[950px] mx-auto">
          <div className="w-full my-5">
            <h1 className="text-3xl mb-2">Most Viewed</h1>
            <span className="text-sm text-[#5f6368]">Minggu, 4 Desember</span>
          </div>
          <div className="w-full">
            <div className="w-8/12 bg-white">
              <h1>LOL</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
