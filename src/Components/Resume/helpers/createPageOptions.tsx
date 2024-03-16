import React from 'react';

export const createPageOptions = (quantity: number) => {
    const optionsArray: any[] = [];
    for (let i = 1; i <= quantity; i++) {
        optionsArray.push(<option key={i} value={i}>{i}</option>);
    }
    return optionsArray;
};