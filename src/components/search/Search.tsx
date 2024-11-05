import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="flex h-[42px] w-[800px] items-center rounded-[3px] bg-white px-1">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="flex-1 text-sm outline-none pl-2"
        />
        <button
          type="submit"
          className="rounded bg-gradient-to-b from-[#f94e30] to-[#ff6433] px-5 py-[9px]"
        >
          <IoIosSearch className="size-4 text-white" />
        </button>
      </div>
    </form>
  );
};
export default Search;
