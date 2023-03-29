import React from 'react';
import { IoFemale, IoMale, IoMaleFemale } from 'react-icons/io5';
import { User } from 'types';
import EmptyProfilePicture from '../../assets/empty-profile-picture.png';
import styles from './UserCard.module.scss';

const UserCard: React.FC<User> = ({ image, name, dateOfBirth, country, sex, promo }) => {
  const getSexIcon = (sex: string) => {
    switch (sex) {
      case 'male':
        return <IoMale />;
      case 'female':
        return <IoFemale />;
      default:
        return <IoMaleFemale />;
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={image ? image : EmptyProfilePicture} />
      <p className={styles.user_name}>{name}</p>
      <div className={styles.user_info}>
        <p>
          Birthday: <br />
          <span> {new Date(dateOfBirth).toLocaleDateString()}</span>
        </p>
        <div className={styles.icon}>{getSexIcon(sex)}</div>
        <p>{country}</p>
      </div>
      <p>
        User agreement: <span>{promo ? 'yes' : 'no'}</span>
      </p>
    </div>
  );
};

export default UserCard;
