import successIcon from "../images/register-success.svg";
import errorIcon from "../images/register-error.svg";

function InfoTooltip({ isOpen, isRegistrationSuccess, onClose }) {
  const successMessage = "Вы успешно зарегистрировались!";
  const errorMessage = "Что-то пошло не так! Попробуйте ещё раз.";

  const icon = isRegistrationSuccess ? successIcon : errorIcon;
  const message = isRegistrationSuccess ? successMessage : errorMessage;

  function handleClickOnOutside(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_tooltip ${isOpen && "popup_opened"}`}
      onClick={handleClickOnOutside}
    >
      <div className="popup__icon-container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть окно"
        ></button>
        <img className="popup__icon" src={icon} alt={message} />
        <p className="popup__icon-caption">{message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
