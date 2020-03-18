import React from "react";
import { connect } from "react-redux";
import '../App.css'

const CharacterList = props => {
    console.log(props.characters,"list-props")

    return (
        <div className="display">
            {props.characters.map(character => (
                                                <div className="characters"
                                                key={character.created}>
                                                <h1>{character.name}</h1>
                                                <p>Created: {character.created}</p>
                                                <p>Edited: {character.edited}</p>
                                                <p>Eye Color: {character.eye_color}</p>
                                                <p>Hair Color: {character.hair_color}</p>
                                                <p>Skin Color: {character.skin_color}</p>
                                                <p>Mass: {character.mass}</p>
                                                <p>Height: {character.height}</p>
                                                </div>
                                                ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state,"list-state")
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, {})(CharacterList);