import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { ANIM_DELAY } from "../../constants";

import frameLeft from "../../images/contact-right.png";
import frameRight from "../../images/contact-left.png";

import "./contact.scss";

const ContactForm = () => {
  const initialFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const userValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
      .min(2, "Atleast 2 alphabets required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string()
      .required("Subject is required")
      .min(2, "Atleast 2 alphabets required"),
    message: Yup.string()
      .required("Message is required")
      .min(2, "Atleast 2 alphabets required"),
  });

  const handleFormSubmit = (values, actions) => {
    // fetch("http://mail5013.site4now.net/api/v1/mail/message-put", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     from: values.email,
    //     subject: values.subject,
    //     to: "Info@ornisoft.com",
    //     messagePlainText: values.message,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    Swal.fire({
      title: "Thank you for getting in touch!",
      text: "We appreciate you contacting us. We will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      actions.resetForm({ values: initialFormValues });
    });
  };

  return (
    <div
      className="contact"
      id="contact"
      data-sal="fade"
      data-sal-delay={ANIM_DELAY}
      data-sal-easing="ease-in-out"
    >
      <div className="container">
        <img
          className="contact__shapes contact__shapes_left"
          src={frameRight}
          alt="Right asset"
        />
        <img
          className="contact__shapes contact__shapes_right"
          src={frameLeft}
          alt="Left asset"
        />
        <h2 className="contact__title text-center mb-1 mb-md-4">Contact Us</h2>
        <Formik
          enableReinitialize
          initialValues={initialFormValues}
          onSubmit={(values, actions) => {
            handleFormSubmit(values, actions);
          }}
          validationSchema={userValidationSchema}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form className="contact__form m-auto">
              <div className="mb-3 mb-lg-4">
                <label
                  className="form-label contact__label mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                {touched.name && errors.name && (
                  <div className="form-text text-danger">{errors.name}</div>
                )}
              </div>
              <div className="mb-3 mb-lg-4">
                <label
                  className="form-label contact__label mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <div className="form-text text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3 mb-lg-4">
                <label
                  className="form-label contact__label mb-1"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject"
                />
                {touched.subject && errors.subject && (
                  <div className="form-text text-danger">{errors.subject}</div>
                )}
              </div>
              <div className="mb-3 mb-lg-4">
                <label
                  className="form-label contact__label mb-1"
                  htmlFor="message"
                >
                  Comments
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  rows={5}
                  value={values.message}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                />
                {touched.message && errors.message && (
                  <div className="form-text text-danger">{errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="d-block btn btn-primary contact__submit fs-6 border-0 rounded-0 m-auto"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
