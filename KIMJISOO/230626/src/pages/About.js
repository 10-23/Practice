import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>About</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="원하는 지역"
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
};

export default About;
