export const getCoffee = async (url) => {
    const res = await fetch(
      url
    );
    return res.json();
  };