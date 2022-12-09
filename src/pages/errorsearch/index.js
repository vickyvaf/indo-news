import { useSelector, useDispatch } from "react-redux";

const ErrorSearch = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(
    (state) => state.searchNews.searchInputValue
  );
  const errorMsg = useSelector((state) => state.searchNews.errorMsg);


  return (
    <div className="pt-40 text-center">
      <div>SOMETHING WENT WRONG</div>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorSearch;
