import React, { useState } from "react";
import style from "./PersonalInformation.module.css";
import { useRecoilState } from "recoil";
import {
  ModalAccountDetails,
  ModalPersonalInformation,
} from "../../../state/atoms";

import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import {
  days,
  monthPersianData,
  yearPersianData,
} from "../../../utils/data";
import fetchClient from "../../../utils/fetchClient";

// import Icons End

export default function PersonalInformation() {
  const [
    showModalPersonalInformation,
    setShowModalPersonalInformation,
  ] = useRecoilState(ModalPersonalInformation);

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [nesMobile, setNesMobile] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const submitFormInformation = async () => {
    const id = localStorage.getItem("user");
    const data = {
      id: Number(id),
      userName: "",
      firstName: name,
      lastName: lastName,
      email: "",
      dateOfBirth: `${year}-${month}-${date}`,
      isAdminEdit: null,
      phoneNumber: "",
    };

    try {
      const { data: updateInformation } =
        await fetchClient.post(
          "/UserProfile/updateuser",
          data
        );

      console.log(updateInformation);
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrr");
    }
  };
  return (
    <div className={style.personalinformation}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalPersonalInformation(false);
            }}
          />
          اطلاعات شخصی
        </span>
      </div>
      <div>
        <span>
          <TextField
            id="outlined-basic"
            label="نام"
            variant="outlined"
            style={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span>
          <TextField
            id="outlined-basic"
            label="نام خانوادگی"
            variant="outlined"
            style={{ width: "100%" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </span>
        <span>
          <small>تاریخ تولد</small>
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
                value={date}
                label="Age"
                onChange={handleChangeDate}
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
                value={month}
                label="Age"
                onChange={handleChangeMonth}
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
                value={year}
                label="Age"
                onChange={handleChangeYear}
              >
                {yearPersianData.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ButtonGroup>
        </span>
        {/* <span>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>مرد</MenuItem>
              <MenuItem value={2}>زن</MenuItem>
            </Select>
          </FormControl>
        </span> */}
        {/* <span>
          <TextField
            id="outlined-basic"
            label="کد ملی"
            variant="outlined"
            style={{ width: "100%" }}
            value={nationalCode}
            onChange={e => setNationalCode(e.target.value)}
          />
        </span> */}
        {/* <span>
          <TextField
            id="outlined-basic"
            label="شماره تماس های ضروری"
            variant="outlined"
            style={{ width: "100%" }}
            value={nesMobile}
            onChange={e => setNesMobile(e.target.value)}
          />
        </span> */}
      </div>
      <div>
        <Button
          onClick={() => submitFormInformation()}
          variant="contained"
          style={{
            width: "100%",
            fontFamily: "v",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          ذخیره
        </Button>
      </div>
    </div>
  );
}
