function countAllPaarl(registrationNumbers) {
    var regNumList = registrationNumbers.split(",");
    var count = 0;
    for (var i = 0; i < regNumList.length; i++) {
      var regNum = regNumList[i].trim();
      if (regNum.startsWith("CJ")) {
        count++;
      }
    }
    return count;
  }