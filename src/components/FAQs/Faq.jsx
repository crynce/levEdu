import React, { useState } from "react";
import "./Faq.css";

const answerHtml = <div className="answer"> No </div>;

export default function Faq() {
  const [answer, setAnswer] = useState(false);
  const faqHandler = () => {
    setAnswer((prevState) => !prevState);
  };
  return (
    <div className="faqContainerPrimary">
      <div className="faqContainerSecondary">
        <h2 className="faqHeading">FAQs</h2>
        <div className="faqQuestionContainer">
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer" onClick={faqHandler}>
              +
            </span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
          <div className="faqQuestions">
            <div className="quesText">How many Students can I refer?</div>
            <span className="openAnswer">+</span>
            {answer && answerHtml}
          </div>
        </div>
        <button className="agreeRefer">Agree & Refer</button>
      </div>
    </div>
  );
}
