import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HomepageSkeleton,
  SideHomepageSkeleton,
} from "../../components/utils/Loader";
import PopularCard from "../../components/homepage-cards/PopularCard";
import IndonesiaCard from "../../components/homepage-cards/IndonesiaCard";
import WorldCard from "../../components/homepage-cards/WorldCard";
import Helmet from "react-helmet";

const Homepage = () => {
  const dispatch = useDispatch();
  const tagPopular = useSelector((state) => state.popular.tag);
  const tagIndonesia = useSelector((state) => state.indonesia.tag);

  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []);

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
              <>
                <div className="flex w-full gap-x-4">
                  <div className="space-y-4 flex flex-col w-8/12">
                    <HomepageSkeleton />
                    <HomepageSkeleton />
                  </div>
                  <div className="w-4/12">
                    <SideHomepageSkeleton />
                  </div>
                </div>
                <div className="flex justify-between gap-4 mt-7">
                  <div className="w-4/12">
                    <SideHomepageSkeleton />
                  </div>
                  <div className="w-4/12">
                    <SideHomepageSkeleton />
                  </div>
                  <div className="w-4/12">
                    <SideHomepageSkeleton />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex w-full gap-x-4">
                  <div className="space-y-2 flex flex-col w-8/12">
                    <PopularCard />
                    <IndonesiaCard />
                  </div>
                  <div className="w-4/12">
                    <WorldCard />
                  </div>
                </div>
                <h1 className="mt-10 text-3xl">Topik Anda</h1>
                <div className="flex justify-between gap-4 mt-5">
                  <div className="w-4/12">
                    <WorldCard />
                  </div>
                  <div className="w-4/12">
                    <WorldCard />
                  </div>
                  <div className="w-4/12">
                    <WorldCard />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
