import React from 'react';
import logo from '../../logos/Group 1329.png';
import './Menu.css';
import Button from '@material-ui/core/Button';
import { FormControl,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Menu = () => {
    return (
        <div>
            <div>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
        
                    <li>
                       <a href="">News</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Events</a>
                    </li>
                    <li>
                        <Button variant="contained" color="primary">registration</Button>
                    </li>
                    <li>
                      {<Link to = {`/admin`}><Button variant="contained" color="primary">Admin</Button></Link>}
                    </li>
                    
                </ul>
            </nav>

            </div>
            <h2>A GROW BY HEALPING PROPLE IN NEED.</h2>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Form>
        </div>
    );
};

export default Menu;