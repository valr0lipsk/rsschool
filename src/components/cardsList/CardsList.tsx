import React from 'react';
import style from './CardsList.module.scss';
import Card from '../card/Card';
import { ImageItem } from '../../utils/types';
import Modal from '../modal/Modal';
import { CardDetails } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCardById } from '../../store';
interface Props {
  items: ImageItem[] | undefined;
}
const CardsList: React.FC<Props> = ({ items }) => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector((state) => state.cards.selectedCard);

  const handleModalClose = () => setModalOpen(false);
  const handleCardClick = (id: string) => {
    dispatch(fetchCardById(id));
    setModalOpen(true);
  };

  if (!items) return <p className={style.empty}>Oops, something went wrong</p>;
  if (!items?.length) return <p className={style.empty}>Oops, nothing found</p>;
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
