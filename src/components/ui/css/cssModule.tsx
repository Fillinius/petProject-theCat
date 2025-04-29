import { CatProp } from '../../hooks/useFetch'
import styles from './CatCard.module.scss'

export const CssModule = (cat: CatProp) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={cat.url} alt="imageCat" />
      <div className={styles.info}>
        <h3 className={styles.title}>{cat.id}</h3>
      </div>
    </div>
  )
}
