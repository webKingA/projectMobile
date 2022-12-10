import React from "react";
import style from "./Partone.module.css";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { ModalInventoryincrease } from "./../../../state/atoms";

// import Icons Start

import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

// import Icons End

import Button from "@mui/material/Button";

export default function Partone() {
  const [showModalInventoryIncrease, setShowModalInventoryIncrease] =
    useRecoilState(ModalInventoryincrease);

  return (
    <div className={style.partone}>
      <div>
        <span>
          <AiFillCreditCard />
          موجودی حساب
        </span>
        <span>
          <small>0</small>
          ریال
        </span>
      </div>
      <div>
        <span
          onClick={() => {
            setShowModalInventoryIncrease(!showModalInventoryIncrease);
          }}
        >
          <AiOutlinePlus />
          افزایش موجودی
        </span>
      </div>
      <div>
        <span>
          <AiOutlineMinus />
          درخواست انتقال موجودی به حساب بانکی
        </span>
      </div>
      <div>
        <span>
          <AiFillCreditCard />
          <Link href="/profile/transactions">موجودی و تراکنش ها</Link>
        </span>
      </div>
    </div>
  );
}
