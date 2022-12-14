import React, { useEffect, useState } from "react";
import style from "./AccountDetails.module.css";
import { useRecoilState } from "recoil";
import {
  ModalAccountDetails,
  ModalPersonalInformation,
  ModalEditPhoneNumber,
  ModalAddEmail,
  ModalEditPassword,
  ModalBankAccountInformation,
} from "../../../state/atoms";

// import Icons Start

import { BsArrowRight } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { AiOutlineLeft } from "react-icons/ai";

// import Icons End

// import Components Start

import PersonalInformation from "../PersonalInformation/PersonalInformation";
import EditPhoneNumber from "../EditPhoneNumber/EditPhoneNumber";
import AddEmail from "../AddEmail/AddEmail";
import EditPassword from "../EditPassword/EditPassword";
import BankAccountInformation from "../BankAccountInformation/BankAccountInformation";
import fetchClient, { BASEURL } from "../../../utils/fetchClient";

// import Components End

export default function AccountDetails() {
  const [user,setUser] = useState()
  const [showModalAccountDetails, setShowModalAccountDetails] =
    useRecoilState(ModalAccountDetails);
  const [showModalPersonalInformation, setShowModalPersonalInformation] =
    useRecoilState(ModalPersonalInformation);
  const [showModalEditPhoneNumber, setShowModalEditPhoneNumber] =
    useRecoilState(ModalEditPhoneNumber);
    const [showModalAddEmail , setShowModalAddEmail] = useRecoilState(ModalAddEmail);
    const [showModalEditPassword , setShowModalEditPassword] = useRecoilState(ModalEditPassword);
    const [showModalBankAccountInformation , setShowModalBankAccountInformation] = useRecoilState(ModalBankAccountInformation);
    useEffect(() => {
      const user = fetchClient
        .get(`${BASEURL}/UserProfile/currentuser`)
        .then((response) => setUser(response.data));
    }, []);
  return (
    <div className={style.accountDetails}>
      <div>
        <span>
          <BsArrowRight
            onClick={() => {
              setShowModalAccountDetails(false);
            }}
          />
          ???????????? ???????? ????????????
        </span>
      </div>
      <div>
        <div>
          <span>
            <p>?????????????? ????????</p>
            <small>??????</small>
          </span>
          <span>
            <GrEdit
              onClick={() => {
                setShowModalPersonalInformation(true);
              }}
            />
          </span>
        </div>
        <div>
          <span>
            <p>?????????? ????????????</p>
            <span>
              <small>{user?.phoneNumber}</small>
              <p>
                <TiTick />
                ?????????? ??????
              </p>
            </span>
          </span>
          <span>
            <GrEdit onClick={() => {
              setShowModalEditPhoneNumber(true)
            }} />
          </span>
        </div>
        <div>
          <span>???????????? ???????? ??????????</span>
          <span>
            <AiOutlineLeft onClick={() => {
              setShowModalAddEmail(true)
            }} />
          </span>
        </div>
        <div>
          <span>???????????? ???????? ????????</span>
          <span>
            <AiOutlineLeft onClick={() => {
              setShowModalEditPassword(true);
            }} />
          </span>
        </div>
        <div>
          <span>
            <p>?????????????? ???????? ??????????</p>
            <small>?????? ?????????? ?????? ??????????????????</small>
          </span>
          <span>
            <GrEdit onClick={() => {
              setShowModalBankAccountInformation(true)
            }} />
          </span>
        </div>
      </div>
      {showModalPersonalInformation && <PersonalInformation />}
      {showModalEditPhoneNumber && <EditPhoneNumber />}
      {showModalAddEmail && <AddEmail />}
      {showModalEditPassword && <EditPassword />}
      {showModalBankAccountInformation && <BankAccountInformation />}
    </div>
  );
}
