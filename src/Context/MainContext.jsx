import React, { createContext, useState } from 'react';

export const MainContext = createContext(); // Export the context

function MainContextProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode); // Added for convenience

    // Provide both state and the toggle function
    let contextValue = { isDarkMode, setIsDarkMode, toggleDarkMode };

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContextProvider;
