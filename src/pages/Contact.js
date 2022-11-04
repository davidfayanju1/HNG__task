import React from 'react'
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='container'>
        <div className="title">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask  me about anything you have in mind.</p>
        </div>

        <form>
            <div className='form-flex'>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" placeholder='Enter your first name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" placeholder='Enter your last name'/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="first-name">Email</label>
                <input type="email" placeholder='yourname@email.com'/>
            </div>

            <div className="form-group" id='messageText'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
            </div>

            <div className="form-check">
                <input type="checkbox" name="" id="" />
                <small>You agree to providing your data (name) who may contact you.</small>
            </div>

            <div className="form-group">
                <input type="submit" value="Send message" />
            </div>
        </form>
    </div>
  )
}

export default Contact