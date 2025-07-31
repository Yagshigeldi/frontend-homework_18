import { useNavigate, useParams } from 'react-router-dom'
import NotFound from '../not-found/NotFound'
import avatarImage from "../../assets/avatar.jpg"
import { useFetch } from '../../hooks/useFetch'

const UserDetail = () => {
    const {id} = useParams()
    const {data, error, loading} = useFetch(`users/${id}`)
  // const { id } = useParams()
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  // useEffect(() => {
  //   setLoading(true)
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => setData(res.data))
  //     .catch((err) => setError(err))
  //     .finally(() => setLoading(false))
  // }, [])

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 mt-[50px] items-center'>
      {error && (
        <NotFound/>
      )}
      <div>
        <img className='h-[400px] object-cover rounded-lg shadow' src={avatarImage} alt="avatar" />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>{data?.name}</h1>
        <p className='text-gray-700 text-lg'>@{data?.username}</p>
        <p className='text-gray-700 text-lg'>📧 {data?.email}</p>
        <p className='text-gray-700 text-lg'>📱 {data?.phone}</p>
        <p className='text-gray-700 text-lg'>🌐 {data?.website}</p>
        <p className='text-gray-700 text-lg'>🏢 {data?.company?.name} {data?.company?.catchPhrase} {data?.company?.bs}</p>
        <button onClick={() => navigate(-1)} className='mt-4 w-max bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2.5 px-8 rounded transition cursor-pointer'>Go back</button>
      </div>
    </div>
  )
}

export default UserDetail
