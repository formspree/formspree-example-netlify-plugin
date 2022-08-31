import { FC, PropsWithChildren } from "react";

const BigText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drop-shadow-block  width-full text-center mt-[25vh] mb-[15vh]">
      <h1 className="font-display inline-block text-[8vw] xl:text-[6vw] leading-none text-gradient skew-x-12 -skew-y-3 scale-[2.0]">
        {children}
      </h1>
    </div>
  );
};

export default BigText;
