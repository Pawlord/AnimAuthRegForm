import React from 'react';

export const BodyActiveContext = React.createContext({
    isActive: false,
    setIsActive: (active) => { },
    onClickToggleBodyActive: () => { },
});

export function BodyActiveContextProvider({ children }) {
    const [isActive, setIsActive] = React.useState(false);

    const onClickToggleBodyActive = () => {
        setIsActive(prevState => !prevState);
        document.body.classList.toggle('active')
    }

    return (
        <BodyActiveContext.Provider value={{ isActive, setIsActive, onClickToggleBodyActive }}>
            {children}
        </BodyActiveContext.Provider>
    )
}