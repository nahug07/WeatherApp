import React from 'react'
/* import { useParams } from 'react-router-dom'; */
import "./City.css"
import { Link } from 'react-router-dom'

export default function City({city}) {

    if(!city) {
        alert('La ciudad no existe')
        return(<div>La ciudad no existe</div>)
    }

    /* let params = useParams(); */

    return (
        <div className="ciudad">
                <div className="container">
                    <Link to={"/"}><h2>{city.name}</h2></Link>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Sensación Térmica: {city.feels_like} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Nubosidad: {city.clouds}%</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        <div>Humedad: {city.humidity} %</div>
                        <div>Visibilidad: {city.visibility} m</div>
                        <div>Presión: {city.pressure} mb</div>
                        <div>Zona Horaria: {city.timezone}</div>
                        <div>País: {city.country}</div>
                        <div><Link to={"/"} className="volver">Volver</Link></div>
                    </div>
            </div>
        </div>
    )
}



