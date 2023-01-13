import { formatDate } from './dateHelper'

export const generateLink = (date: Date, coin: string, dateType: 'start' | 'final'): string => {
  const strDate = formatDate(date, true)
    .split('-')
    .map((item) => Number(item))

  const newDate = new Date(strDate[2], strDate[1] - 1, strDate[0], strDate[3], strDate[4])

  const timeStampDate = newDate.getTime()

  let link = ''

  if (dateType === 'start') {
    link = `https://api.coincap.io/v2/assets/${coin}/history?interval=m15&start=${timeStampDate}&end=${
      timeStampDate + 60000
    }`
  } else if (dateType === 'final') {
    link = `https://api.coincap.io/v2/assets/${coin}/history?interval=m15&start=${
      timeStampDate - 840000
    }&end=${timeStampDate + 60000}`
  }

  console.log(link)

  return link
}

export const fetchPriceUSD = (link: string, qtd: number) =>
  fetch(link)
    .then((response) => response.json())
    .then(({ data }) => data.map((item: { priceUsd: string }) => Number(item.priceUsd) * qtd))
