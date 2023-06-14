import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Tabs from "../../../../components/Tabs/Tabs";
import CalculatorDevice from "../CalculatorDevice/CalculatorDevice";
import CalculatorHistory from "../CalculatorHistory/CalculatorHistory";
import Button from "../../../../components/Button/Button";

import "./Calculator.css";

const Calculator = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(1);
  const [userData, setUserData] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [calculatorHistory, setCalculatorHistory] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const navigateToLogin = useCallback(() => {
    return navigate("/login", { replace: true });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigateToLogin();
  };

  const handleClearHistory = () => {
    setCalculatorHistory([]);
  };

  const tabs = [
    {
      key: 1,
      title: "Calculator",
      content: (
        <CalculatorDevice
          displayValue={displayValue}
          onChangeDisplayValue={setDisplayValue}
          calculatorHistory={calculatorHistory}
          onSaveCalculatorHistory={setCalculatorHistory}
        />
      ),
    },
    {
      key: 2,
      title: "History",
      content: (
        <CalculatorHistory
          calculatorHistory={calculatorHistory}
          onClearHistory={handleClearHistory}
        />
      ),
    },
  ];
  const activeContent = tabs.find((e) => e.key === activeTab);

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user"));
    if (!storageUser) {
      navigateToLogin();
    } else {
      setUserData(storageUser);
    }
  }, [navigateToLogin]);

  if (!userData) return null;

  return (
    <div className="content">
      <div className="header">
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

        <div>
          <Button
            type="button"
            onClick={handleLogout}
            name="Logout"
            className="logoutButton"
          />
          <span className="userInfo">
            Hey, <strong>{userData.userName}</strong>
          </span>
        </div>
      </div>

      <div className="tab-content">{activeContent.content}</div>
    </div>
  );
};
export default Calculator;
