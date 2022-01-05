import React, { useState, useEffect } from 'react';

export default function ComidasID(id) {
  const [responseFood, setResponseFood] = useState([]);

  const returnById = () => (
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((resp) => resp.json())
      .then((r) => setResponseFood(r))
  );

  useEffect(() => {
    returnById();
  }, []);

  const { meals } = responseFood;
  const TWENTY = 20;

  return (
    <div>
      {(responseFood.length === 0) ? null : (
        <div>
          <img src={ meals[0].strMealThumb } alt="Food" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{meals[0].strMeal}</h1>
          <p data-testid="recipe-category">{meals[0].strCategory}</p>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <div>
            <h3>Ingredientes</h3>
            {(Object.entries(meals[0]).filter((elem) => elem[0].includes('Ingredient')
            || elem[0].includes('Measure'))
              .map((elem, index, arr) => {
                if (elem[1] !== null && elem[1] !== '' && index < TWENTY) {
                  return (
                    <p
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${elem[1]}-${arr[index + TWENTY][1]}`}
                    </p>
                  );
                }
                return null;
              }))}
          </div>
          <p data-testid="instructions">{meals[0].strInstructions}</p>
          <iframe
            src={ meals[0].strYoutube }
            frameBorder="0"
            data-testid="video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div data-testid={ `${0}-recomendation-card` }>Recomendation Card</div>
          <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
        </div>
      )}
    </div>
  );
}

// dateModified: null
// idMeal: "53027"
// strArea: "Egyptian"
// strCategory: "Vegetarian"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Brown Lentils"
// strIngredient2: "Rice"
// strIngredient3: "Coriander"
// strIngredient4: "Macaroni"
// strIngredient5: "Chickpeas"
// strIngredient6: "Onion"
// strIngredient7: "Salt"
// strIngredient8: "Vegetable Oil"
// strIngredient9: ""
// strIngredient10: ""
// strIngredient11: ""
// strIngredient12: ""
// strIngredient13: ""
// strIngredient14: ""
// strIngredient15: ""
// strIngredient16: ""
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).\r\nNow, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.\r\nNow make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.\r\nCover the chickpeas and warm in the microwave briefly before serving.\r\n\r\nMake the crispy onion topping. \r\n\r\nSprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.\r\nIn a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes)."
// strMeal: "Koshari"
// strMealThumb: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg"
// strMeasure1: "1 1/2 cups "
// strMeasure2: "1 1/2 cups "
// strMeasure3: "1/2 tsp"
// strMeasure4: "2 cups "
// strMeasure5: "Can"
// strMeasure6: "1 large"
// strMeasure7: "Sprinking"
// strMeasure8: "1/2 cup "
// strMeasure9: " "
// strMeasure10: " "
// strMeasure11: " "
// strMeasure12: " "
// strMeasure13: " "
// strMeasure14: " "
// strMeasure15: " "
// strMeasure16: " "
// strMeasure17: " "
// strMeasure18: " "
// strMeasure19: " "
// strMeasure20: " "
// strSource: "https://www.themediterraneandish.com/egyptian-koshari-recipe/"
// strTags: null
// strYoutube: "https://www.youtube.com/watch?v=y0d2ZMZBW4Y"
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)
// [[Prototype]]: Object
