function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    for (let sale of salesData) {
      if (departmentSales[sale.department] === undefined) {
        departmentSales[sale.department] = sale.sales;
      } else {
        departmentSales[sale.department] += sale.sales;
      }
    }
    let mostProfitable = '';
    let highestSales = 0;
    for (let department in departmentSales) {
      if (departmentSales[department] > highestSales) {
        mostProfitable = department;
        highestSales = departmentSales[department];
      }
    }
    return mostProfitable;
  }
  

  function mostProfitableDay(salesData) {
    let daySales = {};
    for (let sale of salesData) {
      if (daySales[sale.day] === undefined) {
        daySales[sale.day] = sale.sales;
      } else {
        daySales[sale.day] += sale.sales;
      }
    }
    let mostProfitable = '';
    let highestSales = 0;
    for (let day in daySales) {
      if (daySales[day] > highestSales) {
        mostProfitable = day;
        highestSales = daySales[day];
      }
    }
    return mostProfitable;
  }
   