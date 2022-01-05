import React, { useState, useEffect } from 'react';

export default function BebidasId(id) {
  const [responseDrinks, setResponseDrinks] = useState([]);

  const returnById = () => (
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((resp) => resp.json())
      .then((r) => setResponseDrinks(r))
  );

  useEffect(() => {
    returnById();
  }, []);

  const { drinks } = responseDrinks;
  const FIFTEEN = 15;

  return (
    <div>
      {(responseDrinks.length === 0) ? null : (
        <div>
          <img src={ drinks[0].strDrinkThumb } alt="Drink" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{drinks[0].strDrink}</h1>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <h2 data-testid="recipe-category">{drinks[0].strAlcoholic}</h2>
          <div>
            <h3>Ingredientes</h3>
            {(Object.entries(drinks[0]).filter((elem) => elem[0].includes('Ingredient')
            || elem[0].includes('Measure'))
              .map((elem, index, arr) => {
                if (elem[1] !== null && elem[1] !== '' && index < FIFTEEN) {
                  return (
                    <p
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${elem[1]}-${arr[index + FIFTEEN][1]}`}
                    </p>
                  );
                }
                return null;
              }))}
          </div>
          <p data-testid="instructions">{drinks[0].strInstructions}</p>
          <div data-testid={ `${0}-recomendation-card` }>Recomendation Card</div>
          <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
        </div>
      )}
    </div>
  );
}

// dateModified: "2016-07-18 22:06:00"
// idDrink: "15997"
// strAlcoholic: "Optional alcohol"
// strCategory: "Ordinary Drink"
// strCreativeCommonsConfirmed: "No"
// strDrink: "GG"
// strDrinkAlternate: null
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
// strGlass: "Collins Glass"
// strIBA: null
// strImageAttribution: null
// strImageSource: null
// strIngredient1: "Galliano"
// strIngredient2: "Ginger ale"
// strIngredient3: "Ice"
// strIngredient4: null
// strIngredient5: null
// strIngredient6: null
// strIngredient7: null
// strIngredient8: null
// strIngredient9: null
// strIngredient10: null
// strIngredient11: null
// strIngredient12: null
// strIngredient13: null
// strIngredient14: null
// strIngredient15: null
// strInstructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG."
// strInstructionsDE: "Den Galliano-Likör über Eis gießen. Füllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu gehört. Du hast jetzt ein eigenes GG."
// strInstructionsES: null
// strInstructionsFR: null
// strInstructionsIT: "Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo è tutto.\r\nOra hai il tuo GG personale."
// strInstructionsZH-HANS: null
// strInstructionsZH-HANT: null
// strMeasure1: "2 1/2 shots "
// strMeasure2: null
// strMeasure3: null
// strMeasure4: null
// strMeasure5: null
// strMeasure6: null
// strMeasure7: null
// strMeasure8: null
// strMeasure9: null
// strMeasure10: null
// strMeasure11: null
// strMeasure12: null
// strMeasure13: null
// strMeasure14: null
// strMeasure15: null
// strTags: null
// strVideo: null
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)
// [[Prototype]]: Object
