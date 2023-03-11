import { useEffect, useState } from "react";
import { HelloPopup } from "../helloPopup/helloPopup";
import data from "../db/hello.json";
import styles from "./hello.module.scss";

export const Hello = () => {
  const countries = [
    {
      id: 0,
      value: "Turkey",
      label: "Turkey",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197518.png",
    },
    {
      id: 1,
      value: "United Kingdom",
      label: "United Kingdom",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
    },
    {
      id: 2,
      value: "Canada",
      label: "Canada",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
    },
    {
      id: 3,
      value: "France",
      label: "France",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197560.png",
    },
    {
      id: 4,
      value: "Ireland",
      label: "Ireland",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197567.png",
    },
    {
      id: 5,
      value: "Germany",
      label: "Germany",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
    },
    {
      id: 6,
      value: "Portugal",
      label: "Portugal",
      flag: "https://cdn-icons-png.flaticon.com/512/3909/3909361.png",
    },
    {
      id: 7,
      value: "Singapore",
      label: "Singapore",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197496.png",
    },
    {
      id: 8,
      value: "United States",
      label: "United States",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
    },
    {
      id: 9,
      value: "Uganda",
      label: "Uganda",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197628.png",
    },
  ];

  const updatedCountries = countries.map((item: any) => {
    item.label = (
      <div className={styles.selectLabel}>
        <span>{item.label}</span>
        <img className={styles.selectCountryIcon} src={item.flag} alt="flag" />
      </div>
    );
    return item;
  });

  const [helloCart, setHelloCart] = useState(data.hello[0]);
  const [activeCountryIndex, setActiveCountryIndex] = useState(-1);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    data.hello.map((item: any) => {
      if (activeCountryIndex === item.id) {
        setHelloCart(item);
      }
    });
  }, [activeCountryIndex]);

  return (
    <div className={styles.test}>
      <img
        className={styles.helloIcon}
        onClick={() => setShowHello(!showHello)}
        src={helloCart.flag}
        alt="country flag"
      />
      <HelloPopup
        countries={updatedCountries}
        helloCart={helloCart}
        setActiveCountryIndex={setActiveCountryIndex}
        showHello={showHello}
        setShowHello={setShowHello}
      />
    </div>
  );
};
