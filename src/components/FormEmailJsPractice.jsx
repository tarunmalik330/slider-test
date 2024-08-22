import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Lable } from "./common/LableInput";

const FormEmailJsPractice = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_lastName: "",
    user_number: "",
    user_password: "",
    user_confirmPassword: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.user_name.trim()) {
      errors.user_name = "Name is required";
    }

    if (!formValues.user_lastName.trim()) {
      errors.user_lastName = "Last Name is required";
    }

    if (!formValues.user_number.trim()) {
      errors.user_number = "Number is required";
    } else if (!/^\d{10}$/.test(formValues.user_number)) {
      errors.user_number = "Number must be 10 digits";
    }

    if (!formValues.user_password) {
      errors.user_password = "Password is required";
    } else if (formValues.user_password.length < 6) {
      errors.user_password = "Password must be at least 6 characters long";
    }

    if (!formValues.user_confirmPassword) {
      errors.user_confirmPassword = "Confirm Password is required";
    } else if (formValues.user_password !== formValues.user_confirmPassword) {
      errors.user_confirmPassword = "Passwords do not match";
    }

    if (!formValues.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!emailRegex.test(formValues.user_email)) {
      errors.user_email = "Email is not valid";
    }

    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm("service_nlvjld9", "template_l7jjvqj", form.current, {
          publicKey: "qxtBsAqACVCOH2sxs",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            e.target.reset();
            setFormValues({
              user_name: "",
              user_lastName: "",
              user_number: "",
              user_password: "",
              user_confirmPassword: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="py-14 bg-gray-200">
      <div className="container xl:max-w-[1164px] mx-auto px-4">
        <h1 className="text-black xl:text-6xl sm:text-4xl text-2xl font-bold text-center mb-8">
          Form
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="pt-12 flex flex-col gap-6"
          action=""
        >
          <div className="flex flex-col gap-3">
            <Lable htmlFor="name" lableName="Name" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_name"
              type="text"
              value={formValues.user_name}
              onChange={handleChange}
            />
            {formErrors.user_name && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="lastName" lableName="Last Name" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_lastName"
              value={formValues.user_lastName}
              onChange={handleChange}
              type="text"
            />
            {formErrors.user_lastName && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_lastName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="number" lableName="Number" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_number"
              type="number"
              value={formValues.user_number}
              onChange={handleChange}
              maxLength="10"
            />
            {formErrors.user_number && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_number}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="password" lableName="Password" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_password"
              type="password"
              value={formValues.user_password}
              onChange={handleChange}
            />
            {formErrors.user_password && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_password}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="confirmPassword" lableName="Confirm Password" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_confirmPassword"
              type="password"
              value={formValues.user_confirmPassword}
              onChange={handleChange}
            />
            {formErrors.user_confirmPassword && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_confirmPassword}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="email" lableName="Email" />
            <input
              className="border-[2px] border-solid border-gray-500 outline-none text-gray-500 text-2xl font-medium w-full rounded-[8px] p-[10px]"
              name="user_email"
              type="email"
              value={formValues.user_email}
              onChange={handleChange}
            />
            {formErrors.user_email && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.user_email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Lable htmlFor="message" lableName="Message" />
            <textarea
              className="text-2xl font-medium bg-orange-100 border-[2px] border-solid border-gray-500 outline-none text-gray-500 w-full rounded-[8px] p-[10px]"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <p className="text-red-500 font-medium text-sm">
                {formErrors.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            value="Submit"
            className="border border-solid mx-auto max-w-[150px] text-white text-[25px] font-bold bg-lime-950 border-lime-950 cursor-pointer py-[12px] px-[40px] rounded-[12px] mt-7 resize-none"
          />
        </form>
      </div>
    </div>
  );
};

export default FormEmailJsPractice;
