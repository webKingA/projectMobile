import React from "react";
import style from "./index.module.css";
import Link from "next/link";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

// import Icons End

import Button from "@mui/material/Button";

export default function index() {
  return (
    <div className={style.ticketing}>
      <div>
        <span>
          <Link href="/profile">
            <BsArrowRight />
          </Link>
          درخواست پشتیبانی
        </span>
      </div>
      <div>
        <img src="/images/no-ticket.26b1db6.png" alt="" />
        <p>هنوز درخواست پشتیبانی آنلاین توسط شما ثبت نشده است.</p>
        <small>اگر سوال یا مشکلی دارید میتوانید با ایجاد درخواست پشتیبانی در سریعترین زمان ممکن آن را پیگیری کنید.</small>
        <Button
          variant="contained"
          startIcon={<AiOutlinePlus />}
          style={{
            padding: " 10px",
            fontFamily: " v",
            fontSize: "12px",
            marginBottom : "2rem",
            display : "flex",
            gap : "10px"
          }}
        >
          ایجاد تیکت جدید
        </Button>
      </div>
    </div>
  );
}
