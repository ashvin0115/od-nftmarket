import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomDropdown from "../../../components/ui/customDropdown";
import styles from "./NftHeader.module.scss";

const priceType = [
  'USD',
  'BNB'
];

function NftHeader() {
  const [isHamburger, setIsHamburger] = useState<boolean>(false);
  const [price, setPrice] = useState<string>(priceType[0]);
  return (
    <>
      <div className={styles.navbar}>
        <div className="flex items center">
          <div className="flex items-center z-10 mr-8">
            <Link to="/">
              <img src="img/logo.png" alt="logo" className={styles.logo} />
            </Link>
            <h1 className="ml-4"><span>NFT</span> MARKETPLACE</h1>
          </div>
          <CustomDropdown selected={price} lists={priceType} handleSelect={(item) => setPrice(item)} />
        </div>
        <div className="flex items-center">
          <button type="button" className={styles.walletBtn}>CONNECT WALLET</button>
          <button type="button" onClick={() => setIsHamburger(!isHamburger)} className={`${styles.hamburger} ${isHamburger ? styles.active : ''}`}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </>
  );
};

export default NftHeader;