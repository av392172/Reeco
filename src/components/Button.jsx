import React from "react";

function Button({ type, title, color, bgCol }) {
  return (
    <button
      className={`flexCenter rounded-full ${color} ${bgCol} border-2 border-green-800 px-4 py-2`}
      type={type}
    >
      {/* {icon && <img src={icon} alt="login" width="20" height="20" />} */}
      <label className="text-sm font-bold whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
}

export default Button;
