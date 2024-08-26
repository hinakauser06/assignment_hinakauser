import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Checklist({ title, items, selectedItems, setSelectedItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleChecklist = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowMore(false); // Hide more items when checklist is closed
    }
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Number of items to show initially
  const initialItemCount = 5;
  const displayedItems = showMore ? items : items.slice(0, initialItemCount);

  return (
    <div className="border-b border-gray-200 px-4 py-2">
      <button
        onClick={toggleChecklist}
        className="flex gap-3 justify-end items-center w-full py-2 text-gray-700 font-semibold focus:outline-none"
      >
        <span className='text-center text-[#116a6c] pe-9'>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transition-transform duration-300 text-[#29aaae] transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className="py-2">
          {displayedItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                className="form-checkbox "
              />
              <span className="text-[#126063] font-normal">{item}</span>
            </div>
          ))}
          {!showMore && items.length > initialItemCount && (
            <button
              onClick={handleShowMore}
              className="mt-4 flex items-center justify-center w-full text-sm border-2 border-yellow-100 text-teal-700 
              rounded-tl-3xl rounded-br-3xl"
            >
              mehr anzeigen 
            </button>
          )}
          {showMore && (
            <button
              onClick={() => setShowMore(false)}
              className="mt-4 flex items-center justify-center w-full text-sm border-2 border-yellow-100 text-teal-700 
              rounded-tl-3xl rounded-br-3xl"
            >
              weniger anzeigen 
            </button>
          )}
        </div>
      )}
    </div>
  );
}
