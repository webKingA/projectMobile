import React , {useState} from "react";
import style from "./EditPassword.module.css";
import { useRecoilState } from "recoil";
import { ModalEditPassword } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";

// import Icons End

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditPassword() {
  const [showModalEditPassword, setShowModalEditPassword] =
    useRecoilState(ModalEditPassword);
    const [oldPassword , setOldPassword ] = useState('');
    const [newPassword , setNewPassword] = useState('');
    const [repeatNewPassword , setRepeatNewPassword] = useState('');

  return (
    <div className={style.editpassword}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalEditPassword(false);
            }}
          />
          جزئیات حساب کاربری
        </span>
      </div>
      <div>
        <span>رمز عبور فعلی و رمز عبور جدید خود را وارد کنید</span>
        <span>
          <TextField
            id="outlined-password-input"
            label="رمز عبور فعلی"
            type="password"
            autoComplete="current-password"
            style={{ width: "100%" }}
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
        </span>
        <span>
          <TextField
            helperText="رمز عبور باید بیشتر از 6 رقم باشد"
            id="demo-helper-text-misaligned"
            type="password"
            label="رمز عبور جدید"
            style={{ width: "100%" }}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </span>
        <span>
          <TextField
            id="outlined-password-input"
            label="تکرار رمز عبور جدید"
            type="password"
            autoComplete="current-password"
            style={{ width: "100%" }}
            value={repeatNewPassword}
            onChange={e => setRepeatNewPassword(e.target.value)}
          />
        </span>
      </div>
      <div>
        <Button variant="contained" style={{width : "100%" , fontFamily : "v" , fontSize : "14px" , padding : "10px"}}>تغییر رمز عبور</Button>
      </div>
    </div>
  );
}
