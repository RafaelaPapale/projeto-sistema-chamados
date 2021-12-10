import { FiX } from 'react-icons/fi';

import './style.css';

export default function Item({ conteudo, close }) {
    return (
        <div className="item">
            <div className="container">
                <button className="close" onClick={ close }>
                    <FiX size={23} color="white" />
                    Voltar
                </button>

                <div>
                    <h2>Detalhes do chamado</h2>

                    <div className="row">
                        <span>Cliente: <i>{conteudo.cliente}</i></span>
                    </div>
                    <div className="row">
                        <span>Assunto: <i>{conteudo.assunto}</i></span>
                        <span>Cadastrado em: <i>{conteudo.createdFormated}</i></span>
                    </div>
                    <div className="row">
                        <span>
                            Status: <i style={{ color: "white", backgroundColor: conteudo.status === 'Aberto' ? '#5CB85C' : '#999' }}>{conteudo.status}</i>
                        </span>
                    </div>


                    {conteudo.complemento !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>{conteudo.complemento}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}