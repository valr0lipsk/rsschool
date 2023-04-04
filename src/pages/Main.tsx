import React from 'react';
import { Wrapper, Search, CardsList, Loader, Modal } from '../components';
import { ImageItem, SearchResponse } from '../types';

const API_URL = 'https://api.unsplash.com/search/photos?query=';
const headers = {
  'Accept-Version': 'v1',
  Authorization: 'Client-ID -koZUPVraluRNEJJQ30ltdBlnZ_E2K6MxfUBcKzdzdg',
};

const Main: React.FC = () => {
  const [items, setItems] = React.useState<ImageItem[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const currentUrl = API_URL + (localStorage.getItem('search') || 'all');
    setIsLoading(true);

    fetchItems(currentUrl);
  }, []);

  const handleSearch = (value: string) => {
    const currentUrl = value ? API_URL + value : API_URL + 'all';
    setIsLoading(true);

    fetchItems(currentUrl);
  };

  const fetchItems = (url: string) => {
    fetch(url, { headers: headers })
      .then((r) => r.json())
      .then((r: SearchResponse) => {
        setItems(r.results);
        setIsLoading(false);
      });
  };

  return (
    <Wrapper>
      <Search handleSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && <CardsList items={items} />}
    </Wrapper>
  );
};

export default Main;
