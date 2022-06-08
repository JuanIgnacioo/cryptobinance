import React, { useEffect, useState } from "react";
import Chart from "kaktana-react-lightweight-charts";

export const ChartCrypto = ({ data }) => {
  const [options] = useState({
    alignLabels: true,
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: false,
    },
  });

  const [dataset, setDataset] = useState([]);

  useEffect(()=>{
    setDataset(...dataset, data)
  },[data, dataset])

  return (
    <Chart options={options} candlestickSeries={dataset} autoWidth height={200} />
  );
};

export default ChartCrypto;
