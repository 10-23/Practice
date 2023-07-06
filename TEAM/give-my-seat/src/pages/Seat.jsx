import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowIcon from "../assets/prev_arrow.svg";
import seats from "../mocks/seats";

const Title = styled.h4`
  color: #000000;
  font-weight: 700;
  font-size: 20px;
`;
const Background = styled.div`
  background: var(--bg-color);
  height: 181px;
  border-radius: 0 0 10px 10px;
`;
const SeatsBackground = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  width: 280px;
  height: 350px;
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
    <>
      <Background />
      <img src={arrowIcon} alt="arrow icon" onClick={() => navigate(-1)} />
      <Title>카페 여기</Title>
      <SeatsBackground />
      {seats.map((seat) => (
        <SeatWrapper key={seat.id} isEmpty={seat.isEmpty} />
      ))}
    </>
  );
};

export default Seat;
