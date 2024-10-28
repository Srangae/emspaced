'use client'
// context/MetadataContext.js
import { createContext, useContext, useState } from 'react';

// Create the MetadataContext
const MetadataContext = createContext(null);

// Create the MetadataProvider component
export const MetadataProvider = ({ children }) => {
    const [metadata, setMetadata] = useState({
        title: 'Default Title',
        description: 'Default description',
    });

    return (
        <MetadataContext.Provider value={{ metadata, setMetadata }}>
            {children}
        </MetadataContext.Provider>
    );
};

// Custom hook to use the MetadataContext
export const useMetadata = () => {
    const context = useContext(MetadataContext);
    if (!context) {
        throw new Error('useMetadata must be used within a MetadataProvider');
    }
    return context;
};
