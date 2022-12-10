import React , {useState} from "react";
import style from "./AddEmail.module.css";
import { useRecoilState } from "recoil";
import { ModalAddEmail } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";

// import Icons End

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddEmail() {
  const [showModalAddEmail, setShowModalAddEmail] =
    useRecoilState(ModalAddEmail);
    const [userEmail , setUserEmail] = useState('');

  return (
    <div className={style.addemail}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalAddEmail(false);
            }}
          />
          ویرایش آدرس ایمیل
        </span>
      </div>
      <div>
        <span>برای ویرایش ، آدرس ایمیل جدید خود را وارد کنید</span>
        <span>
          <TextField
            id="outlined-basic"
            label="آدرس ایمیل"
            variant="outlined"
            style={{ width: "100%" }}
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </span>
      </div>
      <div>
        <Button variant="contained" style={{width : "100%" , fontFamily : "v" , fontSize : "14px" , padding : "10px"}}>تایید</Button>
      </div>
    </div>
  );
}
