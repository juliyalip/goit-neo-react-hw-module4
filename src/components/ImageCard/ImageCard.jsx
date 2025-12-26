import style from "./ImageCard.module.css";

export default function ImageCard({ alt, url }) {

  return (
    <>
      <div className={style.wrapperImg}>
        <img src={url} alt={alt} className={style.image} />
      </div>
    </>
  );
}
