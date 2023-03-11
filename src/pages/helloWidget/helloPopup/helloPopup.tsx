import { useState } from "react";
import Select from "react-select";
import IconClose from "../media/modalClose.svg";
import styles from "./helloPopup.module.scss";
import LogoEMarkable from "../media/eMarkableColor.svg";

export const HelloPopup = ({
  helloCart,
  setActiveCountryIndex,
  showHello,
  setShowHello,
  countries,
}: any) => {
  const [countryValue, setCountryValue] = useState("");

  const handleCountrySelect = (e: any) => {
    setActiveCountryIndex(e.id);
    setCountryValue(e.value);
  };

  if (!showHello) return null;
  return (
    <div className={styles.hello}>
      <div className={styles.header}>
        <div className={styles.container}>
          <span>Turkey to {helloCart.country}</span>
          <img
            className={styles.closeIcon}
            onClick={() => setShowHello(!showHello)}
            src={IconClose}
            alt="close icon"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.countries}>
          <img
            className={styles.countryIcon}
            src={helloCart.flag}
            alt="country icon"
          />
          <Select
            onChange={handleCountrySelect}
            // value={countryValue}
            className={styles.select}
            options={countries}
          />
        </div>
        <div className={styles.text}>
          {!helloCart.currentlyShip ? (
            <div>We do not currently ship to this country.</div>
          ) : (
            <>
              <div className={styles.caption}>Welcome</div>
              <p>
                Come here for information throughout the shopping experience to
                learn more about what to expect when bringing goods into{" "}
                {helloCart.country}.
              </p>
              <div className={styles.subCaption}>Duties and Taxes</div>
              {helloCart.isHasUniqueDutiesText ? (
                <p> {helloCart.uniqueDutiesText} </p>
              ) : (
                <>
                  {helloCart.isHasMinimumOrderText && (
                    <p className={styles.minimumOrderText}>
                      {helloCart.minimumOrderText}{" "}
                    </p>
                  )}
                  <p>
                    In {helloCart.country} you can spend up to{" "}
                    {helloCart.freeDutyPrice} and not incur any duty on your
                    order. {helloCart.vat} is {helloCart.vatRatio} % and due on
                    any order above {helloCart.dutyPrice}.
                  </p>
                </>
              )}
              <p className={styles.lastText}>
                As you add items to your cart, you can return here to get more
                detailed calculations on possible duty and VAT.
              </p>
            </>
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Powered by </span>
        <img
          className={styles.logoEmarkable}
          src={LogoEMarkable}
          alt="e markable logo"
        />
      </div>
    </div>
  );
};
