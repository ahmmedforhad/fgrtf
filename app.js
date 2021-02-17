const searchFood = () => {

  const searchText = document.getElementById('search').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayFoodItems(data.meals))
    .catch(error => displayError('No items matched!! Please put a specific name or a letter!'));
}
const displayFoodItems = meals => {
  const searchField = document.getElementById('search').value;
  if (searchField === '') {
    alert('Input text in search field')

  }
  else {
    const mealContainer = document.getElementById('meals');
    mealContainer.innerHTML = '',
      meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        const newId=meal.idMeal
        mealDiv.innerHTML = `
        <h1 id="ingredient">${meal.strMeal}</h1>
        <p id="id">${newId}</p>
        <img id="forImg" src="${meal.strMealThumb}" alt=""><br>
        <div>
            <button onClick="getIngredients()">For more Click Here</button>
        </div>`
        mealContainer.appendChild(mealDiv);
      });
    searchField.value = '';

  }
}
const getIngredients = ingredients => {
  const ingredient = document.querySelectorAll('#id').innerText;
  ingredient.forEach((index)=>{
    console.log('index',index);
  })
  console.log('ingredient',ingredient);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredient}`
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayIngredients(data.meals))

}
const displayIngredients = meals => {
  document.getElementById('meals').style.display = 'none';
  console.log(meals)
  const div = document.getElementById('nameIngredients');
  div.style.display = 'none';
  const hh = meals;
  for (let i = 0; i < 10; i++) {
    const item = hh[i];
  const itemDiv = document.createElement('li');
  itemDiv.innerHTML = `
              <li>${item.strIngredient1}</li>
              <li>${item.strIngredient2}</li>
              <li>${item.strIngredient3}</li>
              <li>${item.strIngredient4}</li>
              <li>${item.strIngredient5}</li>
              

                `
    div.appendChild(itemDiv);
    console.log(itemDiv);
    div.style.display = 'block';
  }
}
const displayError = error => {
  const errorTag = document.getElementById('error-message');
  errorTag.innerText = error;
}

// const body = document.body
// fetch(`https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=flower&image_type=photo&pretty=true`)
//   .then(response => response.json())
//   .then(data => backGround(data.hits))
//   .catch(err => console.log(err));


// const backGround = (para, none) => {
//   // console.log(para[0].largeImageURL)
//   // body.style.backgroundImage=`url('${para[0].largeImageURL}')`
//   let arr = 0;

//   for (let i = 0; i < para.length; i++) {
//     let num = 0;
//     if (para) {
//       const myTime = setInterval((() => {
//         body.style.backgroundImage = `url('${para[num].largeImageURL}')`
//         num++;
//         if (num >= para.length) {
//           num = 0;
//         } else if (num <= 0) {
//           num = para.length - 1;
//         }
//       }), 5000)


//     } else if (none) {
//       clearInterval(myTime);
//     }
//   }

//   // para.forEach((image,index)=>{
//   //   let allBak = image[index];
//   //   console.log(allBak);
//   // setInterval((()=>{
//   //   image ++;
//   //   body.style.backgroundImage=`url('${allBak[3]}')`
//   // }),1000)

//   body.style.backgroundSize = "cover";
//   body.style.backgroundRepeat = "no-repeat";
//   // })
// }

