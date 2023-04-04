import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { ImageItem } from '../../types';
import Modal from '../modal/Modal';
interface Props {
  items: ImageItem[] | undefined;
}

const CardsList: React.FC<Props> = ({ items }) => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleModalClose = () => setModalOpen(false);
  const handleCardClick = (id: string) => {
    setModalOpen(true);
    console.log(id);
  };

  return (
    <>
      <div className={style.container} data-testid="cardsList">
        {items && items.map((item) => <Card onClick={handleCardClick} {...item} key={item.id} />)}
      </div>
      {isModalOpen && (
        <Modal title="Photo details" isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
};

export default CardsList;
