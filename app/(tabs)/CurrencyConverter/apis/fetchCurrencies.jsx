import React, { useState, useEffect } from "react";
import CurrencyContries from "./CCtoC.jsx";

let fetchCurrencies = () => {
  const url =
    "https://v6.exchangerate-api.com/v6/0da6491715ed309d890012b6/latest/USD";
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);

  let Currencies = [];

  let CC = CurrencyContries();

  if (!loading) {
    for (let key in data["conversion_rates"]) {
      let obj = {};
      if (data["conversion_rates"].hasOwnProperty(key)) {
        val = data.conversion_rates[key];
        obj["label"] = key;
        obj["value"] = val;

        obj["icon"] = `https://flagsapi.com/${obj["label"].slice(
          0,
          2
        )}/flat/64.png`;

        obj["country"] = CC.find((item) => key == item["label"])?.value;
        Currencies.push(obj);
      }
    }
  }
  return Currencies;
};

export default fetchCurrencies;
