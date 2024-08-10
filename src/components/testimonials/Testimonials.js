import { useState } from "react";
import "./styles.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Doe",
    },
    {
      quote: "This product has completely changed my life.",
      author: "Maximus",
    },
  ];

  function handlePrev() {
    // setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
    // ----------------------------------------------
    // Loops through the list
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }

  function handleNext() {
    // setCurrentIndex(
    //     currentIndex < testimonials.length - 1 ? currentIndex + 1 : currentIndex
    // );
    // ----------------------------------------------
    // Loops through the list
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  }

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
