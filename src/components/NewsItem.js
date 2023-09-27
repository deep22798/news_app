import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let {title,description,imgurl,uniq}=this.props;
    return (
        <div className="card my-3">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={uniq} target="_blank" className="btn btn-sm btn-primary">
              Read more..
            </a>
          </div>
      </div>
    );
  }
}

export default NewsItem;
