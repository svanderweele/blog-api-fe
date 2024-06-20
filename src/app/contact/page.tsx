"use client";
import axios from "axios";
import Background from "../assets/img/about-bg.jpg";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { useState } from "react";

export default function Home() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const Form = () => {
    if (isFormSubmitted) {
      return (
        <div className="col-md-10 col-lg-8 col-xl-7">
          <p>Form submitted. I&apos;ll get back to you shortly.</p>
        </div>
      );
    }

    return (
      <div className="col-md-10 col-lg-8 col-xl-7">
        <p>
          Want to get in touch? Fill out the form below to send me a message and
          I will get back to you as soon as possible!
        </p>
        <div className="my-5">
          <form id="contactForm" action={sendEmail}>
            <div className="form-floating">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Enter your name..."
                data-sb-validations="required"
              />
              <label for="name">Name</label>
              <div
                className="invalid-feedback"
                data-sb-feedback="name:required"
              >
                A name is required.
              </div>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Enter your email..."
                data-sb-validations="required,email"
              />
              <label for="email">Email address</label>
              <div
                className="invalid-feedback"
                data-sb-feedback="email:required"
              >
                An email is required.
              </div>
              <div className="invalid-feedback" data-sb-feedback="email:email">
                Email is not valid.
              </div>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control"
                name="message"
                id="message"
                placeholder="Enter your message here..."
                style={{ height: "12rem" }}
                data-sb-validations="required"
              ></textarea>
              <label for="message">Message</label>
              <div
                className="invalid-feedback"
                data-sb-feedback="message:required"
              >
                A message is required.
              </div>
            </div>
            <br />
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            <button
              className="btn btn-primary text-uppercase"
              id="submitButton"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };

  const sendEmail = (form: FormData) => {
    const name = form.get("name");

    if (!name) {
      return;
    }
    const email = form.get("email");
    if (!email) {
      return;
    }
    const message = form.get("message");

    if (!message) {
      return;
    }

    const body: SendMailDto = {
      name: name.toString(),
      email: email.toString(),
      message: message.toString(),
    };
    axios.post("http://localhost:3001/mail", { ...body }).then((response) => {
      if (response.status === 201) {
        setFormSubmitted(true);
      }
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Header image={Background} />

      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <Form />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export interface SendMailDto {
  name: string;
  email: string;
  message: string;
}
