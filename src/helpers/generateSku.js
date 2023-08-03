const sku = () => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sku = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sku += characters.charAt(randomIndex);
  }
  return sku;
};

module.exports = { sku };
