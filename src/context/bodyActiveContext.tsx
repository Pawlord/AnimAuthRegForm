import React from 'react';

type Props = {
    children: React.ReactNode
}

export const BodyActiveContext = React.createContext({
    isActive: false,
    setIsActive: (active: boolean) => { },
    onClickToggleBodyActive: () => { },
});

export function BodyActiveContextProvider({ children }: Props) {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const onClickToggleBodyActive = () => {
        setIsActive(prevState => !prevState);
    }

    return (
        <BodyActiveContext.Provider value={{ isActive, setIsActive, onClickToggleBodyActive }}>
            {children}
        </BodyActiveContext.Provider>
    )
}