import React from 'react';
import { InputWrapper } from '../../components';
import styles from './Form.module.scss';

export default class Form extends React.Component {
  render() {
    return (
      <form className={styles.form}>
        <InputWrapper name="title" title="Title">
          <input type="text" id="title" />
        </InputWrapper>

        <InputWrapper name="date" title="Date of post">
          <input type="datetime-local" id="date" />
        </InputWrapper>

        <InputWrapper name="category" title="Category">
          <select id="category">
            <option value="1">category 1</option>
            <option value="2">category 2</option>
            <option value="3">category 3</option>
            <option value="4">category 4</option>
          </select>
        </InputWrapper>

        <InputWrapper name="img" title="Image">
          <input type="file" id="img" accept=".jpg, .png, .jpeg" />
        </InputWrapper>

        <div className={styles.radio__wrapper}>
          <p>Visible for:</p>
          <div>
            <InputWrapper type="radio" name="var1" title="all users">
              <input type="radio" name="visible" id="var1" />
            </InputWrapper>

            <InputWrapper type="radio" name="var2" title="only followers">
              <input type="radio" name="visible" id="var2" />
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
