import React , {useState} from "react";
import style from "./BankAccountInformation.module.css";
import { useRecoilState } from "recoil";
import { ModalBankAccountInformation } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";

// import Icons End

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BankAccountInformation = () => {
  const [showModalBankAccountInformation, setShowModalBankAccountInformation] =
    useRecoilState(ModalBankAccountInformation);
    const [shabaNumber , setShabaNumber] = useState('');
    const [accountNumber , setAccountNumber] = useState('');
    const [cardNumber , setCardNumber] = useState('');

  return (
    <div className={style.bankaccountinformation}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalBankAccountInformation(false);
            }}
          />
          اطلاعات حساب بانکی
        </span>
      </div>
      <div>
        <span>اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می شود</span>
        <span>
          <TextField
            id="outlined-password-input"
            label="شماره شبا"
            autoComplete="current-password"
            style={{ width: "100%" }}
            value={shabaNumber}
            onChange={e => setShabaNumber(e.target.value)}
          />
        </span>
        <span>
          <TextField
            id="demo-helper-text-misaligned"
            label="شماره حساب"
            style={{ width: "100%" }}
            value={accountNumber}
            onChange={e => setAccountNumber(e.target.value)}
          />
        </span>
        <span>
          <TextField
            id="outlined-password-input"
            label="شماره کارت"
            autoComplete="current-password"
            style={{ width: "100%" }}
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
          />
        </span>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            width: "100%",
            fontFamily: "v",
            fontSize: "14px",
            padding: "10px",
          }}
        >
          تغییر رمز عبور
        </Button>
      </div>
    </div>
  );
};

export default BankAccountInformation;
