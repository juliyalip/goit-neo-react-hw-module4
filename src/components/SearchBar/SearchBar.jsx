import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query) {
      toast.error("The field can't be empty!", { duration: 1000 });
      return;
    }
    onSubmit(query);
    setValue("");
  };

  return (
    <header className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
      </form>

      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: "#363636", color: "#fff" },
        }}
      />
    </header>
  );
}
