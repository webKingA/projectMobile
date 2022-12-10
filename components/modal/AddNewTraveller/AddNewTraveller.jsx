import React, { useState } from "react";
import style from "./AddNewTraveller.module.css";
import { useRecoilState } from "recoil";
import { ModalAddNewTraveller } from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

// import Icons End

// import mui Start

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import mui End

const AddNewTraveller = () => {
  const [showModalAddNewTraveller, setShowModalAddNewTraveller] =
    useRecoilState(ModalAddNewTraveller);

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [gender, setGender] = React.useState("");
  const handleChange2 = (event) => {
    setGender(event.target.value);
  };

  const [day, setDay] = React.useState("");
  const handleChange3 = (event) => {
    setDay(event.target.value);
  };

  const [month, setMonth] = React.useState("");
  const handleChange4 = (event) => {
    setMonth(event.target.value);
  };

  const [year, setYear] = React.useState("");
  const handleChange5 = (event) => {
    setYear(event.target.value);
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [latinLastName, setLatinLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  return (
    <div className={style.addnewtraveller}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalAddNewTraveller(false);
            }}
          />
          افزودن مسافر جدید
        </span>
      </div>
      <div>
        <div>
          <span>اطلاعات عمومی</span>
          <span>
            <AiFillInfoCircle />
            اطلاعات مسافران باید کاملا منطبق با مدارک شناسایی باشد.
          </span>
          <span>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="نام فارسی (الزامی)"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
        </div>
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="نام خانوادگی فارسی (الزامی)"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <p>تاریخ تولد (الزامی)</p>
          <ButtonGroup
            style={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ButtonGroup>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="نام لاتین (الزامی)"
            variant="outlined"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="نام خانوادگی لاتین (الزامی)"
            variant="outlined"
            value={latinLastName}
            onChange={(e) => setLatinLastName(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              جنسیت (الزامی)
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Age"
              onChange={handleChange2}
            >
              <MenuItem value={1}>مرد</MenuItem>
              <MenuItem value={2}>زن</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <p>کد ملی</p>
          <small>
            کد ملی برای مسافرین ایرانی که قصد سفرهای داخل ایران را دارند مورد
            نیاز است.
          </small>
          <TextField
            id="outlined-basic"
            label="کد ملی"
            variant="outlined"
            value={nationalCode}
            onChange={(e) => setNationalCode(e.target.value)}
          />
        </div>
        <div>
          <p>اطلاعات پاسپورت</p>
          <small>
            اطلاعات پاسپورت برای مسافرین ایرانی که قصد سفر های خارجی را دارند و
            همچنین مسافرین غیر ایرانی که قصد استفاده از هر نوع خدماتی را داشته
            باشند مورد نیاز است
          </small>
          <TextField
            id="outlined-basic"
            label="شماره پاسپورت"
            variant="outlined"
            value={passportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
          />
        </div>
        <div>
          <span>
            <p>تاریخ انقضای پاسپورت</p>
            <ButtonGroup
              style={{ width: "100%" }}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">روز</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Age"
                  onChange={handleChange3}
                >
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ماه</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="Age"
                  onChange={handleChange4}
                >
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">سال</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Age"
                  onChange={handleChange5}
                >
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ButtonGroup>
          </span>
          <span>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                کشور صادر کننده پاسپورت
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </span>
          <span>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                کشور محل تولد
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </span>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            width: "100%",
            fontFamily: "v",
            fontSize: "12px",
            borderRadius: "6px",
          }}
        >
          ذخیره
        </Button>
      </div>
    </div>
  );
};

export default AddNewTraveller;
