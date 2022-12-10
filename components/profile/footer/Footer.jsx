import React from "react";
import style from "./Footer.module.css";
import Link from "next/link";

// import Icon Start

import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { SiYourtraveldottv } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";

// import Icon End

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <span>
          <AiOutlineHome />
          <Link href="/">خانه</Link>
        </span>
      </div>
      <div>
        <span>
          <HiOutlineSquaresPlus />
          <Link href="/plus">پلاس</Link>
        </span>
      </div>
      <div>
        <span>
          <SiYourtraveldottv />
          <Link href="/profile/orders">سفرهای من</Link>
        </span>
      </div>
      <div>
        <span>
          <BiUserCircle />
          <Link href="/profile">حساب کاربری</Link>
        </span>
      </div>
    </div>
  );
}
