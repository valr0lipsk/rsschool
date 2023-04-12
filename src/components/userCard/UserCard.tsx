import React from 'react';
import { IoFemale, IoMale, IoMaleFemale } from 'react-icons/io5';
import { User } from 'utils/types';
import EmptyProfilePicture from '../../assets/empty-profile-picture.png';
import styles from './UserCard.module.scss';

const UserCard: React.FC<User> = ({ image, nickname, dateOfBirth, country, sex, isAgree }) => {
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
      <p className={styles.user_name}>{nickname}</p>
      <div className={styles.user_info}>
        <p>
          Birthday: <br />
          <span> {new Date(dateOfBirth).toLocaleDateString()}</span>
        </p>
        <div className={styles.icon}>{getSexIcon(sex)}</div>
        <p>{country}</p>
      </div>
      <p>
        User agreement: <span>{isAgree ? 'yes' : 'no'}</span>
      </p>
    </div>
  );
};

export default UserCard;
