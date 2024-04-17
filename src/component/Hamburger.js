import React from "react";
import PropTypes from "prop-types";

const Hamburger = (props) => {
  return (
    <button
      onClick={props.handleMenu}
      className="border-[2px] border-black p-[0.4rem] rounded-md lg:hidden"
    >
      <div className="w-[1.9rem] h-[0.3rem] bg-black mb-[0.3rem]"></div>
      <div className="w-[1.9rem] h-[0.3rem] bg-black mb-[0.3rem]"></div>
      <div className="w-[1.9rem] h-[0.3rem] bg-black"></div>
    </button>
  );
};

Hamburger.propTypes = {
  handleMenu: PropTypes.func,
};
export default Hamburger;
