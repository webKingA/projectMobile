import React from "react";
import style from "./index.module.css";
import { useRecoilState } from "recoil";
import { Transection } from "./../../../state/atoms";
import Link from "next/link";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";

// import Icons End

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Index = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const [transection, setTransection] = useRecoilState(Transection);

  return (
    <div className={style.transaction}>
      <div>
        <div>
          <span>
            <Link href="/profile">
              <BsArrowRight />
            </Link>
            تراکنش ها و درخواست ها
          </span>
          {transection == false && (
            <span>
              <Button
                variant="text"
                style={{
                  padding: "10px",
                  display: "flex",
                  gap: "6px",
                  fontFamily: "v",
                  fontSize: "12px",
                  color: "rgba(52, 152, 219,1.0)",
                }}
                startIcon={<RiDownloadLine />}
              >
                خروجی اکسل
              </Button>
            </span>
          )}
        </div>
        <div>
          <ButtonGroup
            style={{
              wdith: "100%",
              display: "flex",
              gap: "2rem",
              marginTop: "1rem",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,.1)",
              padding: "10px 0",
            }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              style={
                transection == false
                  ? {
                      width: "100%",
                      marginRight: "10px",
                      fontFamily: "v",
                      fontSize: "11px",
                      padding: "7px",
                      border: "1px solid rgba(52, 152, 219,1.0)",
                      borderRadius: "10px",
                      backgroundColor: "rgba(41, 128, 185,1.0)",
                      color: "#fff",
                    }
                  : {
                      width: "100%",
                      marginRight: "10px",
                      fontFamily: "v",
                      fontSize: "11px",
                      padding: "7px",
                      border: "1px solid rgba(52, 152, 219,1.0)",
                      borderRadius: "10px",
                    }
              }
              variant="text"
              onClick={() => {
                setTransection(false);
              }}
            >
              تراکنش ها
            </Button>
            <Button
              style={
                transection == true
                  ? {
                      width: "100%",
                      marginLeft: "10px",
                      fontFamily: "v",
                      fontSize: "11px",
                      padding: "7px",
                      border: "1px solid rgba(52, 152, 219,1.0)",
                      borderRadius: "10px",
                      backgroundColor: "rgba(41, 128, 185,1.0)",
                      color: "#fff",
                    }
                  : {
                      width: "100%",
                      marginLeft: "10px",
                      fontFamily: "v",
                      fontSize: "11px",
                      padding: "7px",
                      border: "1px solid rgba(52, 152, 219,1.0)",
                      borderRadius: "10px",
                    }
              }
              variant="text"
              onClick={() => {
                setTransection(true);
              }}
            >
              درخواست انتقال موجودی
            </Button>
          </ButtonGroup>
        </div>
        <div>
          {transection == false && (
            <span>
              <Button
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  display: "flex",
                  gap: "10px",
                  fontFamily: "v",
                }}
                variant="text"
                startIcon={<BiFilter />}
              >
                فیلترها
              </Button>
            </span>
          )}
          <span>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                مرتب سازی
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sort}
                label="sort"
                onChange={handleChange}
              >
                <MenuItem value={1}>براساس زمان</MenuItem>
                <MenuItem value={2}>کمترین تراکنش</MenuItem>
                <MenuItem value={3}>بیشترین تراکنش</MenuItem>
              </Select>
            </FormControl>
          </span>
        </div>
      </div>
      <div>
        <img src="/images/payment-error-1170e149.svg" alt="" />
        <p>هیچ تراکنشی یافت نشد</p>
      </div>
    </div>
  );
};

export default Index;
