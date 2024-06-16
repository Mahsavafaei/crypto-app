import { useState } from "react";
import convertData from "../../helpers/convertData";
import styles from "./Chart.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  // console.log(chart);
  const [type, setType] = useState("prices");
  // console.log(convertData(chart, type));

  const typeHandler =(event)=>{
  const type = event.target.tagName
  if(type === "BUTTON"){
    const newType = event.target.innerText.toLowerCase().replace(" " , "_")
   setType(newType)
  }
  }
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null} >Prices</button>
          <button className={type === "market_caps" ?  styles.selected : null} >Market Caps</button>
          <button className={type === "total_volumes" ?  styles.selected : null}>Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey={type} hide />
        <Legend />
        <CartesianGrid stroke="#404042" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
