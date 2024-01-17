import { useState, useRef, useEffect } from "react";
import JohnImage from "./John.png";

const ChipInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const inputRef = useRef(null);

  const items = [
    {
      username: "John Doe",
      email: "john.doe@example.com",
      profilePic: JohnImage,
    },
    {
      username: "Jane Smith",
      email: "jane.smith@example.com",
      profilePic: JohnImage,
    },
    {
      username: "Bob Johnson",
      email: "bob.johnson@example.com",
      profilePic: JohnImage,
    },
    {
      username: "Alice Brown",
      email: "alice.brown@example.com",
      profilePic: JohnImage,
    },
    {
      username: "Nick Giannopoulos",
      email: "nick.g@example.com",
      profilePic: JohnImage,
    },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredItems([]);
    } else {
      const filtered = items.filter(
        (item) =>
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item) => {
    setChips([...chips, item.username]);
    setFilteredItems(
      filteredItems.filter((filteredItem) => filteredItem !== item)
    );
    setInputValue("");
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setFilteredItems([
      ...filteredItems,
      items.find((item) => item.username === chip),
    ]);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      const chipsContainer = inputRef.current.parentNode;
      const lastChip = chipsContainer.lastChild.querySelector(".chip");
      if (lastChip) {
        lastChip.classList.add("highlighted");
      }

      handleChipRemove(chips[chips.length - 1]);
    }
  };

  useEffect(() => {
    const chipsContainer = inputRef.current.parentNode;
    const lastChip = chipsContainer.lastChild.querySelector(".chip");
    if (lastChip) {
      lastChip.classList.remove("highlighted");
    }
  }, [inputValue]);

  return (
    <div className="w-full sm:w-96 mx-auto">
      <div className="flex flex-wrap gap-4 border border-gray-300 p-4 cursor-text items-center">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="bg-yellow-500 text-white p-2 m-2 rounded flex items-center"
          >
            <img
              src={items.find((item) => item.username === chip)?.profilePic}
              alt={`${chip}'s profile`}
              className="w-8 h-8 rounded-full mr-2"
            />
            {chip}
            <span
              onClick={() => handleChipRemove(chip)}
              className="ml-2 cursor-pointer"
            >
              X
            </span>
          </div>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder=" Add new user"
          className="flex-1 border-none focus:outline-none px-2"
        />
      </div>
      <ul className="list-none p-0 m-0">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer p-4 border-b border-gray-300 hover:bg-gray-100"
          >
            <img
              src={item.profilePic}
              alt={`${item.username}'s profile`}
              className="w-8 h-8 rounded-full mr-2"
            />
            {item.username} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipInput;
