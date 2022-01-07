export const createInProgressRecipes = async () => {
  let getLocal = await JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!getLocal || getLocal.length === 0) {
    getLocal = { cocktails: {}, meals: {} };
    localStorage.setItem('inProgressRecipes', JSON.stringify(getLocal));
  }
};

export const createFavoriteLocalStorage = async () => {
  let favoriteLocal = await JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteLocal || favoriteLocal.length === 0) {
    favoriteLocal = [];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteLocal));
  }
};

const helperDoneLOcal = (param, doneRecipes) => {
  const newdoneRecipes = [...doneRecipes, {
    id: param.idMeal || param.idDrink,
    type: (param.idMeal) ? 'comida' : 'bebida',
    area: param.strArea || '',
    category: param.strCategory,
    alcoholicOrNot: param.strAlcoholic || '',
    name: param.strMeal || param.strDrink,
    image: param.strMealThumb || param.strDrinkThumb,
    doneDate: Date(),
    tags: (param.strTags) ? param.strTags.split(',') : [],

  }];
  localStorage.setItem('doneRecipes', JSON.stringify(newdoneRecipes));
};

export const createDOneLocalStorage = async (param) => {
  console.log(param.strTags);
  const doneRecipes = await JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes || doneRecipes.length === 0) {
    const newDoneRecipes = [{
      id: param.idMeal || param.idDrink,
      type: (param.idMeal) ? 'comida' : 'bebida',
      area: param.strArea || '',
      category: param.strCategory,
      alcoholicOrNot: param.strAlcoholic || '',
      name: param.strMeal || param.strDrink,
      image: param.strMealThumb || param.strDrinkThumb,
      doneDate: Date(),
      tags: (param.strTags) ? param.strTags.split(',') : [],
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(newDoneRecipes));
  } else {
    helperDoneLOcal(param, doneRecipes);
  }
};
