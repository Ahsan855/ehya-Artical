import { useEffect, useRef, useState } from "react";

const SuggestionInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // New state to track visibility
  const suggestionList = [
    "Articles",
    "Suggestions",
    "Experince",
    "Interface",
    "comments",
  ];
  const inputRef = useRef(null); // Ref for the input element

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = suggestionList.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true); // Show suggestions when typing
  };

  // Add an event listener to handle clicks outside the input
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setShowSuggestions(false); // Hide suggestions when a suggestion is clicked
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        className="border text-primary border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 input input-bordered hover:border-blue-300 text-[16px] font-bold w-full pl-12 italic leading-[21.79px] "
        placeholder="Search article"
        value={inputValue}
        onChange={handleInputChange}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border p-2 mt-2 shadow rounded w-full">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SuggestionInput;
