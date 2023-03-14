import { Leaf } from "../../iconComponents";

export function AirQuality() {
  return (
    <div className="flex bg-[#6D67D0] flex-col rounded-[0.625rem] w-[17.3125rem] h-[15.25rem] p-4 items-center justify-center ">
      <div className="flex  text-[#DAD8F7] mt-8 font-bold items-center gap-2 justify-center">
        <Leaf width={24} height={24} />
        <span className="leading-[1.1875rem]">Qualidade do ar</span>
      </div>
      <div className="flex flex-col items-center mt-8  text-white ">
        <span className="text-[1.125rem] leading-[1.375rem] font-bold text-[#87EBCD]">
          Boa
        </span>
        <span className="text-[2.5rem] leading-[3rem] font-bold text-[#E7E6FB] mt-1">
          21
        </span>
      </div>
      <div className="grid grid-cols-6 mt-8 gap-2 place-content-center justify-items-center mb-4">
        <div className="flex items-center justify-center flex-col gap-[0.125rem] ">
          <span className="text-[#87EBCD] text-[0.875rem] leading-[1.0625rem] font-bold">
            12.9
          </span>
          <span className="text-[0.75rem]  text-[#E7E6FB] font-normal">
            PM2.5
          </span>
        </div>
        <div className="flex items-center justify-center flex-col text-sm ">
          <span className="text-[#87EBCD] text-[0.875rem] leading-[1.0625rem] font-bold">
            12.9
          </span>
          <span className="text-[12px]  text-[#E7E6FB] font-normal">PM10</span>
        </div>
        <div className="flex items-center justify-center flex-col  ">
          <span className="text-[#87EBCD] text-[0.875rem] leading-[1.0625rem]  font-bold">
            2.1
          </span>
          <span className="text-[12px]  text-[#E7E6FB] font-normal">
            SO<sub>2</sub>
          </span>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <span className="text-[#87EBCD] text-[0.875rem] leading-[1.0625rem] font-bold">
            1.4
          </span>
          <span className="text-[12px]  text-[#E7E6FB] font-normal">
            NO<sub>2</sub>
          </span>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <span className="text-[#87EBCD] text-[0.875rem] leading-[1.0625rem] font-bold">
            21.2
          </span>
          <span className="text-[12px]  text-[#E7E6FB] font-normal">
            O<sub className="">2</sub>
          </span>
        </div>
        <div className="flex items-center text-center justify-center flex-col place-items-center">
          <span className="text-[#87EBCD]  text-[0.875rem] leading-[1.0625rem]  font-bold">
            0.7
          </span>
          <span className="text-[12px]  text-[#E7E6FB]">
            CO<sub>2</sub>
          </span>
        </div>
      </div>
    </div>
  );
}
