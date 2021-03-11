import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const{strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const history =useHistory();
    
    const handleClick = (clubId) => {
        const url = `/club/${clubId}`;
        history.push(url);
    }
    return (
        <div className="col-md-4">
            
            <div className="team-detail">
                <img src={strTeamBadge} alt=""/>
                <h4>{strTeam}</h4>
                <p>Sports Type: {strSport}</p>
                <button className="main-button" onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            
        </div>
    );
};

export default Team;