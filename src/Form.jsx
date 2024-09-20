import react, { useState } from 'react';
import './form.css';

export default function Form(){

    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        gender:'',
        subject:'',
        resume:'',
        url:'',
        about:''
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }
    return(
        <div className='form'>
            <h1>Form in React</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" placeholder='Enter First Name:' name="firstname"
            onChange={(e) => handleChanges(e)} required/>

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" placeholder='Enter Last Name:' name="lastname" 
            onChange={(e) => handleChanges(e)} required/>

            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter Email Address:' name="email"
            onChange={(e) => handleChanges(e)} required/>

            <label htmlFor="contact">Contact:</label>
            <input type="text" placeholder='Enter Contact Number:' name="contact"
            onChange={(e) => handleChanges(e)} required/>

            <label htmlFor="gender">Gender:</label>
            <input type="radio" name="gender"
            onChange={(e) => handleChanges(e)} /> Male
            <input type="radio" name="gender" 
            onChange={(e) => handleChanges(e)}/> Female
            <input type="radio" name="gender" 
            onChange={(e) => handleChanges(e)}/> Other

            <label htmlFor="subject">Subject:</label>
            <select name="subject" id="subject" onChange={(e) => handleChanges(e)}>
            <option value="math">Math</option>
            <option value="math">English</option>
            <option value="math">Science</option>
            </select>

            <label htmlFor="resume">Resume:</label>
            <input type="file" placeholder='Upload Resume' name="resume" 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="url">URL:</label>
            <input type="text" placeholder='Enter Image URL:' name="url"
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="about">About:</label>
            <textarea name="about" id="about" cols="30" rows="10"
            onChange={(e) => handleChanges(e)} placeholder='Enter description'></textarea>

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}