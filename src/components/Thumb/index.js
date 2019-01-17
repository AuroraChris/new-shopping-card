import React from 'react';

const Thumb = (props) => {
    return (
        <div className={props.classes}>
            <img src={props.src} />
        </div>
    )
}

export default Thumb;