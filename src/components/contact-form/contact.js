import React from "react";

import "./contact.scss";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="contact__title text-center mb-1 mb-md-4">Contact Us</h2>
        <form className="contact__form m-auto">
          <div class="mb-3 mb-lg-4">
            <label className="form-label contact__label mb-1" for="nameField" htmlFor="text" >
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="nameField"
            />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="emailField" className="form-label contact__label mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="emailField"
            />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="emailField" className="form-label contact__label mb-1" htmlFor="text">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="textField"
            />
          </div>
          <div class="mb-3 mb-lg-4">
            <label for="emailField" className="form-label contact__label mb-1" htmlFor="text">
              Comments
            </label>
            <textarea
              type="text"
              class="form-control"
              id="textField"
              rows={5}
            />
          </div>
          <button type="submit" class="d-block btn btn-primary contact__submit fs-6 border-0 rounded-0 m-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
