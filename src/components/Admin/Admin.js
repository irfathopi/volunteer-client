import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';




const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
   },[])
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
                        <a href="#"><strong> {loggedInUser.name}</strong></a>
                    </li>
                     
                </ul>
            </nav>
            </div>
            <h3>Total People registration {bookings.length}</h3>
            {
                bookings.map(book => <li> {book.email}, {book.Organize} At {book.date}</li>)
            }
        </div>
    );
};

export default Admin;