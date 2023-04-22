function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_open" : ""
      }`}
      id={`popup-${props.name}`}
    >
      <div className="popup__modal-window">
        <button
          type="button"
          className="popup__close-button button"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup-form popup-form_${props.name}`}
          name={`${props.name}Form`}
          action="#"
          onSubmit={props.onSubmit}
        >
          <h2 className="popup-form__header">{props.title}</h2>
          {props.children}
          <button className="popup-form__save-button" type="submit">
            {props.submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
