import React from "react";
import "./styles/styles.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className="SideBarOption">
      <p>
        {Icon && <Icon className="sidebar-icon" />}
        <span>{title}</span>
      </p>
    </div>
  );
}

export default SideBarOption;
