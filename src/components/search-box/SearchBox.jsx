import { Component } from "react";
import './SearchBox.styles.css';

class SearchBox extends Component {

  render() {

    return (
      <input
        className={`searchBox ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
