import { useState, useEffect, createContext } from "react";
import ClientUsers from '../services/user';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemUser');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                //console.log(storageUser);
            }
            setLoading(false);
        }

        loadStorage();
    }, [])

    async function signIn(email, password) {
        setLoadingAuth(true);

        const data = {
            email: email,
            senha: password
        }

        const auth = await ClientUsers.authUser(data);
        console.log(auth);
        if (auth.status === 200) {
            let result = {
                uid: auth.data.id,
                nome: auth.data.nome,
                email: auth.data.email,
            }

            setUser(result);
            storageUser(result);
            setLoadingAuth(false);

            toast.success('Bem vindo de volta!');
        } else {
            toast.error('Ops algo deu errado!');
            alert(auth)
            setLoadingAuth(false);
        }
    }

    async function signUp(email, password, nome) {
        setLoadingAuth(true);

        const data = {
            nome: nome,
            email: email,
            senha: password,
        }

        const create = await ClientUsers.createUser(data);
        //console.log(create);
        if (create.status === 200) {
            let result = {
                uid: create.data.id,
                nome: create.data.nome,
                email: create.data.email,
            }

            setUser(result);
            storageUser(result);
            setLoadingAuth(false);

            toast.success('Bem vindo a plataforma!');
        } else {
            toast.error('Ops algo deu errado!');
            alert(create)
            setLoadingAuth(false);
        }
    }

    function storageUser(data) {
        localStorage.setItem('SistemUser', JSON.stringify(data));
        //alert("CAIU AQUI")
    }

    async function signOut() {
        localStorage.removeItem('SistemUser');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signOut, signIn, loadingAuth, setUser, storageUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;