import Button from "../../../../components/Button/Button";

import "./CalculatorDevice.css";

const CalculatorDevice = ({
  displayValue,
  onChangeDisplayValue,
  calculatorHistory,
  onSaveCalculatorHistory,
}) => {
  const handleClick = (buttonValue) => {
    try {
      if (buttonValue === "=") {
        const result = eval(displayValue);
        if (result == "Infinity") {
          throw new Error();
        } else {
          onChangeDisplayValue(result);
        }
      } else {
        const newDisplayValue =
          displayValue === "0" ? buttonValue : displayValue + buttonValue;
        onChangeDisplayValue(newDisplayValue);

        if (calculatorHistory.length >= 20) {
          onSaveCalculatorHistory((prevHistory) => [
            ...prevHistory.slice(1),
            buttonValue,
          ]);
        } else {
          onSaveCalculatorHistory((prevHistory) => [
            ...prevHistory,
            buttonValue,
          ]);
        }
      }
    } catch (error) {
      onChangeDisplayValue("Something went wrong");
      setTimeout(() => {
        onChangeDisplayValue("0");
      }, 2000);
    }
  };

  return (
    <div className="calculator">
      <div className="c-value">{displayValue}</div>

      <Button className="c-button" name="7" onClick={() => handleClick("7")} />
      <Button className="c-button" name="8" onClick={() => handleClick("8")} />
      <Button className="c-button" name="9" onClick={() => handleClick("9")} />
      <Button className="c-button" name="/" onClick={() => handleClick("/")} />

      <Button className="c-button" name="4" onClick={() => handleClick("4")} />
      <Button className="c-button" name="5" onClick={() => handleClick("5")} />
      <Button className="c-button" name="6" onClick={() => handleClick("6")} />
      <Button className="c-button" name="*" onClick={() => handleClick("*")} />

      <Button className="c-button" name="1" onClick={() => handleClick("1")} />
      <Button className="c-button" name="2" onClick={() => handleClick("2")} />
      <Button className="c-button" name="3" onClick={() => handleClick("3")} />
      <Button className="c-button" name="+" onClick={() => handleClick("+")} />

      <Button className="c-button" name="0" onClick={() => handleClick("0")} />
      <Button className="c-button" name="." onClick={() => handleClick(".")} />
      <Button className="c-button" name="=" onClick={() => handleClick("=")} />
      <Button className="c-button" name="-" onClick={() => handleClick("-")} />
    </div>
  );
};
export default CalculatorDevice;
