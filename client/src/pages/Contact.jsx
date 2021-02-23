import React, { useState, useEffect } from "react";
import './contact.css';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { BASE_URL } from "../constants/basic";

const getHttpRequest = function () {
  var httpRequest = false;
  if (window.XMLHttpRequest) { // Mozilla, Safari,...
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  }
  else if (window.ActiveXObject) { // IE
    try {
      httpRequest = window.ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
      try {
        httpRequest = window.ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) { }
    }
  }
  if (!httpRequest) return false;
  return httpRequest
}


const validate = values => {
  const errors = {};

  if (!values.lName) {
    errors.lName = 'r';
  } else if (values.lName.length > 20) {
    errors.lName = '3';
  } else if (values.lName.length < 2) {
    errors.lName = '4'
  }

  if (!values.email) {
    errors.email = 'r';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '5';
  }
  if (!values.msg) {
    errors.msg = 'r';
  } else if (values.msg.length > 1000) {
    errors.msg = '6';
  } else if (values.msg.length < 10) {
    errors.msg = '7';
  }
  return errors;
};

const Contact = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState('');
  const [isSubmitting, allowSubmit] = useState('1O');
  const [firstNameError, setFirstNameError] = useState('');
  const [msgIsSend, setMsgSend] = useState(false);
  const [sentError, setSentError] = useState(false);
  const formik = useFormik({
    initialValues: {
      status: '',
      title: '',
      fName: '',
      lName: '',
      email: '',
      subject: '',
      msg: ''
    },
    validate,
    onSubmit: values => {
      console.info('submited times:' + formik.submitCount)
      if (formik.values.lName !== '' && formik.values.email !== '' && formik.values.msg !== '' && formik.isValid && formik.submitCount < 6) {
        allowSubmit('0');
        sendMessage(JSON.stringify(values));
      } else if (formik.submitCount > 5) {
        allowSubmit('-1');
      } else {
        allowSubmit('1');
      }
    },
  });
  const sendMessage = values => {
    const url = BASE_URL + "/contact/message";
    const xhr = getHttpRequest();
    console.log(xhr);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('status Response: ' + xhr.status);
          setMsgSend(true);
          formik.resetForm({});
          formik.setStatus({ success: true });
          formik.setSubmitting(false);
        } else {
          setSentError(true);
        }
      }
    }
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.send(values);
  }

  useEffect(() => {
    if (loaded === '') {
      window.scrollTo(0, 0);
      setLoaded(window.location.hash);
    }
    console.log('-#- ' + isSubmitting);
    console.error(formik.errors);
    if (formik.submitCount > 5) {
      allowSubmit('-1')
    } else {
      if (formik.values.lName !== '' && formik.values.email !== '' && formik.values.msg !== '' && formik.isValid) {
        allowSubmit('0');
      } else if ((formik.errors.lName === '4' || formik.errors.email || formik.errors.msg) && formik.errors.email !== 'r' && formik.errors.msg !== 'r') {
        allowSubmit('2');
      } else if (formik.submitCount === 0 && !formik.errors.lName && !formik.errors.email && !formik.errors.msg) {
        allowSubmit('10');
        setSentError(false);
      } else {
        allowSubmit('1');
        setSentError(false);
      }
    }

  }, [loaded, isSubmitting, allowSubmit, formik.values.lName, formik.values.email, formik.values.msg,
    formik.errors.lName, formik.errors.email, formik.errors.msg, formik.isValid, formik.submitCount, formik.errors]);

  const iChange = (e) => {
    setSentError(false);
    formik.handleChange(e);
  }


  const handleFirstNameIsValitate = (e) => {
    setSentError(false);
    formik.handleChange(e);
    (e.target.value.length === 1) ? setFirstNameError('2') : setFirstNameError('');
  }

  const displayErrorMessage = (index) => {
    switch (index) {
      case 'r':
        return <div className="error-msg">{t('contact.errors.required')}</div>;
      case '1':
        return <div className="error-msg">{t('contact.errors.first-name-long')}</div>
      case '2':
        return <div className="error-msg">{t('contact.errors.first-name-short')}</div>
      case '3':
        return <div className="error-msg">{t('contact.errors.last-name-long')}</div>
      case '4':
        return <div className="error-msg">{t('contact.errors.last-name-short')}</div>
      case '5':
        return <div className="error-msg">{t('contact.errors.email-invalid')}</div>
      case '6':
        return <div className="error-msg">{t('contact.errors.msg-long')}</div>
      case '7':
        return <div className="error-msg">{t('contact.errors.msg-short')}</div>

      default:
        break;
    }
  }

  return (
    <div className="main">
      <div className="divider" ><span className="divider-coral"></span><span className="divider-blue"></span><span className="divider-coral"></span><span className="divider-blue"></span><span className="divider-coral"></span></div>
      <div className="container">
        <div className="section">
          {msgIsSend ?
            (<div className="msg-sent-success">
              <p className="msg-sent-success-p">{t('contact.msg-sent-success')} </p>
            </div>) :
            (<>
              <p className="contact-msg-p">{t('contact.msg')}</p>
              <form onSubmit={formik.handleSubmit} autocomplete="on">
                {sentError && <div className="msg-sent-error">
                  <p className="msg-sent-error-p">{t('contact.errors.msg-sent-error')}</p>
                </div>}
                <div className="select">
                  <select
                    id="status"
                    name="status"
                    className="caretStyle"
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.status}
                  >
                    <option key="0" value="" defaultValue disabled label={t('contact.who-are-you.hint')} />
                    <option key="1" value={t('contact.who-are-you.type-1')} label={t('contact.who-are-you.type-1')} />
                    <option key="2" value={t('contact.who-are-you.type-2')} label={t('contact.who-are-you.type-2')} />
                    <option key="3" value={t('contact.who-are-you.type-3')} label={t('contact.who-are-you.type-3')} />
                    <option key="4" value={t('contact.who-are-you.type-4')} label={t('contact.who-are-you.type-4')} />
                    <option key="5" value={t('contact.who-are-you.type-5')} label={t('contact.who-are-you.type-5')} />
                    <option key="6" value={t('contact.who-are-you.type-6')} label={t('contact.who-are-you.type-6')} />
                    <option key="7" value={t('contact.who-are-you.type-7')} label={t('contact.who-are-you.type-7')} />
                  </select>
                </div>
                <div className="error-msg"></div>
                <div className="select">
                  <select
                    id="title"
                    name="title"
                    className="caretStyle"
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  >
                    <option key="0" value="" defaultValue disabled label={t('contact.your-title.hint')} />
                    <option key="1" value={t('contact.your-title.title-1')} label={t('contact.your-title.title-1')} />
                    <option key="2" value={t('contact.your-title.title-2')} label={t('contact.your-title.title-2')} />
                    <option key="3" value={t('contact.your-title.title-3')} label={t('contact.your-title.title-3')} />
                  </select>
                </div>
                <div className="error-msg"></div>
                <div className="input">
                  <input
                    id="fName"
                    name="fName"
                    type="text"
                    placeholder={t('contact.first-name')}
                    onChange={handleFirstNameIsValitate}
                    onBlur={formik.handleBlur}
                    value={formik.values.fName}
                  />
                </div>
                {(firstNameError !== '') ? displayErrorMessage(firstNameError) : <div className="error-msg"></div>}
                <div className="input required">
                  <input
                    id="lName"
                    name="lName"
                    type="text"
                    placeholder={t('contact.last-name')}
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lName}
                  />
                </div>
                {formik.touched.lName && formik.errors.lName ? displayErrorMessage(formik.errors.lName) : <div className="error-msg"></div>}
                <div className="input required">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contact.mail')}
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>

                {formik.touched.email && formik.errors.email ? displayErrorMessage(formik.errors.email) : <div className="error-msg"></div>}
                <div className="select">
                  <select
                    id="subject"
                    name="subject"
                    className="caretStyle"
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  >
                    <option key="0" value="" defaultValue disabled label={t('contact.subject.hint')} />
                    <option key="1" value={t('contact.subject.subject-1')} label={t('contact.subject.subject-1')} />
                    <option key="2" value={t('contact.subject.subject-2')} label={t('contact.subject.subject-2')} />
                    <option key="3" value={t('contact.subject.subject-3')} label={t('contact.subject.subject-3')} />
                  </select>
                </div>
                <div className="error-msg"></div>
                <div className="textarea required">
                  <textarea
                    id="msg"
                    name="msg"
                    placeholder={t('contact.msg-hint')}
                    spellCheck={true}
                    onChange={iChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.msg}
                    minLength="10" maxLength="1000" />
                </div>
                {formik.touched.msg && formik.errors.msg ? displayErrorMessage(formik.errors.msg) : <div className="error-msg"></div>}
                <div className="check-and-submit">
                  <button className="btn-contact-submit-hidden" type="button" value={2617503}>
                    {formik.errors.lName}
                  </button>
                  {isSubmitting === '-1' && <button className="btn-contact-submit-disabled" type="submit" aria-disabled={true} disabled>
                    {t('contact.errors.reset-form')}
                  </button>}
                  {isSubmitting === '0' && <button className="btn-contact-submit" type="submit">
                    {t('contact.submit')}
                  </button>}
                  {isSubmitting === '10' && <button className="btn-contact-submit-not-allowed" type="submit" aria-disabled={true} disabled>
                    {t('contact.submit')}
                  </button>}
                  {isSubmitting === '1' && <button className="btn-contact-submit-disabled" type="submit" aria-disabled={true} disabled>
                    {t('contact.errors.incoplet-form')}
                  </button>}
                  {isSubmitting === '2' && <button className="btn-contact-submit-disabled" type="submit" aria-disabled={true} disabled>
                    {t('contact.errors.invalid-form')}
                  </button>}
                </div>
              </form>
            </>)}
        </div>
      </div>
    </div>
  );
}

export default Contact;