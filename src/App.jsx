import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import { getImages } from "./api/service-api";

function App() {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const { data: images, totalPages } = await getImages(query, page);
        setTotalPages(totalPages);
        setGallery((prevState) =>
          page === 1 ? images : [...prevState, ...images]
        );
      } catch (e) {
        console.log(e);
        setError("error");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
    setError(null);
    setTotalPages(0);
  };

  const handleSelected = (image) => {
    setSelected(image);
  };

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const isVisibleBtn =
    gallery.length > 0 && !loading && !error && page < totalPages;

  const onClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setSelected(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {gallery.length > 0 && (
        <ImageGallery items={gallery} onSelected={handleSelected} />
      )}
      {selected && <ImageModal {...selected} onClose={onClose} />}
      {loading && <Loader />}
      {isVisibleBtn && <LoadMoreBtn onClick={onLoadMore} />}
    </>
  );
}

export default App;
