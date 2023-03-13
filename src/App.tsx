import wind from "./assets/wind.svg";
import humidity from "./assets/humidity.svg";
import rain from "./assets/rain.svg";
import pin from "./assets/pin.svg";
import leaf from "./assets/leaf.svg";
import time from "./assets/time.svg";
import chart from "./assets/chart.svg";
import cloud1 from "./assets/days-section/cloud1.svg";
import cloudbolt from "./assets/days-section/cloudbolt.svg";
import cloudsun from "./assets/days-section/cloudsun.svg";
import rain1 from "./assets/days-section/rain1.svg";
import sun from "./assets/days-section/sun.svg";

import { Chart, Humidity, Leaf, Pin, Rain, Time, Wind } from "./iconComponents";

function App() {
  return (
    <body className="w-[100vw] h-[100vh] grid place-items-center">
      <main className="w-[1366px] h-[768px] rounded-2xl  overflow-hidden bg-[url(./assets/bgnoblur.svg)]  bg-no-repeat ">
        <div className="w-full h-full backdrop-blur-xl grid place-items-center  grid-flow-col  justify-center gap-8">
          <section className=" grid w-[480px]  place-items-center rounded-xl bg-[url(./assets/tempnow.svg)] bg-no-repeat bg-cover ">
            <div className="temperature-now w-full h-full   rounded-xl  p-3 ">
              <header className="relative">
                <div className="cidade w-[176px] h-[176px] absolute top-[-70px] right-[360px]  bg-[url(./assets/cloud.svg)]"></div>
                <div className="flex gap-1 justify-end p-5 items-center ">
                  <Pin className="text-xl text-[#9D99E4]" />

                  <span className="text-[#C2BFF4] font-bold">
                    {" "}
                    Rio do Sul, SC
                  </span>
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
                        <span className="text-lg leading-[22px] font-bold">
                          17
                        </span>
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
                        <span className="text-lg leading-[22px] font-bold">
                          31
                        </span>
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
                        <span className="text-lg leading-[22px] font-bold">
                          10
                        </span>
                        <span className="text-sm text-[#DAD8F7]">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <div className="flex bg-[#6D67D0] flex-col gap-8  rounded-[0.625rem] items-center p-4 pt-8 ">
              <div className="flex gap-2 p-0 text-[#DAD8F7] font-bold items-center">
                <Leaf width="1.5rem" height="1.5rem" />
                <span className="text-[1.1875rem]">Qualidade do ar</span>
              </div>
              <div className="flex flex-col items-center text-white gap-1 ">
                <span className="text-[1.125rem] leading-[1.375rem] font-bold text-[#87EBCD]">
                  Boa
                </span>
                <span className="text-[2.5rem] leading-[3rem] font-bold text-[#E7E6FB]">
                  21
                </span>
              </div>
              <div className="grid grid-cols-6 gap-4">
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
                  <span className="text-[12px]  text-[#E7E6FB] font-normal">
                    PM10
                  </span>
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
            <div className="flex bg-[#6D67D0] flex-col w-[277px] h-[244px]  rounded-[10px] items-center justify-between p-4 pt-8">
              <div className="flex items-center justify-center gap-2">
                <Time className="text-2xl" />
                <span className="font-bold text-[#DAD8F7]">Horário do sol</span>
              </div>
              <div>
                <Chart width={245} height={148} />
              </div>
            </div>
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
          </section>
        </div>
      </main>
    </body>
  );
}

export default App;
