import { db } from "../utils/firebaseConfig"
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"; 

export const fetchData = async (idCat) => {
    let q
    if(idCat){
         q = query(collection( db, "products"), where( 'categoriaId', '==', parseInt(idCat)))
    } else{
         q = query(collection( db, "products"))
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map( doc => ({
        id: doc.id,
        ...doc.data()
    }))
};

export const firestoreFetchItem = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return {
        id: idItem,
        ...docSnap.data() 
    }

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}