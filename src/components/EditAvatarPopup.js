import { useRef,  useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtn="Сохранить"
    >
      <fieldset className="popup-form__field">
        <input
          className="popup-form__input popup-form__input_link_avatar "
          placeholder="Ссылка на фото"
          type="url"
          required
          id="link-avatar"
          name="avatar"
          ref={avatarRef}
        />
        <span className="popup-form__input-error link-avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
