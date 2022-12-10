import React , {useState} from "react";
import style from "./EditPhoneNumber.module.css";
import { useRecoilState } from "recoil";
import { ModalEditPhoneNumber } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";

// import Icons End

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditPhoneNumber() {
  const [showModalEditPhoneNumber, setShowModalEditPhoneNumber] =
    useRecoilState(ModalEditPhoneNumber);

    const [userMobile , setUserMobile] = useState('');

  return (
    <div className={style.editphonenumber}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalEditPhoneNumber(false);
            }}
          />
          ویرایش شماره موبایل
        </span>
      </div>
      <div>
        <span>برای ویرایش شماره موبایل جدید خود را وارد کنید</span>
        <span>
          <TextField
            id="outlined-basic"
            label="شماره موبایل"
            variant="outlined"
            style={{width : "100%"}}
            value={userMobile}
            onChange={e => setUserMobile(e.target.value)}
          />
        </span>
      </div>
      <div>
        <Button variant="contained" style={{width : "100%" , fontFamily : "v" , fontSize : "14px" , padding : "10px"}}>تایید و دریافت کد</Button>
      </div>
    </div>
  );
}
