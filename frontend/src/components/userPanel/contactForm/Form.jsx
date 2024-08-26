import { useState } from 'react';
import { createContact } from '../../../services/admin-contact';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.mobile) errors.mobile = 'Mobile number is required';
    if (!formData.city) errors.city = 'City is required';
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }
    try {
      await createContact(formData);
      setSuccess('Form submitted successfully!');
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Error submitting form. Please try again.' });
    }
  };

  return (
    <div
      className="border fluid transparent-background"
      style={{ height: "70vh", width: "25vw" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <h2
          className="text-light fw-semibold text-center pb-4"
          style={{ lineHeight: "1" }}
        >
          Get a Free <br /> Consultation
        </h2>
        <div className="w-75">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label text-light p-0 m-0">
                <span style={{ color: 'red' }}>*</span> Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="ex:John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control transparent-input text-light"
              />
              {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label text-light p-0 m-0">
            <span style={{ color: 'red' }}>*</span> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex:user@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="form-control transparent-input text-light"
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
            <label htmlFor="mobile" className="form-label text-light p-0 m-0">
            <span style={{ color: 'red' }}>*</span> Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="ex:987654321"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control transparent-input text-light"
              />
              {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
            </div>
            <div className="mb-3">
            <label htmlFor="city" className="form-label text-light p-0 m-0">
            <span style={{ color: 'red' }}>*</span> City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="ex:Mumbai"
                value={formData.city}
                onChange={handleChange}
                className="form-control transparent-input text-light"
              />
              {errors.city && <div className="text-danger">{errors.city}</div>}
            </div>
            <button type="submit" className="btn bg-orange text-light fw-semibold w-100">
              Submit
            </button>
            {success && <div className="text-success mt-3">{success}</div>}
            {errors.submit && <div className="text-danger mt-3">{errors.submit}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
