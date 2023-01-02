import styled from 'styled-components'

export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.secondary};
  backdrop-filter: blur(10px);
  z-index: 2;
`

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 85%;
  max-width: 700px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em 2em;
  box-shadow: 0 0 10px ${(props) => props.theme.golden};
  border-radius: 1rem;
  padding: 1.6rem;

  h2 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.golden};
    font-size: 1.4em;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 80%;
  max-width: 500px;
  color: ${(props) => props.theme.primary};

  label {
    padding: 0.25rem;
    font-size: 0.9em;
    font-weight: 600;
    display: block;
  }

  > div:nth-child(4) {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    width: 100%;

    label {
      font-size: 0.8em;
    }

    > div:nth-child(4) {
      /* display: block; */
      label {
      }
    }
  }
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.golden2};
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.golden};
  width: 100%;
  width: 100%;
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(226, 194, 25, 0.6);
  }
`

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  align-self: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.primary};
  transition: 0.5s ease-in-out;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.golden};
  font-weight: bold;

  span {
    color: ${(props) => props.theme.primary};
  }

  svg {
    height: 1.4rem;
  }
`

export const Error = styled.p`
  color: ${(props) => props.theme.red};
  background-color: rgba(255, 0, 0, 0.2);
  width: fit-content;
  margin-top: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
`

export const Select = styled.select`
  background-color: ${(props) => props.theme.golden2};
  color: ${(props) => props.theme.golden};
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.golden};
  width: 100%;
  width: 100%;
  border-radius: 0.5rem;

  &::placeholder {
    color: rgba(226, 194, 25, 0.6);
  }

  option {
    background-color: #2d2705;
    font-weight: 600;
  }
`

export const Date = styled.div`
  input {
    background-color: ${(props) => props.theme.golden2};
    padding: 0.5rem 1rem;
    border: 2px solid ${(props) => props.theme.golden};
    width: 100%;
    width: 100%;
    border-radius: 0.5rem;

    &::placeholder {
      color: rgba(226, 194, 25, 0.6);
    }
  }

  > span {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;

    span {
      font-size: 0.7rem;
      padding: 0.25rem 0.5rem;
      border-radius: 15px;
      background-color: ${(props) => props.theme.golden2};
      text-align: center;
    }
  }

  .react-datepicker__header,
  .react-datepicker__current-month,
  .react-datepicker-time__header {
    font-size: 1rem;
  }

  .react-datepicker,
    .react-datepicker__day,
    .react-datepicker__day-name {
      font-size: 0.8rem;
      margin: 0;
    }

  .react-datepicker__header {
    background-color: ${(props) => props.theme.golden};
    border-radius: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.primary};
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation-icon::before {
    border-color: black;
  }

  .react-datepicker {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: ${(props) => props.theme.golden};
    border: none;
    border-radius: 1rem;
  }

  .react-datepicker__day {
    &:hover {
      color: ${(props) => props.theme.golden};
      background-color: ${(props) => props.theme.primary};
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__navigation-icon {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.golden};
  }

  .react-datepicker__time-list-item {
    background-color: ${(props) => props.theme.golden};
    color: ${(props) => props.theme.primary};

    :hover {
      background-color: ${(props) => props.theme.primary} !important;
      color: ${(props) => props.theme.golden};
    }
  }

  .react-datepicker__time-list-item--selected {
    background-color: ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.golden} !important;
  }

  @media (max-width: 425px) {
    > span {
      margin-top: 0.25rem;

      span {
        font-size: 0.6rem;
      }
    }

    .react-datepicker__month-container {
      overflow-x: auto;
    }

    .react-datepicker__header,
    .react-datepicker__current-month,
    .react-datepicker-time__header {
      font-size: 0.8rem;
    }

    .react-datepicker,
    .react-datepicker__day,
    .react-datepicker__day-name {
      font-size: 0.7rem;
      margin: 0;
    }
  }

  @media (max-width: 330px) {
    .react-datepicker__time-container, .react-datepicker__time, .react-datepicker__time-box {
      width: 60px;
    }
  }
`
