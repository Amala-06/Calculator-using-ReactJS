import { useContext } from "react";
import { CalContext } from "../Context/CalContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals"
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalContext);
  //user resets the content
  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0
    });
  };
  //user uses float
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };
  //for the operation to be performed
  const signClick = () => {
    setCalc({
      sign: value,
      num: 0,
      res: !calc.res && calc.num ? calc.num : calc.res
    });
  };
  //user click equal
  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "/": (a, b) => a / b,
          "*": (a, b) => a * b
        };
        return result[sign](a, b);
      };
      setCalc({
        sign: "",
        num: 0,
        res: math(calc.res, calc.num, calc.sign)
      });
    }
  };
  //invert
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    });
  };
  //use percentage
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: ""
    });
  };
  //user clicks on number
  const handleClickButton = () => {
    const numberstr = value.toString();
    let numberValue;
    if (numberstr === "0" && calc.num === 0) {
      //if 0 neednot update to 00
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberstr); //append values at the end of a number
      // to get two-three digit number
    }
    setCalc({
      ...calc,
      num: numberValue
    });
  };
  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      "*": signClick,
      "+": signClick,
      "-": signClick,
      "=": equalClick,
      "%": percentClick,
      "+-": invertClick
    }; //if C or . then call the respective function else call handleClickButton function
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };
  return (
    <button
      onClick={handleBtnClick}
      className={"${getStyleName(value))} button"}
    >
      {value}
    </button>
  );
};
export default Button;

