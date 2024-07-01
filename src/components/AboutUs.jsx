// AboutUsPage.jsx
import React, { useState, useEffect } from 'react';
import "./AboutUs.css";

const AboutUsPage = () => {
  const [clients, setClients] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [ordersCompleted, setOrdersCompleted] = useState(0);

  const animateCounters = () => {
    const targetClients = 100; // Set your specific number for clients
    const targetReviews = 50; // Set your specific number for reviews
    const targetOrdersCompleted = 200; // Set your specific number for orders completed

    const duration = 2000; // Animation duration in milliseconds

    const startTime = performance.now();

    const updateCounters = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setClients(targetClients * progress);
      setReviews(targetReviews * progress);
      setOrdersCompleted(targetOrdersCompleted * progress);

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  };

  useEffect(() => {
    animateCounters();
  }, []);

  return (
    <div className="about-us-container">
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>Mall in Cart</strong>, our mission is to redefine your shopping experience. We aspire to bring joy and convenience to your life by offering a curated selection of products that cater to your diverse needs and preferences.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Goals and Values</h2>
        <p>
          We are dedicated to delivering excellence in every aspect of your shopping journey. Our values revolve around:
        </p>
        <ul>
          <li>
            <strong>Customer Satisfaction:</strong> Your happiness is our priority. We are committed to providing exceptional customer service and ensuring a seamless shopping experience.
          </li>
          <li>
            <strong>Quality Assurance:</strong> We stand behind the quality of our products. Each item is thoughtfully curated to meet our high standards for durability, functionality, and style.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace innovation to enhance your shopping experience continually. Our goal is to stay ahead of trends and provide you with the latest and most exciting products.
          </li>
        </ul>
      </section>

      <section className="community-section">
        <h2>Building a Community</h2>
        <p>
          Beyond transactions, we aim to build a vibrant community around Mall in Cart. Join us in sharing your shopping experiences, discovering new trends, and connecting with fellow shoppers through our social channels and events.
        </p>
      </section>

      <section className="sustainability-section">
        <h2>Commitment to Sustainability</h2>
        <p>
          Mall in Cart is committed to sustainability. We actively seek eco-friendly products and packaging solutions to minimize our environmental impact. Together, we can contribute to a greener and more sustainable future.
        </p>
      </section>

      <section className="counter-section">
        <h2>Our Achievements</h2>
        <div className="counter-item">
          <h3>{Math.round(clients)}</h3>
          <p>Total Clients</p>
        </div>
        <div className="counter-item">
          <h3>{Math.round(reviews)}</h3>
          <p>Total Reviews</p>
        </div>
        <div className="counter-item">
          <h3>{Math.round(ordersCompleted)}</h3>
          <p>Total Orders Completed</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;