export const toCapitilize = (value?: string) => {
    if (value) {
      const result = value.charAt(0).toUpperCase() + value.slice(1);
      return result;
    }
  };