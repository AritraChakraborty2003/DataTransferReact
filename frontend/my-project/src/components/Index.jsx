import { useNavigate } from "react-router-dom";
//import Details from "./Details";
const Index = () => {
  const data = {
    name: "Aritra",
    age: 23,
    gender: "male",
  };
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="bg-black text-white p-3"
      onClick={() => {
        navigate("/details", { state: { val: data } });
      }}
    >
      Click Me
    </button>
  );
};

export default Index;
