import React, { useState, Fragment } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { ReactComponent as ContactSVG } from '../../img/contact.svg';

const TEMPLATE_ID = 'template_mg10MiTz';
const SERVICE_ID = 'gmail';
const USER_ID = 'user_Jb14SOI1diK6aPA9FiImw';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const { from_name, reply_to, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    sendEmail(SERVICE_ID, TEMPLATE_ID, e, USER_ID);
  };

  const sendEmail = async (serviceID, templateID, e, userID) => {
    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        userID
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <h1 className='regular'>Let's build a solution together</h1>
        <div className='row'>
          <div className='col'>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <label htmlFor='from_name'>Name</label>
                <input
                  name='from_name'
                  id='from_name'
                  type='name'
                  value={from_name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reply_to'>Email</label>
                <input
                  name='reply_to'
                  id='reply_to'
                  type='email'
                  value={reply_to}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  type='message'
                  value={message}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input type='submit' value='Send' />
            </form>
            <h6>Phone number (Romanian code)</h6>
            <h6 className='bold'>+04 726 654 132</h6>
            <div className='external-contact'>
              <Link
                to={{ pathname: 'https://github.com/DavidBuzatu-Marian' }}
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </Link>
              <Link
                to={{
                  pathname:
                    'https://www.linkedin.com/in/david-buzatu-160620198/',
                }}
                target='_blank'
              >
                <i className='fab fa-linkedin-in'></i>
              </Link>
            </div>
          </div>
          <div className='col'>
            <ContactSVG height='512px' width='637.19' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
