import { useRouteError } from 'react-router-dom'

function SinglePageError() {
  const error = useRouteError()
  console.log(error)
  return (
    <h6 style={{ textDecoration: 'underline' }}>{error.message} "ERROR"</h6>
  )
}

export default SinglePageError
