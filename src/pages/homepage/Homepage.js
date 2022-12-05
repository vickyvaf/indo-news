import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomepageSkeleton } from "../../components/utils/Loader";
import PopularCard from "../../components/homepage-cards/PopularCard";
import IndonesiaCard from "../../components/homepage-cards/IndonesiaCard";
import Helmet from "react-helmet";

const Homepage = () => {
  const tagPopular = useSelector((state) => state.popular.tag);
  const tagIndonesia = useSelector((state) => state.indonesia.tag);

  return (
    <div>
      <div className="w-full pt-32 bg-[#F6F8FC] font-poppins">
        <div className="max-w-[950px] mx-auto flex flex-wrap justify-between">
          <div className="w-full mb-5">
            <h1 className="text-3xl mb-2">Untuk Anda</h1>
            <span className="text-sm text-[#5f6368]">Minggu, 4 Desember</span>
          </div>
          <div className="w-full">
            {tagPopular === "loading" || tagIndonesia === "loading" ? (
              <div className="space-y-4">
                <HomepageSkeleton />
                <HomepageSkeleton />
              </div>
            ) : (
              <div className="space-y-4">
                <PopularCard />
                <IndonesiaCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
