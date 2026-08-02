export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const generateId = () => Math.random().toString(36).substring(2, 9);
