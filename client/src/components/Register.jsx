import React , {useState, useEffect} from 'react';
import './../styles/RegisterForm.css';

const Register = () => {
    //const [users, setUsers] = useState();
    
    const [values, setValues] = useState({
        username:'',
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setErrors(validateForm(values));
        setIsSubmit(true);
    }

    const validateForm = (values) => {
        let errors = {};

        if(!values.username.trim()) {
            errors.username = "Nom d'utilisateur requis";
        }

        if(!values.email) {
            errors.email = "Email requis"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Veuillez saisir une adresse mail valide";
        }

        if(!values.password) {
            errors.password = "Mot de passe requis";
        }

        return errors; 
    }

    /*const getFormValuesFromLS = () => {
        const storedValues = localStorage.getItem("users");
        console.log(storedValues);
        if (!storedValues) {
            return []
        }
        return JSON.parse(storedValues);
    }
  
    useEffect(() => {
        // Storing the user in localStorage
        localStorage.setItem("values" , JSON.stringify(values))
    }, [values]);*/

    return (
        <div className="formRegister">
            <form onSubmit={handleClick}>
                <h2>Register</h2>
                <div className="content-form">
                    <label htmlFor="username" className="label-form">     
                        Nom d'utilisateur    
                    </label>
                    <input
                        id="username"
                        className="input-form"
                        type="text"
                        name="username" 
                        value={values.username} 
                        onChange={handleChange}
                        placeholder="Entrer votre nom d'utilisateur"
                        required
                    />
                </div>
                {errors.username && <p className="error">{errors.username}</p>}
                <div className="content-form">
                    <label htmlFor="email" className="label-form">     
                        Adresse mail    
                    </label>
                    <input
                        id="email"
                        className="input-form"
                        type="email"
                        name="email" 
                        value={values.email} 
                        onChange={handleChange}
                        placeholder="Entrer votre @ mail"
                        required
                    />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
                <div className="content-form">
                    <label htmlFor="password" className="label-form">     
                        Mot de Passe    
                    </label>
                    <input
                        id="password"
                        className="input-form"
                        type="password"
                        name="password" 
                        value={values.password} 
                        onChange={handleChange}
                        placeholder="Entrer votre mot de passe"
                        required
                    />
                </div>
                {errors.password && <p className="error">{errors.password}</p>}
                <button className='submit-btn' type='submit'>
                    Valider
                </button>
            </form>
        </div>
    )
}

export default Register
