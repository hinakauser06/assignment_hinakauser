import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon

const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-2  text-gray-700 rounded-lg"
    >
      <FontAwesomeIcon icon={faTimes} className=" px-1 text-cyan-400" /> {/* Add the cross icon */}
      alle Filter zurucksetzen 
    </button>
  );
};

export default ResetButton;
