import React from 'react';
import { User } from 'types';
import { InputWrapper } from '../../components';
import styles from './Form.module.scss';

interface FormProps {
  handleSubmit: (data: User) => void;
}

interface FormState {
  img: string;
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
  form = React.createRef<HTMLFormElement>();

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: FormState = {
    img: '',
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

  validateInput(input: HTMLInputElement | HTMLSelectElement | null) {
    if (!input) return;

    if (input.id === 'nickname' && input.value && input.value.length < 5) {
      input.setCustomValidity('Value should contain min 5 symbols');
    } else if (!input.value) input.setCustomValidity('Value should not be empty');
    else input.setCustomValidity('');
  }

  isFormInvalid = () => {
    return (
      !!this.nickname.current?.validationMessage ||
      !!this.img.current?.validationMessage ||
      !!this.date.current?.validationMessage ||
      !!this.country.current?.validationMessage
    );
  };

  handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.img.current !== null) {
          const imageFile = this.img.current.files && this.img.current.files[0];
          if (imageFile !== null) {
            this.setState({
              img: URL.createObjectURL(imageFile),
            });
          }
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    this.validateInput(this.nickname.current);
    this.validateInput(this.img.current);
    this.validateInput(this.date.current);
    this.validateInput(this.country.current);

    if (this.isFormInvalid()) {
      this.forceUpdate();
    } else {
      const newUser: User = {
        id: crypto.randomUUID(),
        name: this.nickname.current?.value || 'John',
        country: this.country.current?.value || 'Canada',
        dateOfBirth: this.date.current?.value || '1994-03-20T17:51:53.221Z',
        promo: this.promo.current?.checked || false,
        sex: this.getRadioValue(this.sex1.current, this.sex2.current, this.sex3.current),
        image: this.state.img,
      };

      this.props.handleSubmit(newUser);

      this.form.current?.reset();
    }
  }

  render() {
    return (
      <form ref={this.form} className={styles.form} data-testid="form">
        <InputWrapper
          name="nickname"
          title="Nickname"
          error={this.nickname.current?.validationMessage}
        >
          <input ref={this.nickname} type="text" id="nickname" />
        </InputWrapper>

        <InputWrapper
          name="date"
          title="Date of birth"
          error={this.date.current?.validationMessage}
        >
          <input ref={this.date} type="datetime-local" id="date" />
        </InputWrapper>

        <InputWrapper
          name="country"
          title="Country"
          error={this.country.current?.validationMessage}
        >
          <select ref={this.country} id="category" defaultValue={''}>
            <option disabled hidden value=""></option>
            <option value="Canada">Canada</option>
            <option value="Poland">Poland</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
          </select>
        </InputWrapper>

        <InputWrapper name="img" title="Image" error={this.img.current?.validationMessage}>
          <input
            ref={this.img}
            type="file"
            id="img"
            accept=".jpg, .png, .jpeg"
            onInput={this.handleImageInput}
          />
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
