import logo from '../assets/pg-logo.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate('/home'); 
    };

    const handleLoginClick = () => {
        navigate('/'); 
    };

    return (

        <div className="login-container h-screen bg-primary-color flex flex-col justify-center items-center text-text-color">
            <img src={logo} alt="Logo" className="logo w-24 mb-16" />

            <form onSubmit={handleRegisterSubmit} className="login-form flex flex-col w-full max-w-xs">
                <input type="text" placeholder="Nome de usuário" className="input-field p-2.5 mb-2.5 border border-light-color rounded font-medium text-base" />
                <input type="email" placeholder="Email" className="input-field p-2.5 mb-2.5 border border-light-color rounded font-medium text-base" />
                <input type="password" placeholder="Senha" className="input-field p-2.5 mb-2.5 border border-light-color rounded font-medium text-base" />
                <input type="password" placeholder="Confirmar senha" className="input-field p-2.5 mb-2.5 border border-light-color rounded font-medium text-base" />
                <button type="submit" className="submit-button p-2.5 bg-secondary-color text-light-color rounded font-medium text-base cursor-pointer hover:bg-dark-secondary-color">
                    Registrar
                </button>
            </form>

            <div className='flex flex-row mt-2 items-center'>
                <p className="text-light-color">Já tem login? </p>
                <button className="register-button text-light-color border-none cursor-pointer mx-2 hover:text-secondary-color hover:bg-primary-color"
                onClick={handleLoginClick}>
                Login
                </button>
            </div>
            
        </div>
    );

}