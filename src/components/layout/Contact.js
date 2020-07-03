import React, { useState, Fragment } from 'react';
import emailjs from 'emailjs-com';

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
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name='from_name'
          type='name'
          value={from_name}
          onChange={(e) => onChange(e)}
        />
        <input
          name='reply_to'
          type='email'
          value={reply_to}
          onChange={(e) => onChange(e)}
        />
        <textarea
          name='message'
          type='message'
          value={message}
          onChange={(e) => onChange(e)}
        />
        <input type='submit' value='Submit' />
      </form>
    </Fragment>
  );
};

export default Contact;
