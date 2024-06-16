import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";

import { getCionList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
    try {
      const res = await fetch(getCionList(page, currency));
      const json = await res.json();
      setCoin(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    };
    fetchData();
  }, [page, currency]);


  return (
    <div>
      <Search
        currency={currency}
        setCurrency={setCurrency}
  
      />
      <TableCoin
        coin={coin}
        isLoading={isLoading}
        currency={currency}
        setCurrency={setCurrency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart}  />}
    </div>
  );
}

export default HomePage;
