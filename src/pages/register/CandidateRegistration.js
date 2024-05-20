import React, { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";

const CandidateRegistration = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  const { handleSubmit, register, control, watch, setValue } = useForm({
    mode: "onChanges",
    reValidateMode: "onChange",
  });
  console.log(control);
  const term = useWatch({ control, name: "term" });
  console.log(term);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const selectedDate = watch("date");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="cursor-pointer w-fit mt-5 flex items-center"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex justify-center items-center overflow-auto p-10">
        <form
          className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">Teacher</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              Full Name
            </label>
            <input type="text" id="firstName" {...register("fullName")} />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Phone
            </label>
            <input type="text" id="phone" {...register("phone")} />
          </div>

          <select
            {...register("selectedTime")}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Select Time
            </option>
            <option>09:30-12:30</option>
            <option>02:30-05:30</option>
            <option>06:30-09:30</option>
          </select>
          <select
            {...register("selectedTopics")}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Select Topics
            </option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Math</option>
          </select>

          <div>
            <Controller
              name="date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <ReactDatePicker
                  placeholderText="Select date"
                  onChange={(date) => {
                    const formattedDate = date ? format(date, "PP") : null;
                    setValue("date", formattedDate, { shouldValidate: true });
                  }}
                  selected={
                    selectedDate ? parse(selectedDate, "PP", new Date()) : null
                  }
                  dateFormat="PP"
                />
              )}
            />
          </div>

          <label for="tentacles">Class Number (1-2):</label>
          <input
            {...register("tentacles")}
            type="number"
            id="tentacles"
            name="tentacles"
            min="1"
            max="5"
            defaultValue={1}
          />

          <div>
            Per class amount : <span>320</span>
          </div>
          <div>
            Total amount : <span>320</span>
          </div>

          <hr className="w-full mt-2 bg-black" />

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex  w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label for="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegistration;
