// styled components
import * as S from './App.styles'

// hooks
import { useEffect, useState } from 'react'

// types
import { ItemProps } from './types/Item'

// data
import items from './data/items'

// helpers
import { filterListByMonth, getCurrentMonth } from './helpers/dateHelper'
import { fetchPriceUSD, generateLink } from './helpers/coinsHelper'

// components
import TransactionsTable from './components/TransactionsTable'
import BalanceArea from './components/BalanceArea'
import Modal from './components/Modal'
import ModalExclusion from './components/ModalExclusion'

const App = () => {
  const [list, setList] = useState(items.getItems)
  const [filteredList, setFilteredList] = useState<ItemProps[]>([])
  const [currentMonth, setCurrentMonth] = useState<string>(getCurrentMonth)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [balance, setBalance] = useState({ profit: 0, loss: 0, total: 0 })
  const [modalMode, setModalMode] = useState<string>('')
  const [itemToUpdate, setItemToUpdate] = useState<ItemProps | null>(null)
  const [itemToDelete, setItemToDelete] = useState<string>('')
  const [form, setForm] = useState<ItemProps>({
    id: '',
    outcome: 0,
    category: '',
    coins: '',
    startDate: new Date(),
    finalDate: new Date(),
    qtd: 0,
  })

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  useEffect(() => {
    const profit = filteredList
      .filter((item) => item.outcome > 0)
      .reduce((acc, curr) => acc + curr.outcome, 0)

    const loss = filteredList
      .filter((item) => item.outcome < 0)
      .reduce((acc, curr) => acc + curr.outcome, 0)

    setBalance({
      profit,
      loss,
      total: profit + loss,
    })
  }, [filteredList])

  useEffect(() => {
    if (itemToUpdate) {
      setForm({
        id: itemToUpdate.id,
        outcome: itemToUpdate.outcome,
        category: itemToUpdate.category,
        coins: itemToUpdate.coins,
        startDate: itemToUpdate.startDate,
        finalDate: itemToUpdate.finalDate,
        qtd: itemToUpdate.qtd,
      })
    }
  }, [itemToUpdate])

  const handleToggleModal = (mode: string) => {
    const modal = document.querySelector('#modal')
    modal!.classList.toggle('hide')
    setModalMode(mode)

    if (modal?.className === 'hide') {
      setForm({
        id: '',
        outcome: 0,
        category: '',
        coins: '',
        startDate: new Date(),
        finalDate: new Date(),
        qtd: 0,
      })
      setItemToUpdate(null)
    }
  }

  const setItemToSubmit = async (values: ItemProps): Promise<ItemProps> => {
    const { id, startDate, finalDate, category, qtd, coins } = values

    let newId: string = ''

    if (modalMode === 'Add') {
      newId = Math.floor(Date.now() * Math.random()).toString(36)
    } else if (modalMode === 'Edit' && typeof id === 'string') {
      newId = id
    }

    let newOutcome = 0

    const prices = {
      startPrice: 0,
      finalPrice: 0,
    }

    let plusMs = 0

    while (prices.startPrice === 0) {
      await fetchPriceUSD(generateLink(startDate, coins, 'start', plusMs), qtd)
        .then((price) => (price > 0 ? (prices.startPrice = price) : 0))
        .catch((error) => console.log(error))

      plusMs += 3600000
    }

    plusMs = 0

    while (prices.finalPrice === 0) {
      await fetchPriceUSD(generateLink(finalDate, coins, 'final', plusMs), qtd)
        .then((price) => (price > 0 ? (prices.finalPrice = price) : 0))
        .catch((error) => console.log(error))

      plusMs += 3600000
    }

    if (category === 'buy') {
      newOutcome = prices.finalPrice - prices.startPrice
    } else if (category === 'sell') {
      newOutcome = prices.startPrice - prices.finalPrice
    }

    newOutcome = Number(newOutcome.toFixed(2))

    const newItem: ItemProps = {
      id: newId,
      outcome: newOutcome,
      startDate,
      finalDate,
      category,
      coins,
      qtd,
    }

    return newItem
  }

  const handleSubmitItem = (item: ItemProps) => {
    let newList = [...list]

    if (modalMode === 'Add') {
      newList.push(item)
    } else if (modalMode === 'Edit') {
      newList = newList.map((e) => {
        if (e.id === item.id) {
          return item
        } else {
          return e
        }
      })
    }

    newList.sort((a, b) => a.finalDate.getTime() - b.finalDate.getTime())

    items.setItems(newList)

    setList(newList)
  }

  const handleItemUpdate = (item: ItemProps) => {
    setItemToUpdate(item)
  }

  const toggleModalExclusion = (itemID: string) => {
    const modalExclusion = document.querySelector('#modalExclusion')
    modalExclusion!.classList.toggle('hide')

    setItemToDelete(itemID)
  }

  const handleItemDelete = (itemID: string) => {
    const newList = list.filter((e) => e.id !== itemID)

    newList.sort((a, b) => a.finalDate.getTime() - b.finalDate.getTime())

    list.length === 1 ? localStorage.clear() : items.setItems(newList)

    setList(newList)
  }

  const handleLoading = (loading: boolean) => setIsLoading(loading)

  return (
    <>
      <Modal
        onSubmit={handleSubmitItem}
        toggleModal={() => handleToggleModal(modalMode)}
        modalMode={modalMode}
        form={form}
        handleLoading={handleLoading}
        isLoading={isLoading}
        handleItemToSubmit={setItemToSubmit}
      />

      <ModalExclusion
        toggleModalExclusion={toggleModalExclusion}
        itemToDelete={itemToDelete}
        handleItemDelete={handleItemDelete}
        handleLoading={handleLoading}
        isLoading={isLoading}
      />

      <S.Header>
        <S.HeaderTitle>
          crypto<span>_</span>$imulator
        </S.HeaderTitle>
      </S.Header>

      <S.Container>
        <section>
          <BalanceArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            balance={balance}
          />
        </section>
        <section>
          <TransactionsTable
            filteredList={filteredList}
            toggleModal={handleToggleModal}
            setItemToUpdate={handleItemUpdate}
            toggleModalExclusion={toggleModalExclusion}
          />
        </section>
      </S.Container>

      <S.Footer>
        <S.AddButton onClick={() => handleToggleModal('Add')}>
          <i className="ph-plus">ADD</i>
        </S.AddButton>
        <span>
          Developed by{' '}
          <a href="https://github.com/devgustavomacedo" target="blank">
            @GustavoMacedo
          </a>
        </span>
        <span></span>
      </S.Footer>
    </>
  )
}

export default App
