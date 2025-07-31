import NotFound from '../not-found/NotFound'
import { useFetch } from '../../hooks/useFetch'

const Todo = () => {
  const {data, error, loading} = useFetch("todos")
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   api
  //     .get("todos")
  //     .then(res => setData(res.data))
  //     .catch(err => setError(err))
  //     .finally(() => setLoading(false))
  // }, [])
  // console.log(data);
  

  return (
    <div className='container mx-auto mt-[80px]'>
      {error && (
        <NotFound/>
      )}
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <table className='w-full border-collapse border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>ID</th>
            <th className='border border-gray-300 px-4 py-2'>Title</th>
            <th className='border border-gray-300 px-4 py-2'>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map(todo => (
              <tr key={todo.id} className='hover:bg-gray-50'>
                <td className='border border-gray-300 px-4 py-2'>{todo.id}</td>
                <td className='border border-gray-300 px-4 py-2'>{todo.title}</td>
                <td className='border border-gray-300 px-4 py-2'>{todo.completed ? " ✅ true" : "❌ false"} </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Todo