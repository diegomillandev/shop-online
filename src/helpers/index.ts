export const cutString = (str: string, maxLength: number, title?: string) => {
    const lengthTitle = title?.length;
    if (lengthTitle! > 38) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str.slice(0, maxLength + 20);
    }
};

export const procentajeRamdom = () => {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
};
