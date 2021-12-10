import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

import avatar from '../../assets/avatar.png';
import './style.css';

export default function Header() {
    return (
        <div className="sidebar">
            <div>
                <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/dashboard">
                <FiHome color="white" size={24} />
                Chamados
            </Link>
            <Link to="/customers">
                <FiUser color="white" size={24} />
                Clientes
            </Link>
            <Link to="/profile">
                <FiSettings color="white" size={24} />
                Configurações
            </Link>
        </div>
    )
}