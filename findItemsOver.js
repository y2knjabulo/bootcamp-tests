function findItemsOver(items, threshold) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].qty > threshold) {
        result.push(items[i]);
      }
    }
    return result;
  }
  