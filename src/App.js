import React, {useState} from "react";
import "./App.css";
import UploadForm from "./UploadForm";
import Title from "./Title";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function App() {
  // this value is updated on click on an img and we pass the selectedImg to the madal
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
