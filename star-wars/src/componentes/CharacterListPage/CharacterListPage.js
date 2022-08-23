import React, {useState, useEffect} from "react";
import { ContainerCharacter } from "./styled"
import { getCharacterList } from "../../services/customHooksCharacter";

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([]);

    console.log(characterList);
    useEffect(() => {
        getCharacterList(setCharacterList)
    }, []);

    function onlyCharacter(){
        return characterList.map((characters, index) => {
                return  (<ContainerCharacter onClick={() => {props.goToDetailPage(characters.url)} } key={index}>{characters.name}</ContainerCharacter>);
            })
    };

    return (
        <div>
            <h1>Detalhes de Personagens</h1>
            {onlyCharacter()}

        </div>
    )
}

export default CharacterListPage;