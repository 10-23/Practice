import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    // 검색 결과를 가져오는 비동기 함수 호출 또는 API 요청 등을 수행할 수 있습니다.

    // 예시: 검색 결과를 콘솔에 출력
    console.log("검색 결과:", query);
  }, [query]);
  return (
    <>
      <h1>SearchResults</h1>
      <h3>검색어 : {query}</h3>
    </>
  );
};

export default SearchResults;
