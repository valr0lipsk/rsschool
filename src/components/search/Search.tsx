import React from 'react';
import style from './Search.module.scss';

interface State {
  search: string | null;
}

export default class Search extends React.Component {
  state: State = {
    search: !localStorage.getItem('search') ? '' : localStorage.getItem('search'),
  };

  componentDidMount() {
    const cachedValue = localStorage.getItem('search');
    if (cachedValue) this.setState((state: State) => ({ ...state, search: cachedValue }));
  }

  componentWillUnmount() {
    if (this.state.search) localStorage.setItem('search', this.state.search);
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
          value={this.state.search ? this.state.search : ''}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
