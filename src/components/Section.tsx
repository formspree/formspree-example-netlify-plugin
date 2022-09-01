import { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<{ background?: string }>> = ({
  background,
  children,
}) => (
  <section className={`${background || "bg-white"} rounded-xl p-12 mt-20`}>
    {children}
  </section>
);

export default Section;
