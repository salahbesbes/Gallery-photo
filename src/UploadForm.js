import React, {useState} from "react";
import ProgressBar from './ProgressBar'
const UploadForm = () => {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

  const types = ["image/png", "image/jpeg","image/jpg"];

  const changehandler = e => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setfile(selected);
      seterror(null);
    } else {
      setfile(null);
      seterror("please verify type must be png or jpeg");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changehandler} />
        <span>+</span>
      </label>
      <div className="coutput">
        {error && <div className="error"> {error} </div>}
        {file && <div className="error"> {file.name} </div>}
        {file && <ProgressBar file={ file } setfile={ setfile }/>  }
        
      </div>
    </form>
  );
};

export default UploadForm;
