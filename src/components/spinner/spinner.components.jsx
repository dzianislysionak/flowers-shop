import React from "react";
import Loader from "react-loader-spinner";
import "./spinner.styles.scss";

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner">
        <Loader
          type="TailSpin"
          color="#aba698"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
