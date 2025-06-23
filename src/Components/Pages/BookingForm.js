import React, { useState } from 'react';
import classes from './BookingForm.module.css'; 
import chicagobook from '../../Assets/bookchicago1.jpg';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    payment: 'mastercard'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
      isValid = false;
    }

    // Adults validation
    if (formData.adults < 1) {
      newErrors.adults = 'At least one adult is required';
      isValid = false;
    }

    // Children validation
    if (formData.children < 0) {
      newErrors.children = 'Number of children cannot be negative';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'adults' || name === 'children' ? parseInt(value) || 0 : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      adults: 1,
      children: 0,
      payment: 'mastercard'
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={classes['booking-confirmation']}>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for your booking, {formData.name}.</p>
        <p>A confirmation has been sent to {formData.email}.</p>
        <button onClick={handleReset} className={classes['book-now-btn']}>
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className={classes['form-image-wrapper']}>
    <form onSubmit={handleSubmit} className={classes['booking-form']}>
      <h2>Book Your Stay</h2>
      
      <div className={classes['form-group']}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className={classes['error-message']}>{errors.name}</span>}
      </div>

      <div className={classes['form-group']}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className={classes['error-message']}>{errors.email}</span>}
      </div>

      <div className={classes['form-group']}>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className={classes['error-message']}>{errors.phone}</span>}
      </div>

      <div className={classes['form-row']}>
        <div className={classes['form-group']}>
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            className={errors.adults ? 'error' : ''}
          />
          {errors.adults && <span className={classes['error-message']}>{errors.adults}</span>}
        </div>

        <div className={classes['form-group']}>
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className={errors.children ? 'error' : ''}
          />
          {errors.children && <span className={classes['error-message']}>{errors.children}</span>}
        </div>
      </div>

      <div className={classes['form-group']}>
        <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
        >
          <option value="mastercard">Master Card</option>
          <option value="visa">Visa</option>
        </select>
      </div>

      <button type="submit" className={classes['book-now-btn']}>
        Book Now
      </button>
    </form>
    <img src={chicagobook} alt="Chicago Booking" className={classes['form-image']} />
    </div>
  );
};

export default BookingForm;