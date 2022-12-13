import Swal from "sweetalert2";
import fetchClient from "./fetchClient";

export const createCustomer = async (customer: any) => {
  const data = {
    reserverMobile: "",
    name: customer.name,
    lastName: customer.lastName,
    latinFirstName: customer.latinFirstName,
    latinLastName: customer.latinLastName,
    nationalNumber: customer.nationalNumber,
    persianDateOfBirth: customer.persianDateOfBirth,
    passportNumber: customer.passportNumber,
    gender: customer.gender,
    identificationType: customer.identificationType,
    age: customer.age,
    ageType: "",
    mobileNumber: "",
    telNumber: "",
    passportStartDate: "2022-12-13T04:53:35.169Z",
    passportExpireDate: "2022-12-13T04:53:35.169Z",
    birthDayCountryId: 0,
    passportCountryId: 0,
    miladiDatoOfBirth: "2022-12-13T04:53:35.169Z",
  };
  try {
    const { data: custom } = await fetchClient.post(
      "/CustomerPassengers/createCustomerPassengers",
      data
    );
    return Swal.fire({
      icon: "success",
      text: "مسافر جدید با موفقیت ثبت شد",
    });
  } catch (error) {
    return Swal.fire({
      icon: "error",
      text: "مشکلی در ثبت مسافر جدید پیش امده است",
    });
  }
};
