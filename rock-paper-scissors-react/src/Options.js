import React from 'react';


const Options = ({ name, onClickOptions }) => {

    return (
        <div className="opt-btn">
            <button
                type="button"
                onClick={() => onClickOptions(name)}
            >
                {name}
            </button>
        </div>
    )
}
export default Options;