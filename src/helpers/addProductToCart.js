function addProductToCart(infos) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  infos.amount += 1;
  if (cartItems) {
    const cartItem = cartItems.find((item) => item.id === infos.id);
    if (cartItem) {
      const arr = cartItems.map((item) => {
        const a = item.id === infos.id ? ({ ...item, amount: item.amount += 1 }) : item;
        return a;
      });
      localStorage.setItem('cartItems', JSON.stringify(arr));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, infos]));
    }
  } else {
    localStorage.setItem('cartItems', JSON.stringify([infos]));
  }
}

export default addProductToCart;
