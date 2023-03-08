import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    let title = "";
    
    useEffect(() => {
        console.log(location);

        if (location.state === null || location.state === undefined) {
            navigate("/");
        } else {
            title = location.state.title;
        }
    }, []);
    
    return(
        <h1>{title}</h1>
    );
}

export default Detail;