import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import {Produto} from "@/objects/Produto";



export const getProdutoById = async (id: string) => {
    const produtoRef = doc(db, 'produtos', id);
    const produtoSnap = await getDoc(produtoRef);

    if (produtoSnap.exists()) {
        const data = produtoSnap.data();

    if (
        data &&
        typeof data.nome === 'string' &&
        typeof data.src === 'string' &&
        typeof data.descricao === 'string' &&
        Array.isArray(data.precos) &&
        Array.isArray(data.fornecedores)
    ) {
        return {
            id: produtoSnap.id,
            nome: data.nome,
            src: data.src,
            descricao: data.descricao,
            precos: data.precos,
            fornecedores: data.fornecedores
        } as Produto; } else {
        console.log("Dados incompletos no documento!");
        return null;
    }
    }  else {
        throw new Error('Produto não encontrado');
    }
};

