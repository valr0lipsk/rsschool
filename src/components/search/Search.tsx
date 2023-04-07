import React from 'react';
import style from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { saveSearchValue } from '../../store/features/cards/cardsSlice';

const Search: React.FC = () => {
  const searchValue = useAppSelector((state) => state.cards.searchValue);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState<string>(searchValue ? searchValue : '');

  const handleEnter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(saveSearchValue(inputValue));
  };

  return (
    <form className={style.wrapper} onSubmit={(e) => handleEnter(e)}>
      <input
        className={style.search}
        type="search"
        id="search"
        placeholder="Search something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
