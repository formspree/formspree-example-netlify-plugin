import { FC, PropsWithChildren } from "react";

const Headshot: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="col-span-full aspect-square lg:col-span-1 p-2 bg-white rounded-full">
      <img
        className="object-center object-cover rounded-full"
        src={src}
        alt="photo"
      />
    </div>
  );
};

const Detail: FC<PropsWithChildren<{ name: string; title: string }>> = ({
  name,
  title,
  children,
}) => {
  return (
    <div className="col-span-full sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-xl p-12 flex flex-col justify-center">
      <h2 className="text-4xl text-orange-900 font-bold mb-4">{name}</h2>
      <p className="text-2xl text-gray-500 font-normal mb-4">{title}</p>
      <div className="text-xl font-normal">{children}</div>
    </div>
  );
};

const Speakers: FC<PropsWithChildren> & {
  Headshot: typeof Headshot;
  Detail: typeof Detail;
} = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-20 items-center">
      {children}
    </div>
  );
};

Speakers.Headshot = Headshot;
Speakers.Detail = Detail;

export default Speakers;
