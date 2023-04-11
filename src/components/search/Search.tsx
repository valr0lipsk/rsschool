import React from 'react';
import style from './Search.module.scss';

interface Props {
  handleSearch: (value: string) => void;
}

const Search: React.FC<Props> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = React.useState<string>(
    localStorage.getItem('search') || ''
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchValue);
    localStorage.setItem('search', searchValue);
  };

  return (
    <form className={style.wrapper} onSubmit={(e) => handleEnter(e)}>
      <input
        className={style.search}
        type="search"
        id="search"
        placeholder="Search something"
        value={searchValue || ''}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
