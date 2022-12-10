import React from "react";
import style from "./index.module.css";
import { useRecoilState } from "recoil";
import { ModalInventoryincrease , ModalAccountDetails } from "../../state/atoms";

// import Components Start

import Header from "../../components/profile/header/Header";
import Partone from "../../components/profile/partone/Partone";
import Parttwo from "../../components/profile/parttwo/Parttwo";
import Footer from "../../components/profile/footer/Footer";
import Inventoryincrease from "../../components/modal/inventoryincrease/Inventoryincrease";
import AccountDetails from "../../components/modal/AccountDetails/AccountDetails";

// import Components End

export default function Index() {
  const [showModalInventoryIncrease, setShowModalInventoryIncrease] =
    useRecoilState(ModalInventoryincrease);
    const [showModalAccountDetails , setShowModalAccountDetails] = useRecoilState(ModalAccountDetails);

  return (
    <div className={style.profile__container}>
      <Header />
      <Partone />
      <Parttwo />
      <Footer />
      {showModalInventoryIncrease && (
        <Inventoryincrease />
      )}
      {showModalAccountDetails && (
        <AccountDetails />
      )}
    </div>
  );
}
