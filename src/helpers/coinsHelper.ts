import { formatDate } from './dateHelper'

export const generateLink = (
  date: Date,
  coin: string,
  dateType: 'start' | 'final',
  plusMs: number
): string => {
  const strDate = formatDate(date, true)
    .split('-')
    .map((item) => Number(item))

  const newDate = new Date(strDate[2], strDate[1] - 1, strDate[0], strDate[3], strDate[4])

  const timeStampDate = newDate.getTime() - plusMs

  let link = ''

  if (dateType === 'start') {
    link = `https://api.coincap.io/v2/assets/${coin}/history?interval=m15&start=${timeStampDate}&end=${
      timeStampDate + 900000
    }`
  } else if (dateType === 'final') {
    link = `https://api.coincap.io/v2/assets/${coin}/history?interval=m15&start=${
      timeStampDate - 900000
    }&end=${timeStampDate + 60000}`
  }

  return link
}

export const fetchPriceUSD = (link: string, qtd: number) =>
  fetch(link)
    .then((response) => response.json())
    .then(({ data }) => data.map((item: { priceUsd: string }) => Number(item.priceUsd) * qtd))
    .then((prices) => (prices.length > 0 ? prices[0] : 0))
