import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="mt-10 text-center">
      <p className="">
        Challenge by{" "}
        <span className="text-red-500 underline  cursor-pointer">
          Frontend Mentor
        </span>
      </p>
      <p className=" ">
        Coded by{" "}
        <span className="text-red-500 underline cursor-pointer">tao.yuwen</span>
      </p>
    </div>
  );
};

export default Footer;
