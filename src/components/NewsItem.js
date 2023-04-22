import React from "react";

const NewsItem = (props) => {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
          <img
            src={
              !imageURL
                ? "https://www.hindustantimes.com/ht-img/img/2023/04/02/1600x900/varun_dhawan_1680419567101_1680419567237_1680419567237.jpg"
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsURL}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
