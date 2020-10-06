import { Link } from 'react-router-dom';
import React from 'react';
import '../OrganizedProject/OrganizedProject.css'
import { Button } from '@material-ui/core';

const OrganizedProject = ({project}) => {
    return (

            <div className = "align">
                <img onClick="/form" className="hoverOver" style={{height:'300px', marginLeft:'70px'}} src={require(`../../images/${project.pic}`)} alt=""/>
                <h5>{project.name}</h5>
                {<Link to = {`/form`}><Button variant="contained" color="primary">Join Now</Button>{' '}</Link>}
                
            </div>

    );
};

export default OrganizedProject;