import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailPost = () => {
  const location = useLocation();
  const [detailPost, setDetailPost] = useState([]);
  // const tagSearch = useSelector((state) => state.search.tag);

  const getDetailPost = () => {
    axios(`${"https://jakpost.vercel.app/api"}${location.pathname}`).then(
      (res) => setDetailPost(res.data.detail_post)
    );
  };

  useEffect(() => {
    getDetailPost();
    console.log(detailPost);
  }, []);

  return (
    <>
      <div className="pt-40">
        <div>{detailPost.title}</div>
      </div>
    </>
  );
};

export default DetailPost;
