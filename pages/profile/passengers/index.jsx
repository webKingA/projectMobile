import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { ModalAddNewTraveller } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import { HiUserPlus } from "react-icons/hi2";

// import Icons End

// import Components Start

import AddNewTraveller from "../../../components/modal/AddNewTraveller/AddNewTraveller";

// import Components End

import Button from "@mui/material/Button";

const Index = () => {
  const [showModalAddNewTraveller, setShowModalAddNewTraveller] =
    useRecoilState(ModalAddNewTraveller);

  return (
    <div className={style.passengers}>
      <div>
        <span>
          <Link href="/profile">
            <BsArrowRight />
          </Link>
          لیست مسافران
        </span>
        <span>
          <Button
            variant="text"
            style={{
              display: "flex",
              gap: "6px",
              fontFamily: "v",
              fontSize: "12px",
            }}
            onClick={() => {
              setShowModalAddNewTraveller(true);
            }}
            startIcon={<HiUserPlus />}
          >
            افزودن مسافر جدید
          </Button>
        </span>
      </div>
      <div>
        <img src="/images/no-passengers-944b0186.svg" alt="" />
        <p>لیست مسافران شما خالی است</p>
        <small>
          برای دسترسی راحت تر به اطلاعات مسافران خود در هنگام خرید ، مسافران خود
          را اضافه کنید
        </small>
        <Button
          style={{ fontFamily: "v", fontSize: "12px" }}
          variant="text"
          startIcon={<HiUserPlus />}
          onClick={() => {
            setShowModalAddNewTraveller(true);
          }}
        >
          افزودن مسافر
        </Button>
      </div>
      {showModalAddNewTraveller && <AddNewTraveller />}
    </div>
  );
};

export default Index;
