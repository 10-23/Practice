// Ducks구조 - 액션과 리듀서를 하나의 파일에 모두 작성하는 것.

// 액션 타입 정의. (서로 다른 모듈에서 동일한 액션 이름을 가질 수 있음. ex. "another/INCREMENT")
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성 함수를 만든다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보낸다.
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 모듈의 초기 상태 정의.
const initialState = {
  number: 0,
};

// 리듀서를 만들어서 내보내준다.
export default function reducer(state = initialState, action) {
  // 리듀서 함수에서는 액션의 타입에 따라 변화 된 상태를 정의하여 반환한다.
  // state = initailState 이렇게 하면 initialState가 기본 값으로 사용된다.
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환한다.
  }
}
