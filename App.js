import "./styles.css";
import Screen from "./Components/Screen";
import Wrapper from "./Components/Wrapper.jsx";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";
import CalProvider from "./Context/CalContext";
const btnValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];
export default function App() {
  return (
    <CalProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalProvider>
  );
}
