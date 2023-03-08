import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

function About() {
    
    // Navigation 이용해서 컴포넌트끼리 prop 주고받는 방법 (React-Router-Dom V6 이상)
    const location = useLocation();
    const props = location.state;
    console.log(props);
    console.log(props.fromNavigation);

    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>
                - George Orwell, 1984
            </span>
        </div>
    );
}
export default About;