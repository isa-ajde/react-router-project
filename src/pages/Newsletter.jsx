import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

function Newsletter() {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        out newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          required
          defaultValue="test@test.com"
        />
        {/* eyer bu örneği aynısını yapmak istiyorsanız formun submit işlemini başarılı bir şekilde gerçekleştirmek istiyorsanız email yerine mutlaka test@test.com yazmalısınız aksi takdirde çallışmayacaktır */}
      </div>
      <button
        disabled={isSubmiting}
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        {isSubmiting ? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}

export default Newsletter
