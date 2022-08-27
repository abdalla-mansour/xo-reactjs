import React from 'react';
import O from '../../assets/circle-o-svgrepo-com.svg';

const Oicon = ({color, size}) => {
    return (
        <div className={`icon ${color ? 'icon-' + color : 'icon-yellow'} ${size && 'icon-' + size}`}>
            <img src={O} alt='' />
        </div>
    )
}

export default Oicon;