import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id, temp }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn">
          X
        </button>
      </div>
      <div className="card-body">
        <Link to={`/city/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="grid-container">
          <div>
            <p className="temp">{temp}°</p>
          </div>
          <div>
            <img
              className="iconoClima"
              src={"https://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>

          <div>
            <p className="mm">Min</p>
            <p>{min}°</p>
          </div>
          <div>
            <p className="mm">Max</p>
            <p>{max}°</p>
          </div>
          <div></div>
          <Link to={`/city/${id}`} className="detalles">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
