import React from 'react';
import { User } from 'types';
import { InputWrapper } from '../../components';
import styles from './Form.module.scss';
import EmptyProfilePicture from '../../assets/empty-profile-picture.png';

interface FormProps {
  handleSubmit: (data: User) => void;
}

interface FormState {
  img: string;
  errors: {
    nickname: string;
    date: string;
    img: string;
  };
}

export default class Form extends React.Component<FormProps> {
  nickname = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  img = React.createRef<HTMLInputElement>();
  sex1 = React.createRef<HTMLInputElement>();
  sex2 = React.createRef<HTMLInputElement>();
  sex3 = React.createRef<HTMLInputElement>();
  promo = React.createRef<HTMLInputElement>();
  file: File;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.file = new File([EmptyProfilePicture], 'empty-profile-picture.png', { type: 'image/png' });
  }

  state: FormState = {
    img: '',
    errors: {
      nickname: '',
      date: '',
      img: '',
    },
  };

  getRadioValue(
    radio1: HTMLInputElement | null,
    radio2: HTMLInputElement | null,
    radio3: HTMLInputElement | null
  ) {
    if (!radio1 || !radio2 || !radio3) return 'male';
    if (radio1.checked) return radio1.value;
    if (radio2.checked) return radio2.value;
    return 'other';
  }

  handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    for (const key in this.state.errors) {
      const input = this[key as keyof Form] as React.RefObject<HTMLInputElement>;
      if (input && input.current?.value) {
        this.setState((prev: FormState) => {
          return {
            ...prev,
            errors: { ...prev.errors, [key]: '' },
          };
        });
      }

      if (!input.current?.value) {
        this.setState((prev: FormState) => {
          return { ...prev, errors: { ...prev.errors, [key]: 'Value should not be empty' } };
        });
      }

      if (key === 'nickname' && input.current?.value && input.current.value.length < 5) {
        this.setState((prev: FormState) => {
          return {
            ...prev,
            errors: { ...prev.errors, nickname: 'Value should contain min 5 symbols' },
          };
        });
      }
    }

    setTimeout(() => {
      if (Object.values(this.state.errors).every((e) => !e)) {
        const newUser: User = {
          id: (Math.random() + Math.random() * Math.random()).toString(),
          name: this.nickname.current?.value || 'John',
          country: this.country.current?.value || 'Canada',
          dateOfBirth: this.date.current?.value || '1994-03-20T17:51:53.221Z',
          promo: this.promo.current?.checked || false,
          sex: this.getRadioValue(this.sex1.current, this.sex2.current, this.sex3.current),
          image: URL.createObjectURL(this.file),
        };

        this.props.handleSubmit(newUser);
      }
    });
  }

  render() {
    return (
      <form className={styles.form}>
        <InputWrapper name="nickname" title="Your name" error={this.state.errors.nickname}>
          <input ref={this.nickname} type="text" id="nickname" />
        </InputWrapper>

        <InputWrapper name="date" title="Date of birth" error={this.state.errors.date}>
          <input ref={this.date} type="datetime-local" id="date" />
        </InputWrapper>

        <InputWrapper name="country" title="Country">
          <select ref={this.country} id="category">
            <option value="Canada">Canada</option>
            <option value="Poland">Poland</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
          </select>
        </InputWrapper>

        <InputWrapper name="img" title="Image" error={this.state.errors.img}>
          <input ref={this.img} type="file" id="img" accept=".jpg, .png, .jpeg" />
        </InputWrapper>

        <div className={styles.radio__wrapper}>
          <p>Sex:</p>
          <div>
            <InputWrapper type="radio" name="male" title="Male">
              <input
                ref={this.sex1}
                type="radio"
                name="sex"
                value="male"
                id="male"
                defaultChecked
              />
            </InputWrapper>

            <InputWrapper type="radio" name="female" title="Female">
              <input ref={this.sex2} type="radio" name="sex" value="female" id="female" />
            </InputWrapper>

            <InputWrapper type="radio" name="other" title="Other">
              <input ref={this.sex3} type="radio" name="sex" value="other" id="other" />
            </InputWrapper>
          </div>
        </div>

        <InputWrapper type="checkbox" name="promo" title="I want to receive notifications">
          <input ref={this.promo} type="checkbox" id="promo" />
        </InputWrapper>

        <button
          className={styles.submit}
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
        >
          Add new user
        </button>
      </form>
    );
  }
}
