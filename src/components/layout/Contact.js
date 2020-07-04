import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ReactComponent as ContactSVG } from '../../img/contact.svg';
import ExternalLinks from '../utils/ExternalLinks';
import PulseLoader from 'react-spinners/PulseLoader';
import { Element } from 'react-scroll';

const TEMPLATE_ID = 'template_mg10MiTz';
const SERVICE_ID = 'gmail';
const USER_ID = 'user_Jb14SOI1diK6aPA9FiImw';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
    loading: false,
  });

  const { from_name, reply_to, message, loading } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validFields(from_name, reply_to)) {
      setFormData({ ...formData, loading: true });
      sendEmail(SERVICE_ID, TEMPLATE_ID, e, USER_ID);
    }
  };

  const validFields = (name, email) => {
    const patternName = /^([^0-9]*)$/;
    const patternEmail = /\S+@\S+\.\S+/;
    return patternName.test(name) && patternEmail.test(email);
  };

  const sendEmail = async (serviceID, templateID, e, userID) => {
    try {
      await emailjs.sendForm(serviceID, templateID, e.target, userID);
      setFormData({ from_name: '', reply_to: '', message: '', loading: false });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Element id='contact' name='contact'>
      <div className='container margin-72-auto'>
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
                  required
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
                  required
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
              <input
                type='submit'
                value='Send'
                disabled={loading ? true : false}
              />
            </form>
            <div className='centered-container fixed-width'>
              <PulseLoader color={'#7bacac'} loading={loading} />
            </div>
            <h6>Phone number (Romanian code)</h6>
            <h6 className='bold'>+04 726 654 132</h6>
            <ExternalLinks />
          </div>
          <div className='col'>
            <ContactSVG height='512px' width='637.19' />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
