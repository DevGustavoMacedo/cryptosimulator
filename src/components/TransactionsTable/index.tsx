import Coins from '../../data/coins'
import { formatDate } from '../../helpers/dateHelper'
import { ItemProps } from '../../types/Item'
import * as S from './styles'

type Props = {
  filteredList: ItemProps[]
  toggleModal: (mode: string) => void
  setItemToUpdate: (item: ItemProps) => void
  toggleModalExclusion: (item: string) => void
}

const TransactionsTable = ({
  filteredList,
  toggleModal,
  setItemToUpdate,
  toggleModalExclusion
}: Props) => {

  const handleEdit = (item: ItemProps) => {
    setItemToUpdate(item)
    toggleModal('Edit')
  }

  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHead>Coins</S.TableHead>
          <S.TableHead>Category</S.TableHead>
          <S.TableHead>Start Date</S.TableHead>
          <S.TableHead>Final Date</S.TableHead>
          <S.TableHead>Outcome</S.TableHead>
          <S.TableHead></S.TableHead>
          <S.TableHead></S.TableHead>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((item) => (
          <S.TableItem key={item.id} outcome={item.outcome}>
            <td>
              <img src={Coins[item.coins].icon} alt={Coins[item.coins].name} />
              <span>{item.qtd}</span>
              <span>{Coins[item.coins].symbol}</span>
            </td>
            <td>
              <span>{item.category.toUpperCase()}</span>
            </td>
            <td>{formatDate(item.startDate)}</td>
            <td>{formatDate(item.finalDate)}</td>
            <td>US$ {item.outcome}</td>
            <td>
              <i className="ph-trash" onClick={() => toggleModalExclusion(item.id)}></i>
            </td>
            <td>
              <i className="ph-pencil" onClick={() => handleEdit(item)}></i>
            </td>
          </S.TableItem>
        ))}
      </tbody>
    </S.Table>
  )
}

export default TransactionsTable
