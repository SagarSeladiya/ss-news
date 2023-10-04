import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, urlToImage, url, source,  author, publishedAt} = this.props;
    return (
      <div className="my-3">
          <div className="card" >
            <img src={!urlToImage?"https://imgeng.jagran.com/images/2023/sep/zealandia1695816291004.jpg":urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
              {source}           
              </span>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(publishedAt).toGMTString()}</small></p>
              <a href={url} target="_blank" className="btn btn-dark">
                Go somewhere
              </a>
            </div>
          </div>
      </div>
    )
  }
}
