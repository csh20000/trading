// uncommon, common, rare, legendary

const TransformColor = (rarity) => {
  if (rarity === 'Uncommon') {
    return '#03a9f4';
  }
  if (rarity === 'Rare') {
    return '#ff5722';
  }
  if (rarity === 'Legendary') {
    return '#8bc34a';
  }
  if (rarity === 'Common') {
    return '#e0e0e0';
  }
  return null;
};

export default TransformColor;
