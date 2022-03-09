import "./Tab.css";

const Tab = ({ id, name, active, onSelectTab }) => {
  const clickButtonHandler = () => {
    onSelectTab(id);
  };

  return (
    <button
      className={id === active ? "tab active" : "tab"}
      onClick={clickButtonHandler}
    >
      {name}
    </button>
  );
};

export default Tab;
