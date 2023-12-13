import React from 'react'
import {useState} from 'react';

var initialState = {
    fname: "",
    lname: "",
    email: "",
    comments: ""
}
function Contact(){
    
    var [state, setState] = useState(initialState)

    function handleFormChange(e){
        var newValue = e.target.value;
        var name = e.target.name;

        setState({
            ...state,
            [name]: newValue
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(state)
    }

    return(
        <>
        <div className="bg-blue-800 h-screen">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className={'text-center text-white text-xl pt-4 pb-4'}>Contact Form</h1>
                </div>
           <div>
                <input 
                type="text" 
                name="fname" 
                placeholder="First Name"
                value={state.fname}
                onChange={handleFormChange}
                />
           </div>
           <div>
               <input 
               type="text"
               name="lname"
               placeholder="Last Name"
               value={state.lname}
               onChange={handleFormChange}
               />
           </div>
           <div>
               <input 
               type="email"
               name="email"
               placeholder="Email"
               value={state.email}
               onChange={handleFormChange}
               />
           </div>
           <div>
               <textarea
               name="comments"
               placeholder="What would you like to say?"
               value={state.comments}
               rows="10"
               cols="60"
               onChange={handleFormChange}
                />
           </div>
           <div>
               <input type="submit" name="submit" value="Submit" />
           </div>
        </form>
        </div>
        </div>
        </>
    );
}
export default Contact;