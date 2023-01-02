import * as yup from 'yup'
import Coins from '../data/coins'
import { formatDate } from './dateHelper'

const validationSchema = yup.object().shape({
  id: yup.string().optional(),
  outcome: yup.number().optional(),
  category: yup.mixed<'buy' | 'sell'>().oneOf(['buy', 'sell']).required('Required field'),
  coins: yup.mixed<keyof typeof Coins>().oneOf(Object.keys(Coins)).required('Required field'),
  startDate: yup
    .date()
    .when('coins', (coins, schema) => {
      if (coins) {
        const newMinDate: Date = new Date(Coins[coins].minDate)

        return schema.min(newMinDate, 'The minimum datetime is ' + formatDate(newMinDate))
      }

      return schema
    })
    .required('Required field')
    .typeError('Wrong data type'),
  finalDate: yup.lazy(() =>
    yup
      .date()
      .when('startDate', (startDate, schema) => {
        if (startDate) {
          const fifteenMinAfter = new Date(startDate.getTime() + 900000)

          return schema.min(fifteenMinAfter, 'Final date has to be 15 minutes after than start date')
        }

        return schema
      })
      .required('Required field')
      .typeError('Wrong data type')
      .max(new Date(), 'The limit is the current datetime')
  ),
  qtd: yup
    .number()
    .typeError('Wrong data type')
    .min(0.01, 'Must be greater than 0.01')
    .test('qtd', 'Limit of 2 decimal places', (val: any) => /^\d+(\.\d{0,2})?$/.test(val))
    .required('Required field'),
})

export default validationSchema
