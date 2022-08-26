import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToclubehellfire(subscription) {
    const db = getFirestore(app)
    const ClubehellfireCollection = collection (db, 'Clube-hellfire')
    const docRef = await addDoc(ClubehellfireCollection, subscription)
    return docRef.id
}