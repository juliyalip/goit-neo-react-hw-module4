import style from "./ImageModal.module.css";

export default function ImageModal({ url, alt, description , onClose }) {
  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.content}>
        <img src={url} alt={alt} />
      {description &&  <p className={style.title}>{description}</p>} 
      </div>
    </div>
  );
}
