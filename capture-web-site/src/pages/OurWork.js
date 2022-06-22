import React from "react";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import gootimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OurWork = () => {
    return (
        <StyledWork>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete"></img>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={racer} alt="racer"></img>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={gootimes} alt="good times"></img>
                </Link>
            </Movie>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: .5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;