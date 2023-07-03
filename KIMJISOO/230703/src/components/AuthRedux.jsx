import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/modules/authSlice";

const AuthRedux = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = () => {
    dispatch(login());
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Redux로 로그인 토글 버튼 만들기</h1>
      {isAuth ? (
        <>
          <p>로그인 상태입니다.</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <p>로그인되지 않았습니다.</p>
          <button onClick={handleLogin}>로그인</button>
        </>
      )}
    </>
  );
};

export default AuthRedux;
