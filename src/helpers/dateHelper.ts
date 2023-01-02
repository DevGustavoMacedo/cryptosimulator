import { ItemProps } from '../types/Item'

export const getCurrentMonth = () => {
  const today = new Date()

  return `${today.getFullYear()}-${today.getMonth() + 1}`
}

export const filterListByMonth = (list: ItemProps[], date: string): ItemProps[] => {
  // array destructuring
  const [year, month] = date.split('-')

  const newList: ItemProps[] = list.filter((item) => {
    if (
      item.finalDate.getFullYear() === parseInt(year) &&
      item.finalDate.getMonth() + 1 === parseInt(month)
    ) {
      return item
    }
  })

  return newList
}

export const formatDate = (date: Date, separator?: boolean): string => {
  const year = date.getFullYear()
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const hour = ('00' + date.getHours()).slice(-2)
  const minutes = ('00' + date.getMinutes()).slice(-2)

  if (separator) {
    return `${day}-${month}-${year}-${hour}-${minutes}`
  }

  return `${day}/${month}/${year} ${hour}:${minutes}`
}

export const formatMonthName = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-')
  const date = new Date()
  date.setMonth(parseInt(month) - 1)

  const monthName = date.toLocaleString('en-US', { month: 'long' })

  return `${monthName}/${year.slice(2, 4)}`
}
