import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
// created by Sohel Rahaman (MERN Stack Developer)
export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode, setIsDarkMode } = useContext(MainContext);
  return (
    <>
      <div className="flex items-center justify-center mb-3 h-[57px]">
        <span className="mr-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          {isDarkMode ?  
          (
            <img
            src={require(`../assets/images/moon.gif`)}
            className="h-[auto] max-w-[50px] object-cover rounded-t-sm"
        />
          )
          :
          (
            <img
              src={require(`../assets/images/sun.png`)}
              className="h-[auto] max-w-[50px] object-cover rounded-t-sm"
            />
          )
           }

        </span>
        <button onClick={toggleDarkMode}>
          <div className="relative">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only"
              checked={isDarkMode}
              readOnly // Make the input read-only
              onChange={toggleDarkMode}
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                isDarkMode
                  ? "transform translate-x-full bg-blue-600"
                  : "bg-gray-300"
              }`}
            ></div>
          </div>
        </button>
        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          
        </span>
      </div>
    </>
  );
};
