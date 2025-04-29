import { CatProp } from '../../hooks/useFetch'
import './styled.scss'

export const SCSSComponent = (cat: CatProp) => {
  return (
    <div className="scss-card">
      <img className="scss-card__image" src={cat.url} alt="imageCat" />
      <div className="scss-card__info">
        <h3 className="scss-card__title">{cat.id}</h3>
      </div>
    </div>
  )
}
