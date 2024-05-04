import React, { useEffect, useState } from 'react'

function Fvald() {
    const initialValues = {  email: "", password: "", repassword: "", fname: "", lname: "", phone:"", address:"", town:"", region:"", postcode:"", contry:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      
      if (Object.keys(formErrors).length === 0 && isSubmit) {
     
      }
    }, [formErrors]);



    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }

      if (!values.repassword) {
        errors.repassword = "Password is required";
      } else if (values.repassword.length < 4) {
        errors.repassword = "Password must be more than 4 characters";
      } else if (values.repassword.length > 10) {
        errors.repassword = "Password cannot exceed more than 10 characters";
      }


      if (!values.fname) {
        errors.fname = "First name is required!";
      } else if (values.fname.length > 4){
        errors.fname = "pls type just 4 charecter "
      }

      if (!values.lname) {
        errors.lname = "Last name is required!";
      } else if (values.lname.length > 4){
        errors.lname = "pls type just 4 charecter "
      }

      if (!values.phone) {
        errors.phone = "Phone Number is required!";
      }
      if (!values.address) {
        errors.address = "Address is required!";
      }
      if (!values.town) {
        errors.town = "Town name is required!";
      }
      if (!values.region) {
        errors.region = "Region is required!";
      }
      if (!values.postcode) {
        errors.postcode = "Postcode is required!";
      }
      if (!values.contry) {
        errors.contry = "Contry Name is required!";
      }

      
      return errors;
    };


  return (
    <>
       <div className="container">
     

      <form onSubmit={handleSubmit}>
        <h1>USER REGISTRATION</h1>

        <p className='txt'>Fields marked <span>*</span> are required.</p>
        <div className="ui divider"></div>
        <div className="ui form">
         

          <div className="field">
            <label>Email<span>*</span></label>
            <input type="text" name="email"  value={formValues.email}  onChange={handleChange} />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Password<span>*</span></label>
            <input type="password" name="password" value={formValues.password}  onChange={handleChange}  />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <label>Retype Password<span>*</span></label>
            <input type="password" name="repassword" value={formValues.repassword}  onChange={handleChange}  />
          </div>
          <p>{formErrors.repassword}</p>


          <div className="field">
            <label>First Name<span>*</span></label>
            <input type="text" name="fname" value={formValues.fname} onChange={handleChange}  />
          </div>
          <p>{formErrors.fname}</p>

          <div className="field">
            <label>Last Name<span>*</span></label>
            <input type="text" name="lname" value={formValues.lname} onChange={handleChange}  />
          </div>
          <p>{formErrors.lname}</p>

          <div className="field">
            <label>Phone Number<span>*</span></label>
            <input type="text" name="phone" value={formValues.phone} onChange={handleChange}  />
          </div>
          <p>{formErrors.phone}</p>

          <div className="field">
            <label>Address<span>*</span></label>
            <input type="text" name="address" value={formValues.address} onChange={handleChange}  />
          </div>
          <p>{formErrors.address}</p>

          <div className="field">
            <label>Town<span>*</span></label>
            <input type="text" name="town" value={formValues.town} onChange={handleChange}  />
          </div>
          <p>{formErrors.town}</p>

          <div className="field">
            <label>Region<span>*</span></label>
            <input type="text" name="region" value={formValues.region} onChange={handleChange}  />
          </div>
          <p>{formErrors.region}</p>

          <div className="field">
            <label>Postcode/Zip<span>*</span></label>
            <input type="text" name="postcode" value={formValues.postcode} onChange={handleChange}  />
          </div>
          <p>{formErrors.postcode}</p>
          <div className="field">
            <label>Country<span>*</span></label>
           
            <select   value={formValues.contry} onChange={handleChange} name="contry">
                <option>United Kingdom</option>
                <option>India</option>
                <option>United State</option>
            </select>
          </div>
          <p>{formErrors.contry}</p>

          <button className="fluid ui button blue">Register</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Fvald
