import React from "react";
import useFirestore from "./Hooks/useFirestore";
import {motion} from "framer-motion";

const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore("images");
  console.log("docs", docs);
  return (
    <div className="img-grid">
      {docs?.map(doc => (
        <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          whileHover={{opacity: 1}}
        >
          <motion.img
            src={doc.url}
            alt="not found in DB"
            onClick={() => {
              setSelectedImg(doc.url);
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
