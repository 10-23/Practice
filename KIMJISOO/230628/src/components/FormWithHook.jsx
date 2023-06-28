import useForm from "../hooks/useForm";

const FormWithHook = () => {
  const { value, handleChange, handleReset } = useForm({
    id: "",
    pw: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 데이터", value);
    handleReset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID : </label>
          <input
            type="text"
            name="id"
            id="id"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pw">PW : </label>
          <input
            type="password"
            name="pw"
            id="pw"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default FormWithHook;
