import { useState,  useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeLink(event) {
    const text = event.target.value;
    setLink(text);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtn="Создать"
    >
      <fieldset className="popup-form__field">
        <input
          className="popup-form__input popup-form__input_place_name"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="place-input"
          name="place"
          onChange={handleChangeName}
          value={name}
        />
        <span className="popup-form__input-error place-input-error"></span>
      </fieldset>
      <fieldset className="popup-form__field">
        <input
          className="popup-form__input popup-form__input_link_photo "
          placeholder="Ссылка на картинку"
          type="url"
          required
          id="link-input"
          name="placeLink"
          onChange={handleChangeLink}
          value={link}
        />
        <span className="popup-form__input-error link-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
