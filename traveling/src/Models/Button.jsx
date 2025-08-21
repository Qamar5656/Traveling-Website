import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <div>
        <div>
          <button className="p-2 text-light font-bold rounded-lg btn-primary cursor-pointer sm:text-md md:text-md lg:text-lg  xl:text-xl ">
            {text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
