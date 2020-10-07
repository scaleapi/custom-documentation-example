import React from 'react';
import cn from 'classnames';

import styles from './Close.module.css';

export default class Close extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <button
        className={cn(styles.navTrigger, isToggleOn ? '' : styles.navTriggerOpen)}
        type="button"
        onClick={this.handleClick}
      >
        <span />
      </button>
    );
  }
}
