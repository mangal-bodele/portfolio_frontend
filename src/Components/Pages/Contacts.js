import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contacts() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const SaveData = async (data) => {
    try {
      // Submit form data asynchronously
      await axios.post('http://localhost:8000/myportfolio/contact/', data);

      // Show success message
      setIsSubmitted(true);

      // Reset the form fields immediately
      reset();

      // Set a timeout to hide the success message after a specified time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Hide after 3000 milliseconds (3 seconds)

    } catch (error) {
      console.error('Error submitting the data:', error);
      // Show error message
      setErrorMessage('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="main-container contact-form my-5 p-5" style={{ maxWidth: '1500px', marginTop: '70px' }}>
      <h2 className="text-center mb-4">Contact Me</h2>

      {isSubmitted && (
        <div className="alert alert-success text-center" role="alert">
          &#10003; Message sent successfully!
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(SaveData)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id="message"
            rows="4"
            placeholder="Enter your message"
            {...register('message', { required: 'Message is required' })}
            aria-invalid={errors.message ? 'true' : 'false'}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success btn-lg">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
