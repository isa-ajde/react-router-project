import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomeLayout() {
  const navigation = useNavigation()

  const loading = navigation.state === 'loading'

  const trycontext = 'global context'

  return (
    <div>
      <Navbar />
      <section className="page">
        {loading ? (
          <div className="loading" />
        ) : (
          <Outlet context={trycontext} />
        )}
        {/* outleti sectionun içerisine aldığımız için bütün child sayfalar ana parenti bu section oldu */}
      </section>
    </div>
  )
}

export default HomeLayout
