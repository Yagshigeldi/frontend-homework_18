import { useNavigate } from 'react-router-dom'
import NotFound from '../not-found/NotFound'
import avatarImage from "../../assets/avatar.jpg"
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const {data, error, loading} = useFetch("users")
//   const [data, setData] = useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)

// useEffect(() => {
//   setLoading(true)
//   api
//     .get("users")
//     .then(res => setData(res.data))
//     .catch(err => setError(err))
//     .finally(() => setLoading(false))
// }, [])

  const navigate = useNavigate()

  return (
    <div className='container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mt-[80px]'>
      {error && (
        <NotFound/>
      )}
      {
        data?.map((user) => (
          <div className='shadow-lg rounded-lg overflow-hidden' key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <div className='overflow-hidden rounded-lg'>
              <img className='w-full object-contain h-[250px]' src={avatarImage} alt="" />
            </div>
            <div className='p-4'>
              <h2 className='font-bold line-clamp-1' title={user.name}>{user.name}</h2>
              <p className='text-gray-500'>@{user.username}</p>
              <p className='text-gray-700'>📧 {user.email}</p>
              <p>📱 {user.phone}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Home