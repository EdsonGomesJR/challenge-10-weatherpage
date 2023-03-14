import { Chart, Time } from "../../iconComponents";

export function SunTimeChart() {
  return (
    <div className="flex bg-[#6D67D0] flex-col  w-[17.3125rem] h-[15.25rem] rounded-[0.625rem] items-center justify-between p-4 pt-8">
      <div className="flex items-center justify-center gap-2">
        <Time className="text-2xl" />
        <span className="font-bold text-[#DAD8F7]">Horário do sol</span>
      </div>
      <div>
        <Chart width={245} height={148} />
      </div>
    </div>
  );
}
