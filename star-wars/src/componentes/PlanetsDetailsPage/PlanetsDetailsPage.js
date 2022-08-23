import React, { useEffect, useState } from "react";
import { getPlanet } from "../../services/HookToPlanets";

const PlanetsDetailsPage = (props) => {
    const [planetDetails, setPlanetDetails] = useState({});
    // console.log(props.url)
    // console.log(planetDetails)

    useEffect(() => {
        getPlanet(props.url, setPlanetDetails)
    }, [props.url])



    return(
        <div>

            <h1> Detalhes </h1>
            {planetDetails.name && planetDetails.climate && planetDetails.population && planetDetails.terrain ?
                <div>
                    <p>Nome: {planetDetails.name}</p>
                    <p>Clima: {planetDetails.climate}</p>
                    <p>População: {planetDetails.population}</p>
                    <p>Terreno: {planetDetails.terrain}</p>
                </div> :
                <p> Carregando ...</p>
            }
            
            <button onClick={props.goTListlplanets} > Voltar para planetas</button>
        </div>
    );
};

export default PlanetsDetailsPage;