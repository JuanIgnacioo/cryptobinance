import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

import "./Crypto.css";
import { arsCotization, busdusdtCotization, verifyColorPercent } from "./utils";

export const Cryptos = ({ arrayCoins, subscribe, unsubscribe, search }) => {
  return (
    <div>
      <ListGroup className="my-2">
        {arrayCoins.map((item) => (
          <ListGroupItem key={item.id} className="cryptodata">
            <div style={{ paddingTop: "19px" }}>{item.icon}</div>
            <div className="namesContainer">
              <div>
                <span className="coinName">{item.name.toUpperCase()}</span>
              </div>
              <div>
                <span className="coinSubName">{item.subName}</span>
              </div>
            </div>

            <div>
              {!item.lastPrice ? (
                <ClipLoader size={50} />
              ) : (
                <div className="pricesContainer">
                  <div>
                    <span>ARS</span>
                  </div>
                  <div>
                    <span className="coinName">
                      $
                      {item.name !== "busdusdt"
                        ? arsCotization(item.lastPrice)
                        : busdusdtCotization(item.lastPrice)}
                    </span>
                  </div>
                  <div>
                    <span
                      className={
                        verifyColorPercent(item.priceChangePercent) === "green"
                          ? "colorGreenPercent"
                          : "colorRedPercent"
                      }
                    >
                      {item.priceChangePercent}
                    </span>
                  </div>
                </div>
              )}{" "}
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cryptos;
