import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {saveHobby} from '../../State/Action';

function HobbyHooks() {

    let [name, setName] = useState("");
    let dispatchToSaveHobby = useDispatch();

    let captureValueFromTextBoxes = (evt) => {
        name = evt.target.value;
        setName(name);
    }

    let saveHobbyOnClick = () => {
        let hobby = {name};
        dispatchToSaveHobby(saveHobby(hobby));
    }

    return (
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Hobby</b>
                    <input type="text" className="form-control col-md-6 pname" value={name} placeholder="hobby name"
                        onChange={captureValueFromTextBoxes} />
                </div>
                <input type="button" className={"btn btn-primary col-md-3"} value={"Save"} onClick={saveHobbyOnClick} />
            </div>
        </section>
    )
}

export default HobbyHooks;