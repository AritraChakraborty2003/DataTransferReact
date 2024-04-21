import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  console.log(location.state.val);
  return (
    <>
      <h1>This is a code</h1>
    </>
  );
};

export default Details;
