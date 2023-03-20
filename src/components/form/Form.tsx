import React from 'react';
import { InputWrapper } from '../../components';
import styles from './Form.module.scss';

export default class Form extends React.Component {
  render() {
    return (
      <form className={styles.form}>
        <InputWrapper name="user" title="Your name">
          <input type="text" id="user" />
        </InputWrapper>

        <InputWrapper name="date" title="Date of birth">
          <input type="datetime-local" id="date" />
        </InputWrapper>

        <InputWrapper name="country" title="Country">
          <select id="category">
            <option value="1">Canada</option>
            <option value="2">Poland</option>
            <option value="3">Australia</option>
            <option value="4">Brazil</option>
          </select>
        </InputWrapper>

        <InputWrapper name="img" title="Image">
          <input type="file" id="img" accept=".jpg, .png, .jpeg" />
        </InputWrapper>

        <div className={styles.radio__wrapper}>
          <p>Sex:</p>
          <div>
            <InputWrapper type="radio" name="male" title="Male">
              <input type="radio" name="sex" id="male" />
            </InputWrapper>

            <InputWrapper type="radio" name="female" title="Female">
              <input type="radio" name="sex" id="female" />
            </InputWrapper>

            <InputWrapper type="radio" name="other" title="Other">
              <input type="radio" name="sex" id="other" />
            </InputWrapper>
          </div>
        </div>

        <InputWrapper type="checkbox" name="promo" title="I want to receive notifications">
          <input type="checkbox" id="promo" />
        </InputWrapper>

        <button className={styles.submit} type="submit">
          Add new post
        </button>
      </form>
    );
  }
}
