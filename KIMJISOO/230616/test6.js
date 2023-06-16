function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

const add2 = (a, b) => {
  return a + b;
};

const sum2 = add(1, 2);
console.log(sum2);

const ironMan = {
  name: "토니스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const { name, actor, alias } = ironMan;
console.log(name);
console.log(actor);
console.log(alias);

// console.log(value) === console.log(event.target.value);
const onChange = (event) => {
  const {
    target: { value },
  } = event;
  console.log(value);
};
