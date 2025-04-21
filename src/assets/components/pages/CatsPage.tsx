import { useFetch } from '../hooks/useFetch'
import { path } from '../path..ts/path'

export const CatsPage = () => {
  const { data, error, isLoading } = useFetch(path)
  const cats = data && !error ? data : []
  console.log(cats, 'cats')

  if (isLoading) return <p>Loading cats...</p>
  return (
    <div>
      <h1>Cat gallary</h1>
    </div>
  )
}
