import cloud1 from "../../assets/days-section/cloud1.svg";
import cloudbolt from "../../assets/days-section/cloudbolt.svg";
import cloudsun from "../../assets/days-section/cloudsun.svg";
import rain1 from "../../assets/days-section/rain1.svg";
import sun from "../../assets/days-section/sun.svg";
export function DaysOfWeek() {
  return (
    <div className="grid col-span-2 grid-cols-5 p-10 text-[#DAD8F7] bg-[#6D67D0] rounded-[10px] gap-3">
      <div className=" flex flex-col items-center justify-center gap-4">
        <span className="text-sm font-bold ">Amanhã</span>
        <img className="w-16 h-16" src={cloud1} alt="Nublado" />
        <span className="text-white ">
          21º<span className="text-[#DAD8F7]"> 16º</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-sm font-bold ">Sexta-feira</span>
        <img src={sun} alt="Sol" />
        <span className="text-white ">
          28º <span className="text-[#DAD8F7]"> 20º</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-sm font-bold ">Sábado</span>
        <img src={rain1} alt="Chuva" />
        <span className="text-white ">
          25º <span className="text-[#DAD8F7]"> 21º</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-sm font-bold ">Domingo</span>
        <img src={cloudbolt} alt="Temporal" />
        <span className="text-white ">
          20º <span className="text-[#DAD8F7]"> 14º</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-sm font-bold ">Segunda-feira</span>
        <img src={cloudsun} alt="Parcialmente Nublado" />
        <span className="text-white ">
          24º <span className="text-[#DAD8F7]"> 18º</span>
        </span>
      </div>
    </div>
  );
}
