import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  chunsik: {
    id: 1,
    name: "춘식이",
    description: "리액트 강의",
  },
  herry: {
    id: 2,
    name: "해리",
    description: "리액트 강의 화이팅",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { name, description } = ProfileData[username];

  return (
    <>
      <h3>{name}의 Profile입니다.</h3>
      <p>설명 : {description}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
};

export default Profile;
