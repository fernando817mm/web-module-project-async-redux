import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions';

const Dog = (props) => {

    useEffect(() => {
        props.getDogs();
    }, []);

    const handleClick = () => {
        props.getDogs();
    }

    return (
        <div>
            <h1>Random Dog Images</h1>
            <button onClick={handleClick}>Get another dog!</button>
            {
                <div>
                    <img src={props.dogs} alt={props.dogs} width={600}/>
                </div>
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