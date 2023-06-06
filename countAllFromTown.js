function countAllFromTown(registrationNumbers, town) {
    var regNumList = registrationNumbers.split(",");
    var count = 0;
    for (var i = 0; i < regNumList.length; i++) {
      var regNum = regNumList[i].trim();
      if (regNum.startsWith(town)) {
        count++;
      }
    }
    return count;
  }