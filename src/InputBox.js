import React from 'react';
import './InputBox.css';
import { FaPaperPlane } from 'react-icons/fa';

const InputBox = () => {
  return (
    <div className="input-box">
      <input type="text" placeholder="Type your message..." />
      <button>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default InputBox;