import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

import { useQuery } from '@tanstack/react-query'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || '' // bu komut urlnin içindeki key-value değerindeki sorgulardan key i search olanın valuesin getirir
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm)) //queryClient.ensureQueryData fonksiyonu, belirli bir Query'nin verilerini kontrol eder ve eğer veriler önbellekte varsa onları döndürür. Eğer veriler önbellekte yoksa veya belirli bir koşulu sağlamıyorsa, verileri yeniden getirmek üzere bir refetch işlemi başlatır.
    return { searchTerm }
  }

function Landing() {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm))

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing
