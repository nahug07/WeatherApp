import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

export default function Card({ min, max, name, img, onClose, id, temp }) {

  return (
    <Paper elevation={3} sx={{borderRadius: "20px", margin: "20px"}}>
    <div className="card">
      <div id="closeIcon" className="row">
        <IconButton onClick={onClose} size="small">
          <HighlightOffOutlinedIcon/>
        </IconButton>
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
            <p className="mm">{min}°</p>
          </div>
          <div>
            <p className="mm">Max</p>
            <p className="mm">{max}°</p>
          </div>
        </div>
        <Link to={`/city/${id}`}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
      </Link>
      </div>
    </div>
    </Paper>
  );
}
