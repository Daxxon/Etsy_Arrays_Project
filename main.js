// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let priceSum = 0;
  let avgPrice = 0;
  for (let i=0; i<data.length; i++) {
    priceSum += data[i].price;
  }
  avgPrice = (Math.ceil((priceSum/data.length)*100)/100);
  console.log("The average price is $" + avgPrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceMin = 14;
  let priceMax = 18;
  let price14_18 = [];

  for (let i=0; i<data.length; i++) {
    if (data[i].price > priceMin && data[i].price < priceMax) {
      price14_18.push(data[i]);
    }
  }
  for (let i=0; i<price14_18.length; i++) {
    console.log(price14_18[i].title);
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let gbpItemsTitle = [];
  let gbpItemsPrice = [];

  for (let i=0; i<data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      gbpItemsTitle.push(data[i].title);
      gbpItemsPrice.push(data[i].price);
    }
  }
  for (let i=0; i<gbpItemsPrice.length; i++) {
    console.log(gbpItemsTitle[i] + " costs " + gbpItemsPrice[i] + " pounds.");
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let woodenItemsName = [];

  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].materials.length; j++) {
      if (data[i].materials[j] === 'wood') {
        woodenItemsName.push(data[i].title);
      }
    }
  }
  for (let i=0; i<woodenItemsName.length; i++) {
    console.log(woodenItemsName[i] + " is made of wood.");
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
//Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//- wall mount bottle opener
function question5 () {
  let eightMaterialItemsTitle = [];
  // console.log("created title array");
  let eightMaterialItemsMaterials = [];
  // console.log("created materials array");
  for (let i=0; i<data.length; i++) {
    if (data[i].materials.length > 7) {
      // console.log("found item made with more than 7 materials");
      eightMaterialItemsTitle.push(data[i].title);
      // console.log("pushed title of item to title array");
      let myMaterials = [];
      // console.log("reset my materials");
      for (let j=0; j<data[i].materials.length; j++) {
        myMaterials.push(data[i].materials[j]);
        // console.log("pushed materials into myMaterials array");
      }
      eightMaterialItemsMaterials.push(myMaterials);
      // console.log("pushed myMaterials into materials array index");
    }
  }
  for (let i=0; i<eightMaterialItemsTitle.length; i++) {
    console.log(eightMaterialItemsTitle[i] + " is made up of " + eightMaterialItemsMaterials[i].length + " materials:");
    for (let j=0; j<eightMaterialItemsMaterials[i].length; j++) {
      console.log("- " + eightMaterialItemsMaterials[i][j]);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let numOfItemsMadeBySeller = 0;
  for (let i=0; i<data.length; i++) {
    if (data[i].who_made === 'i_did') {
      numOfItemsMadeBySeller++;
    }
  }
  console.log(numOfItemsMadeBySeller + " items were made by their sellers.");
}
