import React from "react";


const Login = () => {


    const handleChange = () => {


    }

    const handleClick = () => {

    }


    return (
        <div>
            <h2>Login</h2>
            <form >
                <input onChange={()=>handleChange()} type="text" value="" placeholder="email"></input><br />
                <input onChange={()=>handleChange()} type="password" value="" placeholder="password"></input><br />
                <button onClick={()=>handleClick()}>Valider</button>
            </form>
        </div>
    )

}

export default Login