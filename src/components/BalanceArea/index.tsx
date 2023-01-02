import { formatMonthName } from '../../helpers/dateHelper'
import * as S from './styles'

type Balance = {
  profit: number
  loss: number
  total: number
}

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
  balance: Balance
}

const BalanceArea = ({ currentMonth, onMonthChange, balance }: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <S.Cards>
      <S.Month>
        <i className="ph-arrow-left" onClick={handlePrevMonth}></i>

        <div>{formatMonthName(currentMonth)}</div>
        <div>
          <i className="ph-arrow-left" onClick={handlePrevMonth}></i>
          <i className="ph-arrow-right" onClick={handleNextMonth}></i>
        </div>

        <i className="ph-arrow-right" onClick={handleNextMonth}></i>
      </S.Month>
      <S.Transactions balance={balance.profit}>
        <div>
          <i className="ph-plus-circle"></i>
          <h3>PROFIT</h3>
        </div>
        <div>
          <span>US$</span> {balance.profit.toFixed(2)}
        </div>
      </S.Transactions>
      <S.Transactions balance={balance.loss}>
        <div>
          <i className="ph-minus-circle"></i>
          <h3>LOSS</h3>
        </div>
        <div>
          <span>US$</span> {balance.loss.toFixed(2)}
        </div>
      </S.Transactions>
      <S.Transactions balance={balance.total}>
        <div>
          <i className="ph-equals"></i>
          <h3>BALANCE</h3>
        </div>
        <div>
          <span>US$</span> {balance.total.toFixed(2)}
        </div>
      </S.Transactions>
    </S.Cards>
  )
}

export default BalanceArea
