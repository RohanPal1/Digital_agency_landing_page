import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ContactImg from "../../assets/img/contact-us.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82l9nlg",
        "template_6fpsweo",
        form.current,
        "u6mrA_rTY-WERKQ2f"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg mb-4">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Fill the form below and we’ll contact you shortly.
            </p>
          </HeaderInfo>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="font20 extraBold"
                  required
                />

                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="font20 extraBold"
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="font20 extraBold"
                  required
                />

                <label>City</label>
                <input type="text" name="city" className="font20 extraBold" />

                <label>State</label>
                <input type="text" name="state" className="font20 extraBold" />

                <label>Service</label>
                <select name="service" required>
                  <option value="">Select a service</option>
                  <option value="SEO">SEO</option>
                  <option value="SMO">SMO</option>
                  <option value="PPC">PPC</option>
                </select>

                <ButtonInput type="submit" value="Send Message" />
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div className="internal-container p-4">
                <img
                  className="img-fluid rounded"
                  src={ContactImg}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 0px 0;

  input,
  select {
    width: 100%;

    border: none;
    border-bottom: 1px solid #707070;
    height: 40px;
    margin-bottom: 25px;
    outline: none;
  }

  select {
    cursor: pointer;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #ffffffff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }

  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
