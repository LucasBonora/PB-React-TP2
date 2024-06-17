
import { useState, useEffect } from "react";
import { getProdutos } from "@/functions/GetProdutos";
import Image from 'next/image';
import Link from 'next/link';
import {Produto} from "@/objects/Produto";


const FeedProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const produtosList = await getProdutos();
            setProdutos(produtosList);
        };

        fetchData();
    }, []);

    return (
        <div className="m-5 flex flex-col justify-center items-center">
            <div className="text-3xl flex justify-center mb-5">Escolha qual produto você deseja conferir o preço:</div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {produtos.map(({ id, nome, src, descricao}) => (
                    <div key={id} className="border-2 flex flex-col justify-center items-center p-5">
                        <Link href={`/${id}`} className="flex justify-center">
                            <Image
                                alt={nome}
                                src={src.startsWith('/') ? src : `/${src}`}
                                width={300}
                                height={300}
                                className="object-cover aspect-square border-2 shadow-black"
                            />
                        </Link>
                        <div className="mt-2">Nome: {nome}</div>
                        <div>Descrição: {descricao}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedProdutos;
