const getAllItems = () => {
  let itemJson = localStorage.getItem('Items');

  if(itemJson === 'null') {
      return []
  } else {
      itemJson = localStorage.getItem('Item');
      return itemAll = JSON.parse(itemJson);
  }
}

const findItem = (allItems, itemsDetails) => {
  const item = allItems.find(function (element){
      return element.name === itemDetails
  });

  return recipe
}


const addingAmount = () => {

  const amountField = document.getElementById("amount-txtfield")
  
  amountField.textContent ='';

amounts.array.forEach(element => {

  const amountItem = document.createElement("p");

  const checkbox = document.createElement('input');

  checkbox.setAttribute('type', 'checkbox');

  checkbox.classList.add('checkbox');

  checkbox.addEventListener('change', (e) => {

      element.completionStatus = e.target,checked

      saveItem(allItems)
  });

  amountItem.appendChild(checkbox);

  let itemName = document.createElement("SPAN")

  if(element.name.length === '') {
      itemName.textContent = 'Unnamed Ingredient'
  } else{
      itemName.textContent = element.name;
  }

  itemName.classList.add('text-element')
  ingredientItem.appendChild(itemName);

});
}

const renderItem =(item) => {
  const itemName = document.getElementById("item")
  const itemDescription = document.getElementById("description")

  itemName.value =item.name;
  itemDescription.value = recipe.ingredients

  renderAmount(recipe.amounts);
}

const calculateCompletionStatus = (recipe) => {
  let count = 0

  let numberofAmounts = recipe.amount.length
  console.log(numberofAmounts);

  recipe.amounts.forEach( (amount) =>{
      
      if(amount.completionStatus === true){
          count++
      }
  })

  if(count === 0) {
      return 'You have <span> none </span> of the amounts'
  } else if (count === numberofAmounts){
      return 'you have <span>all</span> of the amounts'
  } else {
      return 'you have <span>Some</span> of the amounts'
  }
}

const loadMainPage = () =>{

  const itemFromStorage = getAllItems();
  if(recipeFromStorage.length === 0){
     let recipeDiv =document.getElementById("items-div").value;
     let titleParagraph = document.createElement('h2');
     titleParagraph.innerHTML ="No item added"
     recipeDiv.appendChild(titleParagraph) 

  } else{
      Array.from(itemFromStorage).forEach(element => {
          console.log(element)
      })
  }

}

const filterItem = (allRecipes, filter)=> {
  return filteredArray =Object.values(allItems).filter((recipe) => {

      if(typeof item.name ===''){
          const results = item.name.toLowerCase().include()
      }
  })
}

const renderFilterdRecupes =(filterItem) =>{

let renderDiv = document.getElementById("item-div");
recipeDiv.textContent = ''
filterRecipe.forEach(renderMainPageItems);

}

const renderMainPageItems = (item) => {
  let recipeDiv = document.getElementById("item-div");
  let titleParagraph = document.createElement("h4")
  let summaryParagraph =document.createElement("H5")
  let itemBox = document.createElement('a')

  titleParagraph.textContent = item.name
  titleParagraph.classList.add('list-item')
}