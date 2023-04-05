import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { ImageItem } from '../../types';
import Modal from '../modal/Modal';
import { CardDetails } from '../../components';
interface Props {
  items: ImageItem[] | undefined;
}

const headers = {
  'Accept-Version': 'v1',
  Authorization: 'Client-ID -koZUPVraluRNEJJQ30ltdBlnZ_E2K6MxfUBcKzdzdg',
};

const CardsList: React.FC<Props> = ({ items }) => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<ImageItem>();

  const handleModalClose = () => setModalOpen(false);
  const handleCardClick = (id: string) => {
    fetch(`https://api.unsplash.com/photos/${id}`, { headers: headers })
      .then((r) => r.json())
      .then((r: ImageItem) => {
        setSelectedItem(r);
        setModalOpen(true);
      });
  };

  return (
    <>
      <div className={style.container} data-testid="cardsList">
        {items && items.map((item) => <Card onClick={handleCardClick} {...item} key={item.id} />)}
      </div>
      {isModalOpen && (
        <Modal title="Photo details" isOpen={isModalOpen} onClose={handleModalClose}>
          <CardDetails item={selectedItem} />
        </Modal>
      )}
    </>
  );
};

export default CardsList;
