import { AirQuality } from "./components/WeatherStatus/AirQuality";
import { SunTimeChart } from "./components/WeatherStatus/SunTimeChart";
import { DaysOfWeek } from "./components/WeatherStatus/DaysOfWeek";
import { TemperatureNow } from "./components/TemperatureNow/TemperatureNow";
import { useEffect, useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(latitude, longitude);
        }
      );
    }
    getCurrentLatLong();
  }, [latitude]);

  const api = {
    key: "5499337e5165c2d553efb6f9d6d1eee1",
    url: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    unit: "metric",
  };

  async function getCurrentLatLong() {
    const request = await fetch(
      `${api.url}weather?lat=${latitude}&lon=${longitude}&lang=${api.lang}&units=${api.unit}&APPID=${api.key}`
    );
    const response = await request.json();

    return setCityName(response.name);
  }
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <main className="w-[85.375rem] h-[48rem] rounded-2xl  overflow-hidden bg-[url(./assets/bgnoblur.svg)]  bg-no-repeat bg-cover">
        <div className="w-full h-full backdrop-blur-xl grid place-items-center  grid-flow-col  justify-center gap-8">
          <section className=" grid w-[30rem]  place-items-center rounded-xl bg-[url(./assets/tempnow.svg)] bg-no-repeat bg-cover ">
            <TemperatureNow cityName={cityName} />
          </section>

          <section className="grid grid-cols-2 gap-6">
            <AirQuality />
            <SunTimeChart />
            <DaysOfWeek />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
