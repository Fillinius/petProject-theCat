import { CatProp } from '../hooks/useFetch'
import styled from 'styled-components'

const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Info = styled.div`
  padding: 0 5px;
  text-align: center;
`

const Title = styled.h3`
  color: #334;
`

export const StyledCatCard = (cat: CatProp) => {
  return (
    <Card>
      <Image src={cat.url} alt="imageCat" />
      <Info>
        <Title>{cat.id}</Title>
      </Info>
    </Card>
  )
}
