import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
   
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeams(data.teams))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="set-background">
                <div className="team-container row m-auto">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;