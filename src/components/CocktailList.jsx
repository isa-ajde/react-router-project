import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <h3 style={{ textAlign: 'center' }}> CocktailList is not defined.. </h3>
    )
  }

  const formattedDrinks = drinks.map((ıtem) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = ıtem
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <Wrapper>
      {formattedDrinks.map((link) => {
        return <CocktailCard key={link.id} {...link} />
      })}
    </Wrapper>
  )
}

export default CocktailList
