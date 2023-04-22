import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeDescription(event) {
    const text = event.target.value;
    setDescription(text);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup-form__field">
        <input
          className="popup-form__input popup-form__input_text_name "
          type="text"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          id="name-input"
          name="name"
          onChange={handleChangeName}
          value={name || ''}
        />
        <span className="popup-form__input-error name-input-error"></span>
      </fieldset>
      <fieldset className="popup-form__field">
        <input
          className="popup-form__input popup-form__input_text_job"
          type="text"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          id="about-input"
          name="job"
          onChange={handleChangeDescription}
          value={description || ''}
        />
        <span className="popup-form__input-error about-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
