import Button from "../Button/Button";

import "./Tabs.css";

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="tab-buttons">
      {tabs.map(({ key, title }) => (
        <Button
          key={key}
          name={title}
          className={key === activeTab ? "active" : ""}
          onClick={() => onTabClick(key)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
