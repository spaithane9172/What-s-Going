import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-[10px] border-b-black w-[4rem] h-[4rem] rounded-full animate-spin"></div>
    </div>
  );
};
export default Spinner;
