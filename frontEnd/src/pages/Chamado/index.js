import { FiPlusCircle } from 'react-icons/fi';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

import ClientCustomers from '../../services/customers';
import ClientChamados from '../../services/chamados';
import Header from '../../components/Header';
import Title from '../../components/Title';

import './style.css';

export default function Chamado() {
    const { id } = useParams();
    const history = useHistory();

    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const [idCustomer, setIdCustomer] = useState(false);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function loadCustomers() {
            const listCustomers = await ClientCustomers.listCustomers();

            if (listCustomers.status === 200) {
                let lista = [];

                listCustomers.data.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.nomeFantasia
                    })

                    if (lista.length === 0) {
                        console.log("Nenhuma empresa encontrada");
                        setLoadCustomers(false);
                        setCustomers([{ id: 1, nomeFantasia: '' }])
                        return;
                    }

                    setCustomers(lista);
                    setLoadCustomers(false);

                    if (id) {
                        loadId(lista);
                    }
                })
            }
            else {
                setLoadCustomers(false);
                setCustomers([{ id: 1, nomeFantasia: '' }])
            }
        }

        async function loadId(lista) {
            const data = {
                id: id,
            };

            const findChamados = await ClientChamados.listById(data);

            if (findChamados.status === 200) {
                setAssunto(findChamados.data.assunto);
                setStatus(findChamados.data.status);
                setComplemento(findChamados.data.complemento);

                let index = lista.findIndex(item => item.id === findChamados.data.clientId);

                setCustomerSelected(index);
                setIdCustomer(true);
            }
            else {
                toast.error("Esse chamado não existe! Tente novamente!");
                history.push('/dashboard');
                setIdCustomer(false);
            }
        }

        loadCustomers();
    }, [id]);

    async function handleRegister(e) {
        e.preventDefault();
        if (idCustomer) {
            const data = {
                id: id,
                cliente: customers[customerSelected].nomeFantasia,
                clientId: customers[customerSelected].id,
                assunto: assunto,
                status: status,
                complemento: complemento,
                userId: user.uid,
            };

            const updateChamado = await ClientChamados.updateChamado(data);

            if (updateChamado.status === 200) {
                setComplemento('');
                setCustomerSelected(0);
                history.push('/dashboard');
                toast.success("Chamado editado com sucesso!");
            }
            else {
                toast.error("Ops! Erro ao editar chamado!");
            }
            return;
        }

        const data = {
            created: JSON.stringify(new Date()),
            cliente: customers[customerSelected].nomeFantasia,
            clientId: customers[customerSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid,
        };

        const createChamado = await ClientChamados.createChamado(data);

        if(createChamado.status === 200){
            toast.success("Chamado registrado com sucesso!");
                setComplemento('');
                setCustomerSelected(0);
        }
        else {
            toast.error("Ops! Erro ao registrar chamado!");
        }
    }

    function handleChangeSelect(e) {
        e.preventDefault();
        setAssunto(e.target.value)
    }

    function handleOptionChange(e) {
        e.preventDefault();
        setStatus(e.target.value)
    }

    function handleChangeCustomers(e) {
        e.preventDefault();
        console.log("handle change customer:", e.target.value);
        setCustomerSelected(e.target.value);
    }

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Cliente</label>

                        {loadCustomers ? (
                            <input type="text" disabled={true} value="Carregando clientes..." />
                        ) : (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return (
                                        <option key={item.id} value={index}>
                                            {item.nomeFantasia}
                                        </option>
                                    )
                                })}
                            </select>
                        )}

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Técnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto" onChange={handleOptionChange} checked={status === 'Aberto'} />
                            <span>Em aberto</span>

                            <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={status === 'Progresso'} />
                            <span>Em progresso</span>

                            <input type="radio" name="radio" value="Atendido" onChange={handleOptionChange} checked={status === 'Atendido'} />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea type="text" placeholder="Descreva seu problema (opcional)" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}