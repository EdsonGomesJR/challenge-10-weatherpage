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

import { AirQuality } from "./components/WeatherStatus/AirQuality";
import { SunTimeChart } from "./components/WeatherStatus/SunTimeChart";
import { DaysOfWeek } from "./components/WeatherStatus/DaysOfWeek";
import { TemperatureNow } from "./components/TemperatureNow/TemperatureNow";

function App() {
  return (
    <body className="flex items-center justify-center h-[100vh]">
      <main className="w-[85.375rem] h-[48rem] rounded-2xl  overflow-hidden bg-[url(./assets/bgnoblur.svg)]  bg-no-repeat bg-cover">
        <div className="w-full h-full backdrop-blur-xl grid place-items-center  grid-flow-col  justify-center gap-8">
          <section className=" grid w-[30rem]  place-items-center rounded-xl bg-[url(./assets/tempnow.svg)] bg-no-repeat bg-cover ">
            <TemperatureNow />
          </section>

          <section className="grid grid-cols-2 gap-6">
            <AirQuality />
            <SunTimeChart />
            <DaysOfWeek />
          </section>
        </div>
      </main>
    </body>
  );
}

export default App;
