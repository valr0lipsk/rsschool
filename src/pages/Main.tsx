import React from 'react';
import { Wrapper, Search, CardsList, Loader } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCards, saveSearchValue } from '../store/features/cards/cardsSlice';

const Main: React.FC = () => {
  const imageItems = useAppSelector((state) => state.cards.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const searchValue = useAppSelector((state) => state.cards.searchValue);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCards(searchValue));
  }, [dispatch, searchValue]);

  const handleSearch = (value: string) => {
    dispatch(saveSearchValue(value));
  };

  return (
    <Wrapper>
      <Search handleSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && <CardsList items={imageItems} />}
    </Wrapper>
  );
};

export default Main;
