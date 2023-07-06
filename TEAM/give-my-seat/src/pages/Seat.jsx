import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowIcon from "../assets/prev_arrow.svg";
import seats from "../mocks/seats";

const Body = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid red;
`;

const Title = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  gap: 80px;
  margin: 22px 0 87px 10px;
`;

const Background = styled.div`
  background: var(--bg-color);
  width: 100%;
  height: 181px;
  border-radius: 0 0 10px 10px;
`;

const SeatsBackground = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 204px;
  gap: 10px;
`;

const SeatWrapper = styled.div`
  width: 42px;
  height: 39px;
  border-radius: 10px;
  background: ${({ isEmpty }) =>
    isEmpty ? "var(--bg-color)" : "var(--primary-color)"};
`;

const Seat = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Background>
        <Title>
          <img src={arrowIcon} alt="arrow icon" onClick={() => navigate(-1)} />
          <h4>카페 여기</h4>
        </Title>
        <SeatsBackground>
          <SeatsContainer>
            {seats.map((seat) => (
              <SeatWrapper key={seat.id} isEmpty={seat.isEmpty} />
            ))}
          </SeatsContainer>
        </SeatsBackground>
      </Background>
    </Body>
  );
};

export default Seat;
