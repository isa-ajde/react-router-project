import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
function Error() {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Ohh!</h3>
          <p>We can't seem t find page you are looking for</p>
        </div>
        <Link to="/">Back home</Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <h3>Bir şeyler yanlış gitti..</h3>
      </div>
    </Wrapper>
  )
}

export default Error
