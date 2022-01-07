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
