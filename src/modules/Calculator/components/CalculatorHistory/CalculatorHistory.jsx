import Button from "../../../../components/Button/Button";

import "./CalculatorHistory.css";

const CalculatorHistory = ({ calculatorHistory, onClearHistory }) => {
  const historyItems = calculatorHistory.map((buttonValue, index) => (
    <div key={index}>{`${++index}. ${buttonValue}`}</div>
  ));

  return (
    <ul>
      {calculatorHistory.length ? (
        <>
          {historyItems}

          <Button
            name="Clear History"
            className="clearHistory"
            onClick={onClearHistory}
          />
        </>
      ) : (
        "No Clicks History"
      )}
    </ul>
  );
};

export default CalculatorHistory;
