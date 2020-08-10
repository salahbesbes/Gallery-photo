import {useState, useEffect} from "react";
import {projectfirestore} from "../firebase/config";

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    // get the collection
    const unsub = projectfirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      // on every change occure in this method a callback is fired
      // real time listning on the database
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub(); // -> execute unsub() when collection will update  or unmount
  }, [collection]);
  return {docs};
};

export default useFirestore;
