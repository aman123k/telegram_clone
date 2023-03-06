import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
function LoginPage() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const [notification, setNotification] = useState("");
  const navigation = useNavigate();
  const selctFile = () => {
    const file = document.querySelector("#file");
    file.click();
  };
  const onImageChange = (e) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setPicture(e.currentTarget.result);
      };
      reader.readAsDataURL(e.currentTarget.files[0]);
    }
  };
  const user = {
    name: name,
    userName: userName,
    phone: phone,
    password: password,
    picture: picture,
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (picture === null) {
      setNotification("Please select Picture");
      setTimeout(() => {
        setNotification("");
      }, 1000);
      return;
    } else if (name === "") {
      setNotification("name can't be empty");
      setTimeout(() => {
        setNotification("");
      }, 1000);
      return;
    } else if (userName === "") {
      setNotification("userName can't be empty");
      setTimeout(() => {
        setNotification("");
      }, 1000);
      return;
    } else if (
      phone === "" ||
      !(phone.length === 10) ||
      !phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    ) {
      setNotification("Phone No can't be empty, Can't contain letter");
      setTimeout(() => {
        setNotification("");
      }, 1200);
      return;
    } else if (password === "" || !(password.length >= 6)) {
      console.log(password);
      setNotification("password can't be empty, minimum 6 Charecter");
      setTimeout(() => {
        setNotification("");
      }, 1200);
      return;
    } else {
      navigation("/");
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  return (
    <div className=" flex flex-col h-screen justify-center bg-[#EEEEEE] w-full dark:bg-[#121212]">
      <div
        className={`absolute top-0 z-50 left-[50%] translate-x-[-50%] duration-700
        text-center bg-red-500 px-1 py-1.5 rounded-md text-white ease-in-out font-sans
        ${notification ? "translate-y-20 w-[200px]" : "translate-y-[-200%]"} `}
      >
        {notification}
      </div>
      <form
        action=""
        className=" flex flex-col justify-center border-[1.5px] border-[#C5C5C5] dark:border-[#555555]
         p-5 rounded-lg w-[22rem]  ml-[50%] translate-x-[-50%] bg-white gap-3.5 dark:bg-[#212121]"
      >
        <h1 className=" border-b dark:border-[#555555] pb-3 text-[#121212] dark:text-white font-bold font-roboto text-2xl">
          Sing Up
        </h1>
        <div
          id="Uplode"
          className="w-[4.5rem] h-[4.5rem] bg-[#FEF3C7] flex items-center justify-center rounded-full
         ml-[50%] translate-x-[-50%] cursor-pointer "
          onClick={selctFile}
        >
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={(e) => onImageChange(e)}
          />
          <div className="text-sm text-[#94907F] font-bold overflow-hidden">
            {picture ? (
              <img
                className="w-[4.5rem] h-[4.5rem] rounded-full"
                src={picture}
                alt={name}
              />
            ) : (
              <Person3OutlinedIcon />
            )}
          </div>
        </div>
        <div>
          <label className=" flex text-[16px] dark:text-white ">
            Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            value={name}
            className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2 
            rounded-md mt-1 dark:bg-[#333333]"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className=" flex  text-[16px] dark:text-white ">
            User Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            required
            value={userName}
            className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2
            dark:bg-[#333333] rounded-md mt-1"
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className=" flex  text-[16px] dark:text-white ">
            Your Phone
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            required
            value={phone}
            className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2 rounded-md
            dark:bg-[#333333] mt-1 "
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </div>
        <div>
          <label className=" flex  text-[16px] dark:text-white ">
            Password
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="password"
            required
            value={password}
            className=" dark:text-white w-full bg-[#EEEEEE] px-3 py-2
            dark:bg-[#333333] rounded-md mt-1"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <input
          onClick={submitForm}
          type="submit"
          className=" bg-[#3B82F6] text-white py-2 rounded-md cursor-pointer"
          value=" LogIn"
        />
      </form>
    </div>
  );
}

export default LoginPage;
