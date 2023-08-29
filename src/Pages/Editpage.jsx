import React, { createRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../Components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  const memeref = createRef();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="meme mt-5 mb-5" ref={memeref}>
        <img
          src={params.get("url")}
          style={{ width: '400px', height: '500px' }}
          alt="memeimg"
        />
        {Array(count).fill(0).map((item) => (
          <Text key={item} />
        ))}
      </div>
      <div className="d-flex">
        <button
          onClick={addText}
          className="btn btn-primary m-2 p-2"
        >
          Add Text
        </button>
        <button
          onClick={(e) => exportComponentAsJPEG(memeref)}
          className="btn btn-success m-2 p-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editpage;
