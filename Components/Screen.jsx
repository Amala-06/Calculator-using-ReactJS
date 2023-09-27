import { useContext } from "react";
import { CalContext } from "../Context/CalContext";
const Screen = () => {
  const { calc } = useContext(CalContext);
  return (
    <div className="Screen" max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </div>
  );
};
export default Screen;
