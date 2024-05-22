import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import Header from './Header'

export default function Login() {
  const { t } = useTranslation("global")
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const navigate = useNavigate();
  const email = useRef();

  function isValidEmail(email) {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    if (!isValidEmail(enteredEmail)) {
      setEmailIsInvalid(true);
      return;
    } 
    setEmailIsInvalid(false);
  
    navigate("/ShowImage");
  }
  return (
    <> 
    <Header /> 
    <form onSubmit={handleSubmit}>
      {/* <h2>Login</h2> */}
      <h2>{t("mainSection.loginTitle")}</h2>
      <div className="control-row">
        <div className="control no-margin">
          <input id="email" name="email" placeholder={t("mainSection.Email")} ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>{t("mainSection.EmailErrorMsg")}</p>}
          </div>
        </div>

        <div className="control no-margin">
          <input id="password" type="password" name="password" placeholder={t("mainSection.Password")}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button">{t("mainSection.loginTitle")}</button>
      </p>
    </form>
    </>
  );
}
