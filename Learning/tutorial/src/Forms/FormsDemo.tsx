import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  intrests: string[];
  birthDate: string;
}

interface Error {
  [key: string]: string;
}

const FormsDemo: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    intrests: [],
    birthDate: "",
  });

  const [error, setError] = useState<Error>({});

  const isValidEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password: string) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age: string) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  const validateForm = () => {
    const newError: Error = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "password",
      "confirmPassword",
      "age",
      "gender",
      "birthDate",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof FormData]) {
        newError[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      newError.email = "Invalid email address";
    }

    if (formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
      newError.phoneNumber = "Invalid phone number";
    }

    if (formData.password && !isValidPassword(formData.password)) {
      newError.password = "Invalid password";
    }

    if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
    }

    if (formData.age && !isValidAge(formData.age)) {
      newError.age =
        "You must be at least 18 years old and not older than 100 years";
    }

    if (formData.intrests.length === 0) {
      newError.intrests = "Interests are required";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      intrests: event.target.checked
        ? [...formData.intrests, event.target.value]
        : formData.intrests.filter((intrest) => intrest !== event.target.value),
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid && console.log(`The form submitted \n`, formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleChange}
          />
          {error.firstName && <div className="error">{error.firstName}</div>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
          {error.lastName && <div className="error">{error.lastName}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {error.email && <div className="error">{error.email}</div>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          {error.phoneNumber && (
            <div className="error">{error.phoneNumber}</div>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          {error.password && <div className="error">{error.password}</div>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <div className="error">{error.confirmPassword}</div>
          )}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            placeholder="Age"
            onChange={handleChange}
          />
          {error.age && <div className="error">{error.age}</div>}
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {error.gender && <div className="error">{error.gender}</div>}
        </div>
        <div>
          <label style={{ marginRight: "10px" }}>Intrests: </label>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              name="music"
              value="music"
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              name="sports"
              value="sports"
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          {error.intrests && <div className="error">{error.intrests}</div>}
        </div>
        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={(e) =>
              setFormData({ ...formData, birthDate: e.target.value })
            }
          />
          {error.birthDate && <div className="error">{error.birthDate}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormsDemo;
