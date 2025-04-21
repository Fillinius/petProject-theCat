import { useFetch } from '../hooks/useFetch'
import { path } from '../path..ts/path'
import { CssModule } from '../ui/css/cssModule'
import { SCSSComponent } from '../ui/scss/scssComponent'
import { StyledCatCard } from '../ui/styledComponent/styledCarCard'
import './styles.css'

export const CatsPage = () => {
  const { data, error, isLoading } = useFetch(path)
  const cats = data && !error ? data : []
  console.log(cats, 'cats')

  if (isLoading) return <p>Loading cats...</p>
  return (
    <div className="app">
      <h1>Cat gallary</h1>
      <div className="cards-container">
        <h2>Styled Components</h2>
        <div className="cards-section">
          {cats.map((cat) => (
            <StyledCatCard key={cat.id} {...cat} />
          ))}
        </div>
        <h2>SCSS Components</h2>
        <div className="cards-section">
          {cats.map((cat) => (
            <SCSSComponent key={cat.id} {...cat} />
          ))}
        </div>
        <h2>Modules</h2>
        <div className="cards-section">
          {cats.map((cat) => (
            <CssModule key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
