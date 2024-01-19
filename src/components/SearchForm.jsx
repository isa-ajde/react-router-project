import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

function SearchForm({ searchTerm }) {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" disabled={isSubmiting} className="btn">
          {isSubmiting ? 'submitting...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
