import React from 'react';

const SelectableButtons = ({ items, selectedButton, setSelectedButton }) => {
  // Function to handle button click
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className="flex space-x-2 ">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`px-3 border rounded-sm text-sm  ${
            selectedButton === index ? 'bg-[#62C3C6] text-white' : 'bg-[#D0EDEE] text-[#116A6C]'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SelectableButtons;
