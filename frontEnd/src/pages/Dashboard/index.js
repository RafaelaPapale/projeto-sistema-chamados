import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import ClientChamados from '../../services/chamados';
import Item from '../../components/Item';
import Title from '../../components/Title';
import Header from '../../components/Header';

import './style.css';

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [lastDocs, setLastDocs] = useState();
    const [showItem, setShowItem] = useState(false);
    const [detail, setDetail] = useState();

    useEffect(() => {
        async function loadChamados() {
            const data = {
                userId: user.uid,
            }

            const listChamados = await ClientChamados.listByUser(data);

            if (listChamados.status === 200) {
                updateState(listChamados);
            }
            else {
                setLoadingMore(false);
            }
            setLoading(false);
        }

        loadChamados();

        return;
    }, [])

    async function updateState(list) {
        const isCollectionEmpty = list.data.length === 0;

        if (!isCollectionEmpty) {
            let lista = [];

            list.data.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    assunto: doc.assunto,
                    cliente: doc.cliente,
                    clienteId: doc.clienteId,
                    created: doc.created,
                    status: doc.status,
                    complemento: doc.complemento
                })
            })

            setChamados(chamados => [...chamados, ...lista]);
        }
        else {
            setIsEmpty(true);
        }
        setLoadingMore(false);
    }

    function toggleSearch(item) {
        setShowItem(!showItem);
        setDetail(item);
    }

    if (loading) {
        <div>
            <Header />
            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25} />
                </Title>

                <div className="container dashboard">
                    <span>Buscando chamados...</span>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                        <span>Nenhum chamado registrado</span>

                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white" />
                            Novo chamado
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white" />
                            Novo chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Cadastrado em</th>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label="Cliente">{item.cliente}</td>
                                            <td data-label="Assunto">{item.assunto}</td>
                                            <td data-label="Status">
                                                <span className="badge" style={{ backgroundColor: item.status === 'Aberto' ? '#5CB85C' : '#999' }}>{item.status}</span>
                                            </td>
                                            <td data-label="Cadastrado">{item.created}</td>
                                            <td data-label="#">
                                                <button className="action" style={{ backgroundColor: "#3583F6" }} onClick={() => toggleSearch(item)}>
                                                    <FiSearch color="white" size={17} />
                                                </button>

                                                <Link className="action" style={{ backgroundColor: "#F6A935" }} to={`new/${item.id}`}>
                                                    <FiEdit color="white" size={17} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            {showItem && (
                <Item conteudo={detail} close={toggleSearch} />
            )}
        </div>
    );
}