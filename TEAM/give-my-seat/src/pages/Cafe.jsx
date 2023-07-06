import { useLocation, useNavigate } from "react-router-dom";
import PrevArrow from "../assets/prev_arrow.svg";
import Instagram from "../assets/instagram.svg";
import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as HeartFilled } from "../assets/HeartFilled.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import cafeJogi from "../assets/cafe jeogi big.png";
import DUMMY_CAFES from "../mocks/cafes";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

const SBackButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const STitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

const SSocial = styled.div`
  display: flex;
  gap: 10px;
`;

const SCafeImage = styled.img`
  width: 266px;
  height: 150px;
  border-radius: 10px;
`;

const SMain = styled.main`
  width: 266px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  color: var(--text-color);
`;

const SInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 26px;
`;

const SLink = styled(Link)`
  height: fit-content;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 6px 14px;
  font-weight: 600;
  font-size: 15px;
`;

const SDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > div {
    display: flex;
    gap: 5px;
  }
`;

const SMenu = styled.div`
  width: 100%;
  h5 {
    margin-bottom: 14px;
    font-size: 12px;
    font-weight: 700;
    color: #000;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-between;
    gap: 9px;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 40%;
  }
`;

const Cafe = ({ cafes = DUMMY_CAFES }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { address, businessHours, isLike, menu, phoneNumber } = cafes.find(
    (cafe) => cafe.id === +pathname.split("/").at(-1)
  );

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <SHeader>
        <SBackButton onClick={back}>
          <img src={PrevArrow} alt="뒤로가기" />
        </SBackButton>
        <STitle>카페 여기</STitle>
        <SSocial>
          <img src={Instagram} alt="인스타그램" />
          {isLike ? <HeartFilled /> : <Heart />}
        </SSocial>
      </SHeader>
      <SMain>
        <SCafeImage src={cafeJogi} alt="카페 이미지" />
        <SInformation>
          <SDetail>
            <div>
              <Location />
              <span>{address}</span>
            </div>
            <div>
              <Phone />
              <span>{businessHours}</span>
            </div>
            <div>
              <Clock />
              <span>{phoneNumber}</span>
            </div>
          </SDetail>
          <SLink to="/seat">좌석 현황</SLink>
        </SInformation>
        <SMenu>
          <h5>메뉴</h5>
          <ul>
            {menu.map(({ name, price }) => (
              <li key={name}>
                <span>{name}</span>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </SMenu>
      </SMain>
    </div>
  );
};

export default Cafe;
