import { useEffect, useState } from "react";
import { getPlanetList } from "../../services/HookToPlanets";
import { ContainerPlanets } from "./styled";

const PlanetsListPage = (props) => {
    const [listPlanets, setListPlanets] = useState([]);

    useEffect(() => {
        getPlanetList(setListPlanets);
    }, [])

    console.log(listPlanets);
    
    function onlyPlanets(){
        return listPlanets.map((planets, index) => {
            return (<ContainerPlanets onClick={() => {props.goToDetailplanets(planets.url)}} key={index}>{planets.name}</ContainerPlanets>);
        })
    }

    return(
        <div>
            <h1>Detalhes de Planetas</h1>
            {onlyPlanets()}
        </div>
    )
}

export default PlanetsListPage;