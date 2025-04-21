import { useFetch } from '../hooks/useFetch'
import { path } from '../path..ts/path'
import { StyledCatCard } from '../ui/styledCarCard'

export const CatsPage = () => {
  const { data, error, isLoading } = useFetch(path)
  const cats = data && !error ? data : []
  console.log(cats, 'cats')

  if (isLoading) return <p>Loading cats...</p>
  return (
    <div>
      <h1>Cat gallary</h1>
      <div className="container">
        {cats.map((cat) => (
          <StyledCatCard key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  )
}
