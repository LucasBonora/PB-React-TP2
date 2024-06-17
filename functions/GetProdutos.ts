
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {Produto} from "@/objects/Produto";


export const getProdutos = async (): Promise<Produto[]> => {
    const querySnapshot = await getDocs(collection(db, "produtos"));
    const produtosList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Produto[];
    return produtosList;
};
