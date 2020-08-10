import React, {useEffect} from "react";
import useStorage from "./Hooks/useStorage";
import {motion} from "framer-motion";

const ProgressBar = ({file, setfile}) => {
  // we receive the variable that we are returning and we are destructining them
  const {url, progress} = useStorage(file);
  useEffect(() => {
    url && setfile(null);
  }, [url, setfile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{width: 0}}
      animate={{width: progress + "%"}}
    ></motion.div>
  );
};

export default ProgressBar;
