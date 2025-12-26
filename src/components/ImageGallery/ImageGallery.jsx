import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ items, onSelected }) {


  const handleSelect = (url, alt_description, description) =>
    onSelected({ url, alt: alt_description, description });

  return (
    <ul className={style.list}>
      {items.map(({ id, alt_description, urls, description }) => (
        <li
          key={id}
          className={style.card}
          onClick={() =>
            handleSelect(urls.regular, alt_description, description)
          }
        >
          <ImageCard url={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}
