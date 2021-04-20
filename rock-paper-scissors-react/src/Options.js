import React from 'react';


const Options = ({ name, id, onClickOptions }) => {

    return (
        <div className="opt-btn">
            <button
                id="id"
                type="button"
                onClick={() => onClickOptions(name)}
            >
                {name}
            </button>
        </div>
    )
}
export default Options;