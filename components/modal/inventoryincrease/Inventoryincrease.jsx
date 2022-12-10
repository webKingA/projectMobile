import React , {useState} from "react";
import style from "./Inventoryincrease.module.css";
import { useRecoilState } from "recoil";
import { ModalInventoryincrease } from "../../../state/atoms";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Import Icons Start

import { FaTimes } from "react-icons/fa";

// Import Icons End

export default function Inventoryincrease() {
  const [showModalInventoryIncrease, setShowModalInventoryIncrease] =
    useRecoilState(ModalInventoryincrease);
    const [inventoryincrease , setInventoryIncrease] = useState('');

  return (
    <div className={style.inventoryincrease}>
      <div>
        <div>
          <span>افزایش موجودی</span>
          <FaTimes
            onClick={() => {
              setShowModalInventoryIncrease(false);
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="مبلغ مورد نظر"
            variant="outlined"
            style={{ width: "100%" }}
            value={inventoryincrease}
            onChange={e => setInventoryIncrease(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              width: "100%",
              fontFamily: "v",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            پرداخت
          </Button>
        </div>
      </div>
      <div
        onClick={() => {
          setShowModalInventoryIncrease(false);
        }}
      ></div>
    </div>
  );
}
