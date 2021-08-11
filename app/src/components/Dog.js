import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions';
import styled from 'styled-components';

const ImgContainer = styled.div`
    width: 100%;
    margin-top: 5%;
    max-height: 100vh;

    & img{
        border-radius: 5px;
        border: solid lightskyblue 10px;
    }
`

const Button = styled.button`
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid black;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: black;
    background-color: white;
    font-size: 1.5rem;
    text-align: center;
    transition: all 0.2s;

    &:hover{
        color: white;
        background-color: black;
    }
`

const Dog = (props) => {

    useEffect(() => {
        props.getDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        props.getDogs();
    }

    return (
        <div>
            <h1>Random Dog Images</h1>
            <Button onClick={handleClick}>Get another dog!</Button>
            {
                <ImgContainer>
                    <img src={props.dogs} alt={props.dogs} width={600}/>
                </ImgContainer>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs
    }
}

export default connect(mapStateToProps, { getDogs })(Dog);