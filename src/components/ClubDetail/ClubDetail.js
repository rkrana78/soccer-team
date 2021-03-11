import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png'
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const ClubDetail = () => {
    const { clubId } = useParams();
    const [teamDetails, setTeamDetails] = useState({});

    const { strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBadge, strDescriptionEN, strTwitter, strFacebook, strYoutube, strTeamBanner } = teamDetails;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [clubId])
    return (
        <div>
            <div>
                <div className="team-banner">
                    <img src={strTeamBanner} alt=""/>
                </div>
                <div className="team-badge">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>
            <div className="detail-container">
                <div className="card w-75 m-auto bg-info">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card-body text-light ">
                                <h3>{strTeam}</h3>
                                <br />
                                <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h6>
                                <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                                <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                                <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                            </div>
                        </div>
                        <div className="col-md-4 my-2 ml-4 gender-image">
                            <img src={strGender === "Male" ? maleImg : femaleImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="my-4 container text-light">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-icon">
                    <div className="row py-4">
                        <div className="col-md-2">
                            <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <div className="col-md-2">
                            <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div className="col-md-2">
                            <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer" style={{ color: "red" }}><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClubDetail;

