import React from "react";
import style from "./Parttwo.module.css";
import Link from "next/link";

// import Icons Start

import { HiUsers } from "react-icons/hi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoExitOutline } from "react-icons/io5";

// import Icons End

export default function Parttwo() {
  return (
    <div className={style.parttwo}>
      <div>
        <span>
          <HiUsers />
          <Link href="profile/passengers">لیست مسافران</Link>
        </span>
      </div>
      <div>
        <span>
          <TfiHeadphoneAlt />
          <Link href="profile/ticketing">درخواست پشتیبانی</Link>
        </span>
      </div>
      <div>
      <span>
          <IoExitOutline />
          <Link href="/">خروج از حساب کاربری</Link>
        </span>
      </div>
    </div>
  );
}
