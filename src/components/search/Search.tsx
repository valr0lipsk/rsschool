import React, { Component } from 'react';
import style from './Search.module.scss';

interface State {
  search: string;
}

export default class Search extends Component {
  state: State = {
    search: '',
  };

  componentDidMount() {
    const cachedValue = localStorage.getItem('search');
    if (cachedValue) this.setState((state: State) => ({ ...state, search: cachedValue }));
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState((state: State) => ({ ...state, search: value }));
  };

  render() {
    return (
      <div className={style.wrapper}>
        <input
          className={style.search}
          type="search"
          id="search"
          placeholder="Search something"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
