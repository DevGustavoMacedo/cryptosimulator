import { ItemProps } from "../types/Item"

const LocalStorage = {
  getItems(): ItemProps[] {
    const items = localStorage.getItem('items')

    if (items !== null) {
      const itemsStorage = JSON.parse(items, function (key, value) {
        if (key === 'startDate') {
          return new Date(value)
        } else if (key === 'finalDate') {
          return new Date(value)
        } else {
          return value
        }
      })
      
      return itemsStorage
    } else {
      return []
    }
  },
  setItems(newList: ItemProps[]) {
    return localStorage.setItem('items', JSON.stringify(newList))
  }
}

export default LocalStorage
