import wind from "./assets/wind.svg";
import humidity from "./assets/humidity.svg";
import rain from "./assets/rain.svg";
import cloud from "./assets/cloud.svg";
import pin from "./assets/pin.svg";

function App() {
  return (
    <body className="w-[100vw] h-[100vh] grid place-items-center">
      <main className="w-[1366px] h-[768px] rounded-2xl  overflow-hidden bg-[url(./assets/bgnoblur.svg)]  bg-no-repeat ">
        <div className="w-full h-full backdrop-blur-xl grid place-items-center grid-flow-col  ">
          <section className=" grid w-[480px] h-[480px]  bg-[url(./assets/tempnow.svg)] bg-no-repeat">
            <div className="temperature-now w-full h-full   rounded-xl  p-3 ">
              <header className="relative">
                <div className="cidade w-[176px] h-[176px] absolute top-[-70px] right-[360px]  bg-[url(./assets/cloud.svg)]"></div>
                <div className="flex gap-1 justify-end p-5 ">
                  <img src={pin} alt="icon" />
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
              <footer className=" mt-[140px] ">
                <div className="grid grid-cols-3 gap-2 ">
                  {/* Wind */}
                  <div className="vento gap-3 py-3 px-4 rounded-lg bg-[#6660C8]/[0.6] flex">
                    <img className="" src={wind} alt="wind" />
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
                    <img className="" src={humidity} alt="humidity" />
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
                    <img className="" src={rain} alt="rain" />
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
          <section className="right">
            <div>
              <div>
                <img src="" alt="" />
                <span>Qualidade do ar</span>
              </div>
              <div className="qualidade-ar">
                <span>Boa</span>
                <span>21</span>
              </div>
              <div>
                <div>
                  <span>12.9</span>
                  <span>PM2.5</span>
                </div>
                <div>
                  <span>12.9</span>
                  <span>PM10</span>
                </div>
                <div>
                  <span>2.1</span>
                  <span>
                    SO <span>2</span>
                  </span>
                </div>
                <div>
                  <span>1.4</span>
                  <span>
                    NO <span>2</span>
                  </span>
                </div>
                <div>
                  <span>21.2</span>
                  <span>
                    O <span>2</span>
                  </span>
                </div>
                <div>
                  <span>0.7</span>
                  <span>
                    CO <span>2</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="horario-sol">
              <div>
                <img src="" alt="" />
                <span>Horário do sol</span>
              </div>
              <div>Graph no formato de um compasso</div>
            </div>
            <div className="dias-semana">
              <div>
                <span>Amanhã</span>
                <img src="" alt="" />
                <span>
                  21º <span> 16º</span>
                </span>
              </div>
              <div>
                <span>Sexta-feira</span>
                <img src="" alt="" />
                <span>
                  28º <span> 20º</span>
                </span>
              </div>
              <div>
                <span>Sábado</span>
                <img src="" alt="" />
                <span>
                  25º <span> 21º</span>
                </span>
              </div>
              <div>
                <span>Domingo</span>
                <img src="" alt="" />
                <span>
                  20º <span> 14º</span>
                </span>
              </div>
              <div>
                <span>Segunda-feira</span>
                <img src="" alt="" />
                <span>
                  24º <span> 18º</span>
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
