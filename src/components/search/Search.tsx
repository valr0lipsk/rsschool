import React from 'react';
import style from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState<string>(
    localStorage.getItem('search') || ''
  );

  React.useEffect(() => {
    return () => {
      if (searchValue) localStorage.setItem('search', searchValue);
    };
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
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
