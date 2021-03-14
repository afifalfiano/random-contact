import React from 'react';


const Contact = ({avatar, name, email, phone, location}) => {

    return (
        <div className="contact">
            <img src={avatar.large} alt={name.first} className="ava"/>
            <div className="property">
                <p className="text">Name: {`${name.first} ${name.last}`}</p>
                <p className="text">Email: {email}</p>
                <p className="text">Phone: {phone}</p>
                <p className="text">Location: {`${location.city} - ${location.country}`}</p>
            </div>
        </div>
    )
}

export default Contact;