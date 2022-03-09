import { useState } from "react";

import Tab from "./Tab/Tab";

import './Filter.css';

const Filter = ({ data, onSelectTab }) => {
    const [activeTab, setActiveTab] = useState("1");

    const selectTabHandler = (id) => {
        setActiveTab(id);
        onSelectTab(id)
    };

    return (
        <div className="filter-container">
            {data.map((data) => (
                <Tab key={data.id} id={data.id} name={data.name} active={activeTab} onSelectTab={selectTabHandler} />
            ))}
        </div>
    )
};

export default Filter;