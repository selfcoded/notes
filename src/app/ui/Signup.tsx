"use client";
import { Button } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import bcrypt from "bcryptjs-react";
import { useForm, SubmitHandler, Control, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}
type InputError = {
  firstName: { isNotValid: boolean; message: string };
  lastName: { isNotValid: boolean; message: string };
  email: { isNotValid: boolean; message: string };
  password: { isNotValid: boolean; message: string };
  password2: { isNotValid: boolean; message: string };
};

type FormState = {
  formData: Object;
  callback: () => void;
};

export default function Signup() {
  const ref = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const [inputError, setInputError] = useState<InputError>({
    firstName: { isNotValid: true, message: "" },
    lastName: { isNotValid: true, message: "" },
    email: { isNotValid: true, message: "" },
    password: { isNotValid: true, message: "" },
    password2: { isNotValid: true, message: "" },
  });
  const inputRegex = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      if (!inputRegex.email.test(e.target.value)) {
        setInputError({
          ...inputError,
          email: { isNotValid: true, message: "email is not valid format" },
        });
      } else {
        setInputError({
          ...inputError,
          email: { isNotValid: false, message: "" },
        });
      }
      return;
    }
    if (e.target.name === "password") {
      if (!inputRegex.password.test(e.target.value)) {
        setInputError({
          ...inputError,
          password: {
            isNotValid: true,
            message:
              "Passwords should contain three of the four character types:\nUppercase letters: \nLowercase letters: \nNumbers: 0-9 \nSymbols: ~!@#$%^&*()_-+={[}]|:;",
          },
        });
      } else {
        setInputError({
          ...inputError,
          password: { isNotValid: false, message: "" },
        });
      }
      return;
    }
    if (e.target.name === "password2") {
      if (e.target.value !== ref.current[3]?.value) {
        setInputError({
          ...inputError,
          password2: { isNotValid: true, message: "passwords do NOT match" },
        });
      } else {
        setInputError({
          ...inputError,
          password2: { isNotValid: false, message: "" },
        });
      }
      return;
    }
    setInputError({
      ...inputError,
      [e.target.id]: { isNotValid: false, message: "" },
    });
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      firstName: ref.current[0]?.value,
      lastName: ref.current[1]?.value,
      email: ref.current[2]?.value,
      password: bcrypt.hashSync(ref.current[3]?.value!, 10),
    };
    let isFalsy = true;
    Object.values(inputError).forEach((element) => {
      isFalsy = element.isNotValid === false ? false : true;
    });

    if (
      Object.values(formData).indexOf("") !== -1 ||
      ref.current[4]?.value === "" ||
      isFalsy
    ) {
      setInputError({
        firstName: {
          isNotValid: formData.firstName === "" ? true : false,
          message:
            formData.firstName === ""
              ? "please fill out the form"
              : inputError.firstName.message,
        },
        lastName: {
          isNotValid: formData.lastName === "" ? true : false,
          message:
            formData.lastName === ""
              ? "please fill out the form"
              : inputError.lastName.message,
        },
        email: {
          isNotValid: formData.email === "" ? true : false,
          message:
            formData.email === ""
              ? "please fill out the form"
              : inputError.email.message,
        },
        password: {
          isNotValid: ref.current[3]?.value === "" ? true : false,
          message:
            ref.current[3]?.value === ""
              ? "please fill out the form"
              : inputError.password.message,
        },
        password2: {
          isNotValid: ref.current[4]?.value === "" ? true : false,
          message:
            ref.current[4]?.value === ""
              ? "please fill out the form"
              : inputError.password2.message,
        },
      });
      return;
    }

    const res = await fetch("/api/user/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const { message, status } = await res.json();
      alert(message);
      router.back();
    }
  };
  const inputElementsProps = [
    "firstName",
    "lastName",
    "email",
    "password",
    "password2",
  ];
  const inputElements = inputElementsProps.map((val, x) => {
    return (
      <div key={x} className="sm:col-span-3">
        <label
          htmlFor={val}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {val}
        </label>
        <div className="mt-2">
          <input
            maxLength={30}
            type={
              val === "password" || val === "password2"
                ? "password"
                : val === "email"
                ? "email"
                : "text"
            }
            ref={(el) => (ref.current[x] = el)}
            name={val}
            autoComplete={val}
            id={val}
            className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => handleOnChange(e)}
          />
          {inputError && (inputError as any)[val].isNotValid && (
            <p className="text-red-400 text-xs text-start whitespace-pre">
              {(inputError as any)[val].message}
            </p>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="pb-12 min-w-[50%] h-fit bg-slate-50 rounded-lg p-6">
      <div className="flex flex-col gap-3">
        <form onSubmit={(e) => onSubmit(e)} className="min-w-[60%]">
          {inputElements}
          <div className="text-center">
            <button className="text-center mt-5 capitalize z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
