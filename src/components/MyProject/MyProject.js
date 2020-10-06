import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';

const MyProject = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
         fetch('http://localhost:5000/bookings?email='+loggedInUser.email)
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

            <h3>Your Booking List {bookings.length}</h3>
            {
                bookings.map(book => <li>{book.email}, {book.Organize} At {book.date}</li>)
            }
        </div>
    );
};

export default MyProject;