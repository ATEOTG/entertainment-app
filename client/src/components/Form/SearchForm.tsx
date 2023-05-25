import SearchIcon from "../svg/SearchIcon";

interface SearchFormProps {
  pathText: string;
  textRef: React.RefObject<HTMLInputElement>;
  onSubmitHandler: (event: React.FormEvent) => void;
}

function SearchForm(props: SearchFormProps) {
  const placeholderText: string =
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
      <form className="search-form" onSubmit={props.onSubmitHandler}>
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
          ref={props.textRef}
          placeholder={placeholderText}
        />
      </form>
    </div>
  );
}

export default SearchForm;
