import React from 'react';
import { IoFemale, IoMale, IoMaleFemale } from 'react-icons/io5';
import { User } from 'types';
import EmptyProfilePicture from '../../assets/empty-profile-picture.png';
import styles from './UserCard.module.scss';

export default class UserCard extends React.Component<User> {
  public getSexIcon(sex: string) {
    switch (sex) {
      case 'male':
        return <IoMale />;
      case 'female':
        return <IoFemale />;
      default:
        return <IoMaleFemale />;
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <img
          className={styles.img}
          src={this.props.image ? this.props.image : EmptyProfilePicture}
        />
        <p className={styles.user_name}>{this.props.name}</p>
        <div className={styles.user_info}>
          <p>
            Birthday: <br />
            <span> {new Date(this.props.dateOfBirth).toLocaleDateString()}</span>
          </p>
          <div className={styles.icon}>{this.getSexIcon(this.props.sex)}</div>
          <p>{this.props.country}</p>
        </div>
        <p>
          Promo notifications: <span>{this.props.promo ? 'yes' : 'no'}</span>
        </p>
      </div>
    );
  }
}
