import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function salvarInscricao(dados) {
  return await addDoc(collection(db, "inscricoes"), {
    ...dados,
    criadoEm: serverTimestamp(),
  });
}