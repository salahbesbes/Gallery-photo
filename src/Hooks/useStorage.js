import {useState, useEffect} from "react";
import {projectstorage, projectfirestore, timestamp} from "../firebase/config";

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(
    () => {
      // refrences
      // we add a ref to this entity
      const storageRef = projectstorage.ref(file.name);
      // upload the file to storageRef   -> async
      storageRef.put(file).on(
        "state_changed",
        snap => {
          let percentage = Math.floor(
            (snap.bytesTransferred / snap.totalBytes) * 100
          );
          setProgress(percentage);
        },
        err => {
          console.log("err", err);
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
          // send the url to the database and create a timestamp on create
          const collectionRef = projectfirestore.collection("images");
          const createdAt = timestamp();
          collectionRef.add({
            url,
            createdAt,
          });
        }
      );
    },
    [file] // fire every time a new file is loaded
  );

  return {progress, url, error};
};

export default useStorage;
