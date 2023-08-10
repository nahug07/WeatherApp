import React from 'react'
import "./City.css"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function City({city}) {

    if(!city) {
        alert('La ciudad no existe')
        return(<div>La ciudad no existe</div>)
    }

    return (
        <div className="ciudad">
            <Paper elevation={3} sx={{borderRadius: "20px", margin: "20px"}}>
                <div className="container">
                    <Link to={"/"}><h2>{city.name}</h2></Link>
                    <div className="info">
                        <div className="boxItem">
                            <div className="item">Temperatura</div>
                            <div className="item">{city.temp} ºC</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Sensación Térmica</div>
                            <div div className="item">{city.feels_like} ºC</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Clima</div> 
                            <div className="item"> {city.weather}</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Viento</div>
                            <div className="item"> {city.wind} km/h</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Nubosidad</div>
                            <div className="item"> {city.clouds}%</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Latitud</div> 
                            <div className="item"> {city.latitud}º</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Longitud</div> 
                            <div className="item"> {city.longitud}º</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Humedad</div> 
                            <div className="item"> {city.humidity} %</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Visibilidad</div> 
                            <div className="item"> {city.visibility} m</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Presión</div> 
                            <div className="item"> {city.pressure} mb</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">Zona Horaria</div> 
                            <div className="item"> {city.timezone}</div>
                        </div>
                        <Divider />
                        <div className="boxItem">
                            <div className="item">País</div> 
                            <div className="item"> {city.country}</div>
                        </div>
                        <Divider sx={{marginBottom:"6px"}}/>
                        <div>
                        <Link to={"/"}>
                            <Fab color="primary">
                                <ArrowBackIcon />
                            </Fab >
                        </Link> 
                        </div>
                    </div>
            </div>
            </Paper>
        </div>
    )
}



