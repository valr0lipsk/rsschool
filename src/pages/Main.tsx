import React from 'react';
import { Wrapper, Search, CardsList, Loader } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCards } from '../store/features/cards/cardsSlice';

const Main: React.FC = () => {
  const imageItems = useAppSelector((state) => state.cards.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);
  const searchValue = useAppSelector((state) => state.cards.searchValue);
  const error = useAppSelector((state) => state.cards.error);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCards(searchValue));
  }, [dispatch, searchValue]);

  return (
    <Wrapper>
      <Search />
      {isLoading && <Loader />}
      {!error && !isLoading && <CardsList items={imageItems} />}
      {error && <p className="error">Error: {error}</p>}
    </Wrapper>
  );
};

export default Main;
