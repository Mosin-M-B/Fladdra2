import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import "./GetInTouch.css";
import React from "react";
export const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const checkbox = form.current.querySelector('input[type="checkbox"]');
    const selectedInterest = form.current.querySelector('select[name="selectedInterest"]').value;

    if (!checkbox.checked) {
      toast.error('Please consent to the terms to send the email.');
      return;
    }

    if (selectedInterest === '--None--') {
      toast.error('Please select an option in the "Interested In" field.');
      return;
    }

    emailjs
      .sendForm('service_zal15hq', 'template_0xog49j', form.current, '2hoEQ873QuwNWHfyL')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset(); // Reset form inputs
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);
        },
      );
  };

  return (
    <>
      <Helmet>
        <title>Get In Touch - Fladdra</title>
        <meta name="description" content="Connect with our team about your upcoming business projects and opportunities." />
      </Helmet>
      <ToastContainer />
      <div className="get_hero">
        <div className="get_hero_content">
          <h1>Take Your Business Fladdra Today</h1>
          <p>
            Let’s connect on how we can use data, cloud, and AI to unlock your
            opportunities and drive impact for your business.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contact_content">
          <h1>Get In Touch</h1>
          <p>
            Connect with our team about your upcoming business projects and
            opportunities.
          </p>
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="contact_form_left">
              <div className="labls">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" required />
              </div>
              <div className="labls">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" required />
              </div>
              <div className="labls">
                <label htmlFor="company_name">Company</label>
                <input type="text" name="company_name" required />
              </div>
              <div className="labls">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="labls">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" name="phone_number" required />
              </div>
            </div>
            <div className="contact_form_right">
              <label>
                Interested In:
                <select name="selectedInterest" className="select-margin" required>
                  <option value="--None--">--None--</option>
                  <option value="Cloud Architecture & Managed Services">Cloud Architecture & Managed Services</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="Data Strategy & Transformation">Data Strategy & Transformation</option>
                  <option value="Digital & Relationship Marketing">Digital & Relationship Marketing</option>
                  <option value="Journey Optimization & Experimentation">Journey Optimization & Experimentation</option>
                  <option value="Privacy & Governance">Privacy & Governance</option>
                </select>
              </label>
              <label>
                Industry:
                <select name="selectedIndustry" className="select-margin" required>
                  <option value="Consumer">Consumer</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Higher Education">Higher Education</option>
                  <option value="High Tech">High Tech</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </label>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" name="consent" />
                <label htmlFor="checkbox">
                  I consent to having Further use the provided information for
                  direct marketing purposes including contact by email or other
                  electronic means.
                </label>
              </div>
              <button className="contactbtn" type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
