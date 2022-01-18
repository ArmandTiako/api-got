import React , {useState, useEffect} from 'react'

const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        // Storing the user in localStorage
        localStorage.setItem("user" , JSON.stringify(user))
    }, [user])

    const handleClick = (e) => {
        e.preventDefault()
        setUser({
            email: '',
            password: ''
        })
    }


    return (
        <div className="formRegister">
            <h2>Register</h2>
            
                <form >
                    <fieldset>
                        <label>     
                            <p>Email</p>
                            <input 
                            type="text" 
                            value={user.email} 
                            onChange={(e) => setUser({...user, 
                                email: e.target.value
                            })}
                            placeholder='Enter your @ email'
                            />
                        </label>
                        <label>
                            <p>Password</p>
                                <input 
                                type="password" 
                                value={user.password} 
                                onChange={(e) => setUser({...user, 
                                    password: e.target.value
                                })}
                                placeholder='Enter your password'
                                />
                        </label>
                        <br />
                        <br />
                        <button onClick={handleClick}>Valider</button>

                    </fieldset>
                </form>
           
        </div>
    )
}

export default Register
