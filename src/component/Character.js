import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div className="card col-4">
        <img className="card-img-top" src={this.props.image} alt="gotImg"></img>
        <div className="card-body">
          <h3 className="card-title"> {this.props.name}</h3>
          <p className="card-text"> {this.props.title}</p>
          <button onChange={handleFavoriteClick}></button>
        </div>
      </div>
    );
  }
}

export default Character;
