export const FormatId = (id) => {
    return String(id).padStart(3, '0');
};

export const CapitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};