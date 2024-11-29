import React, { useState, useEffect } from "react";

let CurrencyContries = () => {
  const url = "https://openexchangerates.org/api/currencies.json";
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);

  let CurrencyContries = [];

  if (!loading) {
    for (let key in Object.keys(data)) {
      let obj = {};
      obj["label"] = Object.keys(data)[key];
      obj["value"] = data[Object.keys(data)[key]];

      CurrencyContries.push(obj);
    }
  }
  return CurrencyContries;
};

export default CurrencyContries;
