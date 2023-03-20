import React from 'react';
import { IoFemale, IoMale, IoMaleFemale } from 'react-icons/io5';
import { User } from 'types';

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
      <div>
        <img src={this.props.image} />
        <p>{this.props.name}</p>
        <div>
          <p>{this.props.country}</p>
          <p>
            Birthday: <br />
            {new Date(this.props.dateOfBirth).toLocaleDateString()}
          </p>
        </div>
        <div>{this.getSexIcon(this.props.sex)}</div>
        <p>Promo notifications: {this.props.promo ? 'yes' : 'no'}</p>
      </div>
    );
  }
}
