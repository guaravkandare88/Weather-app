import React, { useEffect, useState } from "react";
import "../css/style.css"
const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=62fc334997dafb18fd8e40ca55cf46cd`
            const response = await fetch(url)
            const resjson = await response.json();
            // console.log(resjson);
            setCity(resjson.main);
        }
        fetchApi();
    }, [search]);
    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value);

                        }}
                        placeholder="Enter city name" />
                </div>
                {!city ? (
                    <p>No Data Found</p>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">{city.temp}*cel</h1>
                        <h3 className="tempin_max">Min : {city.temp_min} *cel | Max : {city.temp_max} *cel </h3>
                    </div>
                    <div className="wave1"></div>
                    <div className="wave2"></div>
                    <div className="wave3"></div>
                </>)
                }
            </div>
        </>
    )
};

export default Tempapp;