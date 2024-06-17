'use client'

import React, { useEffect, useState } from "react";
import {Produto} from "@/objects/Produto";
import {getProdutoById} from "@/functions/GetProdutoById";

const ProdutoDetalhes = ({ id }: { id: string }) => {
    const [produto, setProduto] = useState<Produto | null>(null);

    useEffect(() => {
        const fetchProduto = async () => {
            const produtoData: Produto | null = await getProdutoById(id);
            setProduto(produtoData);
        };

        fetchProduto();
    }, [id]);

    if (!produto) {
        return <div>Carregando...</div>;
    }
    return (
        <div>
            <h1>{produto.nome}</h1>
            <img src={produto.src.startsWith('/') ? produto.src : `/${produto.src}`} alt={produto.nome} />
            <p>{produto.descricao}</p>

        </div>
    );
};

export default ProdutoDetalhes;




