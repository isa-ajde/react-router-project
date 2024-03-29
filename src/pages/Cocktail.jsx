import Wrapper from '../assets/wrappers/CocktailPage'
import { Link, useLoaderData, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

import { useQuery } from '@tanstack/react-query'

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    // burdaki params destruction yöntemi yönlendirdiğimiz sayfadaki ID yi yakalar
    const { id } = params
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

function Cocktail() {
  const { id } = useLoaderData() // bu fonksiyonda bu yukarıdaki loader fonksiyonundan dödürülen değeri yakalar
  const navigate = useNavigate()
  const { data } = useQuery(singleCocktailQuery(id))
  if (!data) return <Navigate to="/" />

  const singleDrink = data.drinks[0]

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instruction,
  } = singleDrink

  // sinleDrink objesini  key ve value olarak düşünürsek sadece keyleri almamızı sağlayan Object.keys() fonksiyonudur bir dizi dödürür

  const validIngredient = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])

  return (
    <Wrapper>
      <header>
        <Link className="btn " onClick={() => navigate(-1)}>
          back home{' '}
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-ifno">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Ingredient : </span>
            {validIngredient.map((ıtem, index) => {
              return (
                <span className="ing" key={index}>
                  {ıtem}
                  {index < validIngredient.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instruction}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
