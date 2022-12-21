import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const CustomHook = () => {
  const [inputValue, setInputValue] = React.useState("");

  // const [localStorageKey, setLocalStorageKey] = React.useState(null);
  // const [localStorageValue, setLocalStorageValue] = React.useState(null);

  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "name",
    "default value"
  );

  // const handleGetLocalStorageValue = () => {
  //   const value = localStorage.getItem(localStorageKey);
  //   return value;
  // };

  const handleSetLocalStorageValue = () => {
    // localStorage.setItem(localStorageKey, inputValue);

    // setLocalStorageValue(inputValue);
    setLocalStorageValue(inputValue);
  };

  const handleAlertLocalStorageValue = () => {
    // const value = handleGetLocalStorageValue();
    alert(localStorageValue);
  };

  // useEffect(() => {
  //   const localStorageKeyName = "name";
  //   setLocalStorageKey(localStorageKeyName);

  //   const currentLocalStorageValue = localStorage.getItem(localStorageKeyName);
  //   setLocalStorageValue(currentLocalStorageValue);
  // }, []);

  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

  // * Extract the local-storage logic into a custom hook (useLocalStorage) so it can be reused in other components
  // - The hook should accept a key and return the value of that key from local storage
  // - The hook should also accept a value and set that value in local storage
  // - The hook should also accept a default value and return that value if the key is not found in local storage

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenge in the <code>pages/04-custom-hook.js</code> file.
        <br />
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>Name from local-storage</h2>

          {localStorageValue && <p>{localStorageValue}</p>}

          {!localStorageValue && <p>Nothing here yet</p>}
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          <button
            onClick={handleAlertLocalStorageValue}
            className={styles.actionButton}
            style={{ width: "100%" }}
          >
            Alert name from local storage
          </button>

          <div className={styles.divider} />

          <input
            className={todoStyles.input}
            type="text"
            placeholder="Add new name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className={styles.actionButton}
            style={{ width: "100%" }}
            onClick={handleSetLocalStorageValue}
          >
            Add name to local storage
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomHook;
