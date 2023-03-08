import React from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {
    
    const props = useLocation().state;
    console.log(props);
    
    return(
        <h1>hello</h1>
    );
}

export default Detail;