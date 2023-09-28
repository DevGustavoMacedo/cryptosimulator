// styled
import * as S from './styles'

// types and data
import { ItemProps } from '../../types/Item'
import Coins from '../../data/coins'

// react date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// validations
import validationSchema from '../../helpers/validationSchema'
import { Formik } from 'formik'

// components
import Loading from '../Loading'

type Props = {
  onSubmit: (item: ItemProps) => void
  handleItemToSubmit: (item: ItemProps) => Promise<ItemProps>
  toggleModal: (mode: string) => void
  modalMode: string
  form: ItemProps
  isLoading: boolean
  handleLoading: (loading: boolean) => void
}

const Modal = ({
  onSubmit,
  handleItemToSubmit,
  toggleModal,
  modalMode,
  form,
  isLoading,
  handleLoading,
}: Props) => {
  const handleSubmitEvent = async (values: ItemProps) => {
    handleLoading(true)

    onSubmit(await handleItemToSubmit(values))

    setTimeout(() => {
      handleLoading(false)
      toggleModal(modalMode)
    }, 1500)
  }

  return (
    <div id="modal" className="hide">
      <S.Fade onClick={() => toggleModal(modalMode)}></S.Fade>
      <S.Container>
        <h2>Make the {modalMode.toLowerCase()}</h2>
        <Formik
          initialValues={form}
          validationSchema={validationSchema}
          onSubmit={handleSubmitEvent}
          enableReinitialize
        >
          {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
            <S.Form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="coins">Cryptocurrency</label>
                <S.Select name="coins" onChange={handleChange} value={values.coins}>
                  <option value="">Select an option</option>
                  {Object.keys(Coins).map((item) => (
                    <option key={item} value={item}>
                      {Coins[item].name}
                    </option>
                  ))}
                </S.Select>
                {errors.coins && <S.Error>{errors.coins}</S.Error>}
              </div>

              <div>
                <label htmlFor="category">Operation</label>
                <S.Select name="category" onChange={handleChange} value={values.category}>
                  <option value="">Select an option</option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                </S.Select>
                {errors.category && <S.Error>{errors.category}</S.Error>}
              </div>

              <div>
                <label htmlFor="qtd">Coins quantity</label>
                <S.Input
                  type="number"
                  name="qtd"
                  value={values.qtd}
                  onChange={handleChange}
                  step="0.01"
                />
                {errors.qtd && <S.Error>{errors.qtd}</S.Error>}
              </div>

              <div>
                <S.Date>
                  <label htmlFor="startDate">Start Datetime</label>
                  <DatePicker
                    selected={values.startDate}
                    name="startDate"
                    dateFormat="dd/MM/yy HH:mm"
                    showTimeSelect
                    timeFormat="HH:mm"
                    withPortal
                    onFocus={(e) => (e.target.readOnly = true)}
                    timeIntervals={15}
                    onChange={(startDate) => setFieldValue('startDate', startDate)}
                  />
                  {errors.startDate && typeof errors.startDate === 'string' && (
                    <S.Error>{errors.startDate}</S.Error>
                  )}
                </S.Date>

                <S.Date>
                  <label htmlFor="finalDate">Final Datetime</label>
                  <DatePicker
                    selected={values.finalDate}
                    name="finalDate"
                    dateFormat="dd/MM/yy HH:mm"
                    showTimeSelect
                    timeFormat="HH:mm"
                    withPortal
                    onFocus={(e) => (e.target.readOnly = true)}
                    timeIntervals={15}
                    onChange={(finalDate) => setFieldValue('finalDate', finalDate)}
                  />
                  <span>
                    <span>Will add on this date</span>
                  </span>
                  {errors.finalDate && typeof errors.finalDate === 'string' && (
                    <S.Error>{errors.finalDate}</S.Error>
                  )}
                </S.Date>
              </div>

              <S.SubmitButton type="submit">
                <span>{modalMode}</span>
                {isLoading && <Loading />}
              </S.SubmitButton>
            </S.Form>
          )}
        </Formik>
      </S.Container>
    </div>
  )
}

export default Modal
