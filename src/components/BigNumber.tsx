export default function BigNumber({
  number,
  unit,
  digits = 2,
}: {
  number: number;
  unit: string;
  digits?: number;
}) {
  return (
    <div className="bg-white/75 rounded-xl ">
      <div className="flex flex-col font-display text-9xl text-center px-5 py-4">
        <div className="text-gradient">
          {Math.floor(number).toString().padStart(digits, "0")}
        </div>
        <div className="text-gradient text-3xl">{unit}</div>
      </div>
    </div>
  );
}
