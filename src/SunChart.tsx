import sunchart from "./assets/sunchart.svg";

/**
 *
 *section {
  background: black;
  backdrop-filter: blur(1rem);
  border-radius: 1rem;
}

.sun-chart-wrapper {
  margin-top: 40px;
  height: 110px;
}

.sun-chart {
  --pos-x: 75;
  margin: auto;
  width: 217px;
  height: 217px;

  position: relative;
}

.sun-chart::before {
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  background: #f6c833;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: -6px;
  transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180)))
    translate(106px);
}

.chart {
  width: 217px;
  height: 108px;
  overflow: hidden;
}

.chart::before {
  content: "";
  width: 210px;
  height: 210px;

  display: block;
  border-radius: 50%;

  background: linear-gradient(
    180deg,
    rgba(251, 219, 96, 0.5) 0%,
    rgba(251, 219, 96, 0) 101.89%
  );

  --mask: linear-gradient(0deg, white 50%, transparent 0%);
  mask: var(--mask);
  -webkit-mask: var(--mask);

  rotate: calc(1.825deg * var(--pos-x));
}

.chart img {
  position: absolute;
  top: 0;
  left: -1%;
}

 *
 */
export function SunChart() {
  return (
    <section className="sun-time">
      <h2 className="title">
        <img
          src="./assets/sun-time.svg"
          alt="icone de um sol com um relógio dentro"
        />
        Horário do sol
      </h2>
      <div className="sun-chart-wrapper">
        <div className="sun-chart">
          <div className="chart">
            <img
              src={sunchart}
              alt="imagem de um gráfico semi circulo com traços"
            />
          </div>
          <time className="now">17:48</time>
        </div>
      </div>
      <div className="time">
        <time className="sunrise">06:00</time>
        <time className="sunset">18:52</time>
      </div>
    </section>
  );
}
