import { FiSettings, FiUpload } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user';

import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';

import './style.css';

export default function Profile() {
    const { user, signOut, setUser, storageUser } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);

    async function handleSave(e) {
        e.preventDefault();
        
        const data = {
            nome: nome,
            email: email,
            id: user.uid,
        }

        const update = await ClientUsers.updateUser(data);
        console.log(update);
        if (update.status === 200) {
            setUser(update.data);
            storageUser(update.data);
            toast.success('Usuário atualizado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>E-mail</label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>

                <div className="container">
                    <button className="logout" onClick={() => signOut()}>Sair</button>
                </div>
            </div>
        </div>
    )
}