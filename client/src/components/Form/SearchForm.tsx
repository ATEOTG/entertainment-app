import SearchIcon from "../svg/SearchIcon";

interface SearchFormProps {
  pathText: string;
}

function SearchForm(props: SearchFormProps) {
  const placeholderText =
    props.pathText === "/home/all"
      ? "Search for movies or TV series"
      : props.pathText === "/home/movies"
      ? "Search for movies"
      : props.pathText === "/home/television"
      ? "Search for TV series"
      : "Search for bookmarked shows";
  return (
    <div className="search-cont">
      <SearchIcon />
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
          placeholder={placeholderText}
        />
      </form>
    </div>
  );
}

export default SearchForm;
