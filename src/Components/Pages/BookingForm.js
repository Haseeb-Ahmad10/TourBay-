import React, { useState, useEffect, useCallback } from "react";
import classes from "./BookingForm.module.css";
import chcbook from '../../Assets/bookchicago1.jpg'

const BookingForm = function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Email is required.";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits.";
    if (!formData.adults || isNaN(formData.adults) || +formData.adults <= 0)
      newErrors.adults = "Enter number of adults.";
    if (formData.children === "" || isNaN(formData.children) || +formData.children < 0)
      newErrors.children = "Enter number of children.";
    if (!formData.payment) newErrors.payment = "Select a payment method.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  },[formData]);

  useEffect(() => {
    setIsFormValid(validate());
  }, [validate, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Booking submitted successfully!");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      adults: "",
      children: "",
      payment: "",
    });
  };

  return (
    <div className={classes['form-image-wrapper']}>
    <form className={classes['form-container']} onSubmit={handleSubmit}>
      <h2>Confirm Your Booking</h2>

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <span className={classes.error}>{errors.name}</span>}

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <span className={classes.error}>{errors.email}</span>}

      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      {errors.phone && <span className={classes.error}>{errors.phone}</span>}

      <label>Number of Adults:</label>
      <input type="number" name="adults" value={formData.adults} onChange={handleChange} />
      {errors.adults && <span className={classes.error}>{errors.adults}</span>}

      <label>Number of Children:</label>
      <input type="number" name="children" value={formData.children} onChange={handleChange} />
      {errors.children && <span className={classes.error}>{errors.children}</span>}

      <label>Payment Method:</label>
      <select name="payment" value={formData.payment} onChange={handleChange}>
        <option value="">Select</option>
        <option value="mastercard">MasterCard</option>
        <option value="visa">Visa</option>
      </select>
      {errors.payment && <span className={classes.error}>{errors.payment}</span>}

      <button type="submit" disabled={!isFormValid}>Book Now</button>
    </form>
     <img
        className={classes['form-image']}
        src={chcbook}
        alt="Chicago Riverwalk"
      />
    </div>
  );
}
export default BookingForm;