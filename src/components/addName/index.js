import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./addNameStyle.css";

const GetName = ({ passNumber }) => {
  const submitForm = (values) => {
    const requestedNumber = values.numberOfTimes;
    const name = values.name;

    let arr = [];
    for (let i = 0; i < requestedNumber; i++) {
      const obj = { name: name };
      arr = [...arr, obj];
    }

    passNumber(arr);
  };

  const validationSchema = Yup.object().shape({
    numberOfTimes: Yup.number().required().min(1).max(9).label("ERROR: "),
  });

  return (
    <div className="center">
      <p>Display your name</p>

      <Formik
        initialValues={{ numberOfTimes: 1, name: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}

            <input
              type="number"
              name="numberOfTimes"
              onChange={handleChange}
              value={values.numberOfTimes}
            />
            {errors.numberOfTimes &&
              touched.numberOfTimes &&
              errors.numberOfTimes}

            <input type="submit" value="Get your name" />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default GetName;
