import React, { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ mainColor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? mainColor : "#fff" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        🔍
      </div>

      <input
        className={styles.input}
        onBlur={() => setFocused(false)}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onKeyUp={handleKeyUp}
        placeholder="digite o nome do produto"
        type="text"
        value={searchValue}
      />
    </div>
  );
};
