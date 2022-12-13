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
import { useFormik } from "formik";
import {createCustomer} from "../../../utils/createCustomer"
import {
  days,
  monthEn,
  monthPersianData,
  yearPersianData,
  yearsEn,
} from "../../../utils/data";
// import mui End
// initialValues
const initialValues = {
  reserverMobile: "",
  name: "",
  lastName: "",
  latinFirstName: "",
  latinLastName: "",
  nationalNumber: "",
  persianDateOfBirth: "",
  passportNumber: "",
  gender: 0,
  identificationType: 0,
  age: 0,
  ageType: "",
  mobileNumber: "",
  telNumber: "",
  passportStartDate: "",
  passportExpireDate: "",
  birthDayCountryId: 0,
  passportCountryId: 0,
  miladiDatoOfBirth: "",
};
const AddNewTraveller = () => {
  const [
    showModalAddNewTraveller,
    setShowModalAddNewTraveller,
  ] = useRecoilState(ModalAddNewTraveller);

  const [yearPersian, setyearPersian] = useState("");
  const [monthPersian, setMonthPersian] = useState("");
  const [dayPersian, setDayPersian] = useState("");
  const [yearMiladi, setYearMiladi] = useState("");
  const [monthMiladi, setMonthMiladi] = useState("");
  const [dayMiladi, setDayMiladi] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit: async (values,actions) => {
      const data = {
        ...values,
        persianDateOfBirth: `${yearPersian}-${monthPersian}-${dayPersian}`,
        passportExpireDate: `${yearMiladi}-${monthMiladi}-${dayMiladi}`,
      };
      await createCustomer(data);
      actions.resetForm({
        values:initialValues
      })
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={style.addnewtraveller}
    >
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
            اطلاعات مسافران باید کاملا منطبق با مدارک
            شناسایی باشد.
          </span>
          <span>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="نام فارسی (الزامی)"
              variant="outlined"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </span>
        </div>
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="نام خانوادگی فارسی (الزامی)"
            variant="outlined"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
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
              <InputLabel id="demo-simple-select-label">
                روز
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="روز"
                value={dayPersian}
                onChange={(e) =>
                  setDayPersian(e.target.value)
                }
              >
                {days.map((day) => (
                  <MenuItem key={day.id} value={day.id}>
                    {day.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                ماه
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="ماه"
                value={monthPersian}
                onChange={(e) =>
                  setMonthPersian(e.target.value)
                }
              >
                {monthPersianData.map((month) => (
                  <MenuItem key={month.id} value={month.id}>
                    {month.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                سال
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="سال"
                value={yearPersian}
                onChange={(e) =>
                  setyearPersian(e.target.value)
                }
              >
                {yearPersianData.map((year) => (
                  <MenuItem  key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </ButtonGroup>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="نام لاتین (الزامی)"
            variant="outlined"
            name="latinFirstName"
            onChange={formik.handleChange}
            value={formik.values.latinFirstName}
          />
          <TextField
            id="outlined-basic"
            label="نام خانوادگی لاتین (الزامی)"
            variant="outlined"
            name="latinLastName"
            onChange={formik.handleChange}
            value={formik.values.latinLastName}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              جنسیت (الزامی)
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="gender"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <MenuItem value={1}>مرد</MenuItem>
              <MenuItem value={2}>زن</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <p>کد ملی</p>
          <small>
            کد ملی برای مسافرین ایرانی که قصد سفرهای داخل
            ایران را دارند مورد نیاز است.
          </small>
          <TextField
            id="outlined-basic"
            label="کد ملی"
            variant="outlined"
            name="nationalNumber"
            onChange={formik.handleChange}
            value={formik.values.nationalNumber}
          />
        </div>
        <div>
          <p>اطلاعات پاسپورت</p>
          <small>
            اطلاعات پاسپورت برای مسافرین ایرانی که قصد سفر
            های خارجی را دارند و همچنین مسافرین غیر ایرانی
            که قصد استفاده از هر نوع خدماتی را داشته باشند
            مورد نیاز است
          </small>
          <TextField
            id="outlined-basic"
            label="شماره پاسپورت"
            variant="outlined"
            name="passportNumber"
            onChange={formik.handleChange}
            value={formik.values.passportNumber}
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
                <InputLabel id="demo-simple-select-label">
                  روز
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={dayMiladi}
                  onChange={(e) =>
                    setDayMiladi(e.target.value)
                  }
                >
                  {days.map((day) => (
                    <MenuItem value={day.id}>
                      {day.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  ماه
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={monthMiladi}
                  onChange={(e) =>
                    setMonthMiladi(e.target.value)
                  }
                >
                  {monthEn.map((month) => (
                    <MenuItem key={month.id} value={month.id}>
                      {month.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  سال
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={yearMiladi}
                  onChange={(e) =>
                    setYearMiladi(e.target.value)
                  }
                >
                  {yearsEn.map((year) => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
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
                label="Age"
                name="passportCountryId"
                onChange={formik.handleChange}
                value={formik.values.passportCountryId}
              >
                <MenuItem value={1}>ایران</MenuItem>
                <MenuItem value={2}>ترکیه</MenuItem>
                <MenuItem value={3}>عراق</MenuItem>
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
                label="Age"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              >
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </span>
        </div>
      </div>
      <div>
        <Button
          type="submit"
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
    </form>
  );
};

export default AddNewTraveller;
