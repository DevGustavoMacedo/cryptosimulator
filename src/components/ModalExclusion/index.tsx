// styled
import * as S from './styles'

import Loading from '../Loading'

type Props = {
  toggleModalExclusion: (itemID: string) => void
  itemToDelete: string
  handleItemDelete: (itemID: string) => void
  handleLoading: (loading: boolean) => void
  isLoading: boolean
}
const ModalExclusion = ({
  toggleModalExclusion,
  itemToDelete,
  handleItemDelete,
  handleLoading,
  isLoading,
}: Props) => {
  const handleDelete = () => {
    handleLoading(true)
    handleItemDelete(itemToDelete)

    setTimeout(() => {
      handleLoading(false)
      toggleModalExclusion('')
    }, 1000)
  }

  return (
    <div id="modalExclusion" className="hide">
      <S.Fade onClick={() => toggleModalExclusion('')} />
      <S.Container>
        <h2>Do you really want to delete?</h2>
        <S.SubmitButton onClick={handleDelete}>
          <span>Confirm</span>
          {isLoading && <Loading />}
        </S.SubmitButton>
      </S.Container>
    </div>
  )
}

export default ModalExclusion
