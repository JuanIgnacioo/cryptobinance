import React, { useState, useCallback } from "react";
import useWebSocket from "react-use-websocket";
import { ReactComponent as Bitcoin } from "../assets/bitcoin.svg";
import { ReactComponent as Avax } from "../assets/avax.svg";
import { ReactComponent as Binance } from "../assets/binance.svg";
import { ReactComponent as BinanceUsdt } from "../assets/binanceusdt.svg";
import { ReactComponent as Ethereum } from "../assets/ethereum.svg";
import { ReactComponent as Litecoin } from "../assets/litecoin.svg";
import { ReactComponent as Matic } from "../assets/matic.svg";
import { ReactComponent as Solana } from "../assets/solana.svg";
import { ReactComponent as Terra } from "../assets/terra.svg";
import { ReactComponent as Xrp } from "../assets/xrp.svg";
import Cryptos from "../Components/CryptoData/Cryptos";
import "./Home.css";

export const App = () => {
  // const socketUrl = "wss://stream.binance.com:9443/stream?streams==btcbusd@ticker/ethbusd@ticker/bnbbusd@ticker/";
  const socketUrl =
    "wss://stream.binance.com/stream?streams=ethbusd@ticker/btcbusd@ticker/bnbbusd@ticker/lunabusd@ticker/solbusd@ticker/ltcbusd@ticker/maticbusd@ticker/avaxbusd@ticker/xrpbusd@ticker/busdusdt@ticker";
  const { lastJsonMessage, readyState, sendJsonMessage } = useWebSocket(
    socketUrl,
    {
      onOpen: () => console.log(readyState),
      onMessage: () => {
        if (lastJsonMessage !== null) settingData(lastJsonMessage);
      },
    }
  );

  const [dataBtc, setDataBtc] = useState([]);
  const [dataEth, setDataEth] = useState([]);
  const [dataBnb, setDataBnb] = useState([]);
  const [dataLuna, setDataLuna] = useState([]);
  const [dataSol, setDataSol] = useState([]);
  const [dataLtc, setDataLtc] = useState([]);
  const [dataMatic, setDataMatic] = useState([]);
  const [dataAvax, setDataAvax] = useState([]);
  const [dataXrp, setDataXrp] = useState([]);
  const [dataBusd, setDataBusd] = useState([]);

  const settingData = (dataApi) => {
    switch (dataApi.stream) {
      case "ethbusd@ticker":
        setDataEth(dataApi.data);
        break;
      case "btcbusd@ticker":
        setDataBtc(dataApi.data);
        break;
      case "bnbbusd@ticker":
        setDataBnb(dataApi.data);
        break;
      case "lunabusd@ticker":
        setDataLuna(dataApi.data);
        break;
      case "solbusd@ticker":
        setDataSol(dataApi.data);
        break;
      case "ltcbusd@ticker":
        setDataLtc(dataApi.data);
        break;
      case "maticbusd@ticker":
        setDataMatic(dataApi.data);
        break;
      case "avaxbusd@ticker":
        setDataAvax(dataApi.data);
        break;
      case "xrpbusd@ticker":
        setDataXrp(dataApi.data);
        break;
      case "busdusdt@ticker":
        setDataBusd(dataApi.data);
        break;
      default:
        break;
    }
  };

  const arrayCoins = [
    {
      name: "btcbusd",
      icon: <Bitcoin width={40} height={40} />,
      subName: "BITCOIN",
      lastPrice: dataBtc.c,
      highPrice: dataBtc.h,
      priceChangePercent: dataBtc.P,
      id: 1,
    },
    {
      name: "ethbusd",
      icon: <Ethereum width={40} height={40} />,
      subName: "Ethereum",
      lastPrice: dataEth.c,
      highPrice: dataEth.h,
      priceChangePercent: dataEth.P,
      id: 2,
    },
    {
      name: "bnbbusd",
      icon: <Binance width={40} height={40} />,
      subName: "Binance Bitcoin",
      lastPrice: dataBnb.c,
      highPrice: dataBnb.h,
      priceChangePercent: dataBnb.P,
      id: 3,
    },
    {
      name: "lunabusd",
      icon: <Terra width={40} height={40} />,
      subName: "bnb",
      lastPrice: dataLuna.c,
      highPrice: dataLuna.h,
      priceChangePercent: dataLuna.P,
      id: 4,
    },
    {
      name: "solbusd",
      icon: <Solana width={40} height={40} />,
      subName: "Solana",
      lastPrice: dataSol.c,
      highPrice: dataSol.h,
      priceChangePercent: dataSol.P,
      id: 5,
    },
    {
      name: "ltcbusd",
      icon: <Litecoin width={40} height={40} />,
      subName: "Terra",
      lastPrice: dataLtc.c,
      highPrice: dataLtc.h,
      priceChangePercent: dataLtc.P,
      id: 6,
    },
    {
      name: "maticbusd",
      icon: <Matic width={40} height={40} />,
      subName: "matic",
      lastPrice: dataMatic.c,
      highPrice: dataMatic.h,
      priceChangePercent: dataMatic.P,
      id: 7,
    },
    {
      name: "avaxbusd",
      icon: <Avax width={40} height={40} />,
      subName: "AVAX",
      lastPrice: dataAvax.c,
      highPrice: dataAvax.h,
      priceChangePercent: dataAvax.P,
      id: 8,
    },
    {
      name: "xrpbusd",
      icon: <Xrp width={40} height={40} />,
      subName: "XRP",
      lastPrice: dataXrp.c,
      highPrice: dataXrp.h,
      priceChangePercent: dataXrp.P,
      id: 9,
    },
    {
      name: "busdusdt",
      icon: <BinanceUsdt width={40} height={40} />,
      subName: "Binance USDT",
      lastPrice: dataBusd.c,
      highPrice: dataBusd.h,
      priceChangePercent: dataBusd.P,
      id: 10,
    },
  ];

  const handleClickSendMessage = useCallback(
    () =>
      sendJsonMessage({
        method: "SUBSCRIBE",
        params: [
          "ethbusd@ticker",
          "btcbusd@ticker",
          "bnbbusd@ticker",
          "lunabusd@ticker",
          "solbusd@ticker",
          "ltcbusd@ticker",
          "maticbusd@ticker",
          "avaxbusd@ticker",
          "xrpbusd@ticker",
          "busdusdt@ticker",
        ],
        id: 1,
      }),
    [sendJsonMessage]
  );

  const handleClickUnSendMessage = useCallback(
    () =>
      sendJsonMessage({
        method: "UNSUBSCRIBE",
        params: [
          "ethbusd@ticker",
          "btcbusd@ticker",
          "bnbbusd@ticker",
          "lunabusd@ticker",
          "solbusd@ticker",
          "ltcbusd@ticker",
          "maticbusd@ticker",
          "avaxbusd@ticker",
          "xrpbusd@ticker",
          "busdusdt@ticker",
        ],
        id: 1,
      }),
    [sendJsonMessage]
  );

  return (
    <div className="App">
      <div className="container">
        <h1>Reactjs Challenge</h1>
        <Cryptos
          arrayCoins={arrayCoins}
          subscribe={() => handleClickSendMessage()}
          unsubscribe={() => handleClickUnSendMessage()}
        />
      </div>
    </div>
  );
};

export default App;
