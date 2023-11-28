import React, { useState, useEffect } from 'react';
import Card from '../cards';
import Styles from './styles.module.css'
import { ST } from 'next/dist/shared/lib/utils';

function MinhaComponente() {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await fetch('https://rickandmortyapi.com/api/character');
                const dadosJson = await resposta.json();
                setDados(dadosJson);
            } catch (erro) {
                console.error('Erro ao buscar dados:', erro);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={Styles.container}>
            <h1 >API do Mateus</h1>
            {dados ? (
                <div className={Styles.listCard}>
                    {dados.results.map((personagem) => (
                        <Card
                            id={personagem.id}
                            name={personagem.name}
                            image={personagem.image}
                            status={personagem.status}
                        />
                    ))}
                </div>
            ) : (
                <p>Carregando...</p>
            )
            }
        </div >
    );
}

export default MinhaComponente;