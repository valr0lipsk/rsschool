import React from 'react';
import style from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState<string>(
    localStorage.getItem('search') || ''
  );

  const searchRef = React.useRef<string>(searchValue);

  React.useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  React.useEffect(() => {
    return () => {
      if (searchRef.current) localStorage.setItem('search', searchRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <input
        className={style.search}
        type="search"
        id="search"
        placeholder="Search something"
        value={searchValue || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
