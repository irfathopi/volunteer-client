import React, { useContext, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import '../../components/Form/Form.css';
import 'date-fns';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-bootstrap';



   

const Form = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const volunteerProfile = {...data};
        fetch('http://localhost:5000/addProject',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerProfile)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New Profile successfully added!');
            }
        })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <img className="formLogo" src={logo} alt=""/>
            <div className = "LoginCard" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                <Card style={{ width: '22rem', border:'1px solid gray' }} >
                    <Card.Body>
                        <form onSubmit={handleSubmit(onSubmit)} className = "formField" method="POST" action="/contact" >
                            <input ref={register({ required: true })} defaultValue={loggedInUser.name} type="text" placeholder="Full Name" name="name" />
                            <br></br>
                            <input ref={register({ required: true })} defaultValue={loggedInUser.email}  type="email" placeholder="email" name="email" />
                            <br></br>
                            <input ref={register({ required: true })} type="date" name="date" />
                            <br></br>
                            <input ref={register({ required: true })}  type="text" placeholder="discription" name="discription"/>
                            <br></br>
                            <input  ref={register({ required: true })} type="text" placeholder="Organize" name="Organize" require/>
                            <br></br>
                            <button variant="contained" color="primary">Submit</button>
                            <br></br>
                            {<Link to = {`/myproject`} ><button>See Your activites</button></Link>}
                        </form>
                        
                    </Card.Body>
                    
                </Card>
                
            </div>
        </div>
    );
};

export default Form;
