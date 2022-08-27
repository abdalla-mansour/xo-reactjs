import React from 'react';
import X from '../../assets/x-svgrepo-com.svg';

const Xicon = ({color, size}) => {
    return (
        <div className={`icon ${color ? 'icon-' + color : 'icon-blue'} ${size && 'icon-' + size}`}>
            <img src={X} alt='' />
        </div>
    )
}

export default Xicon;