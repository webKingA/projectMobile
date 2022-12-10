import React from "react";
import style from "./Header.module.css";
import { ModalAccountDetails } from "../../../state/atoms";
import { useRecoilState } from "recoil";

// Import Icons Start

import { AiOutlineLeft } from "react-icons/ai";

// Import Icons End

import Button from "@mui/material/Button";

export default function Header() {

  const [showModalAccountDetails , setShowModalAccountDetails] = useRecoilState(ModalAccountDetails);

  return (
    <div className={style.header}>
      <span>
        <img src="/images/avatar-edd6c4f8.svg" alt="avatar" />
        09035677011
      </span>
      <span>
        <Button variant="text" endIcon={<AiOutlineLeft />} onClick={() => {
          setShowModalAccountDetails(true);
        }}>
          ویرایش اطلاعات
        </Button>
      </span>
    </div>
  );
}
