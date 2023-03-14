import { Humidity, Pin, Rain, Wind } from "../../iconComponents";

interface TemperatureNowProps {
  cityName: string;
}
export function TemperatureNow({ cityName }: TemperatureNowProps) {
  return (
    <div className="temperature-now w-full h-full   rounded-xl  p-3 ">
      <header className="relative">
        <div className="cidade w-[176px] h-[176px] absolute top-[-70px] right-[360px]  bg-[url(./assets/cloud.svg)]"></div>
        <div className="flex gap-1 justify-end p-5 items-center ">
          <Pin className="text-xl text-[#9D99E4]" />

          <span className="text-[#C2BFF4] font-bold"> {cityName}</span>
        </div>
      </header>
      <div className=" grid place-items-center mt-[60px] text-white">
        <div className=" grid  grid-flow-col">
          <div className="text-[88px] font-bold leading-none">18</div>
          <div className=" text-2xl text-[#DAD8F7] mt-1 ">
            <span className="">ºC</span>
          </div>
        </div>
        <span className="text-xl mr-6 ">
          22º <span className="text-[#DAD8F7]">16º</span>{" "}
        </span>
      </div>
      <footer className=" mt-[173.85px] ">
        <div className="grid grid-cols-3 gap-2 ">
          {/* Wind */}
          <div className="vento gap-3 py-3 px-4 rounded-lg bg-[#6660C8]/[0.6] flex">
            {/* <img className="" src={wind} alt="wind" /> */}
            <Wind className="text-4xl" />
            <div className="flex flex-col text-[#E7E6FB]">
              <span className="text-xs leading-[14px]">Vento</span>
              <div className="flex items-center jutify-center gap-1">
                <span className="text-lg leading-[22px] font-bold">17</span>
                <span className="text-sm text-[#DAD8F7]">km/h</span>
              </div>
            </div>
          </div>
          {/* Humidity */}
          <div className="vento gap-3 py-3 px-4 rounded-lg bg-[#6660C8]/[0.6] flex">
            <Humidity className="text-4xl" />
            <div className="flex flex-col text-[#E7E6FB]">
              <span className="text-xs leading-[14px]">Umidade</span>
              <div className="flex items-center jutify-center gap-1">
                <span className="text-lg leading-[22px] font-bold">31</span>
                <span className="text-sm text-[#DAD8F7]">%</span>
              </div>
            </div>
          </div>
          {/* Rain */}
          <div className="vento gap-3 py-3 px-4 rounded-lg bg-[#6660C8]/[0.6] flex">
            <Rain className="text-4xl" />
            <div className="flex flex-col text-[#E7E6FB]">
              <span className="text-xs leading-[14px]">Chuva</span>
              <div className="flex items-center jutify-center gap-1">
                <span className="text-lg leading-[22px] font-bold">10</span>
                <span className="text-sm text-[#DAD8F7]">%</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
