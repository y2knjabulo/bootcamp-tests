function findItemsOver20(higherthan) {
    const result = [];
    for (let i = 0; i < higherthan.length; i++) {
      if (higherthan[i].qty > 20) {
    result.push(higherthan[i]);
      }
    }
    return result;
  }
  