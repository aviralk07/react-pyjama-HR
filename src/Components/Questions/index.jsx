import React, { useState } from "react";
import "./style.css";

const Questions = () => {
  const initialData = [
    {
      question: "How much do I have to pay to use PyjamaHR?",
      subtitle:
        "Enjoy access to PyjamaHR at absolutely no cost— it's a completely free ATS platform tailored to meet your hiring needs.",
    },
    {
      question: "Can I register using my personal Gmail or Outlook account?",
      subtitle:
        "We require registrations through a work email address, personal emails like Gmail or Outlook aren't accepted.",
    },
    {
      question: "Is it possible to post job openings through PyjamaHR?",
      subtitle:
        "Absolutely! You can effortlessly publish job openings on our associated job boards. Additionally, we provide a customizable career page that can be integrated with your website to enhance candidate traffic and make the most of your recruitment efforts.",
    },
    {
      question: "Do I have to pay every time I post a job?",
      subtitle:
        "No, there are no charges for posting jobs. It's entirely free.",
    },
    {
      question:
        "Is there a limit on the number of job postings I can make each month?",
      subtitle:
        "No, you can post an unrestricted number of job vacancies based on your recruitment needs, without any monthly limitations.",
    },
    {
      question: "How can I migrate data from another ATS to PyjamaHR?",
      subtitle:
        "We offer free assistance to transition your data from other ATS systems to PyjamaHR, ensuring a smooth and seamless migration process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const [expandedHeight, setExpandedHeight] = useState(110); // Initial height

  const toggleH4Visibility = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
      setExpandedHeight(110); // Reset the height
    } else {
      setOpenIndex(index);
      setExpandedHeight(180); // Set the expanded height
    }
  };

  const getH3Style = (index) => {
    return {
      fontWeight: openIndex === index ? "600" : "normal",
      fontSize: openIndex === index ? "20px" : "17px", // Increase font size when expanded
    };
  };

  return (
    <>
      <div className="ques-head">
        <button>&#128156; FAQ</button>
        <h1>Need answers?</h1>
        <h5>
          Check out our most commonly asked questions below to find the
          information you need.
        </h5>
      </div>
      <br /><br />

      <div className="container3">
        <div className="row">
          {initialData.map((item, index) => (
            <div
              className={`col-md-12 outer-container ${
                openIndex === index ? "expanded" : ""
              }`}
              onClick={() => toggleH4Visibility(index)}
              style={{
                height: openIndex === index ? expandedHeight + "px" : "110px",
              }}
              key={index}
            >
              <div className="toggle-button">
                {openIndex === index ? "-" : "+"}
              </div>
              <h3 style={getH3Style(index)}>{item.question}</h3>
              {openIndex === index && <h4>{item.subtitle}</h4>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
