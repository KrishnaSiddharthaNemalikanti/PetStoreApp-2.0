import React from 'react';

export const PetAppContext = React.createContext(null);

export let reducer = (state, action) => {
    switch (action.type) {
        case "set-location":
            return { ...state, location: action.location };
        case "set-animal":
            return { ...state, animal: action.animal };
        case "set-breed":
            return { ...state, breed: action.breed };
        case "set-age":
            return { ...state, age: action.age };
        default:
            return initialState;
    }
};

let initialState = {
    location: 95050,
    animal: "DOG",
    breed: "LABRADOR",
    age: 5
};
export function PetAppContextProvider(props) {

    let [state, dispatch] = React.useReducer(reducer, initialState);

    const value = React.useMemo(
        () => (
            {
            state,
            dispatch
        }),
        [state]
    )
    return (
        <PetAppContext.Provider value={value}>{props.children}</PetAppContext.Provider>
);
}