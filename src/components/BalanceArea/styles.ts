import styled from 'styled-components'

export const Cards = styled.div`
  margin: -6rem 0 2rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  gap: 1rem;
  align-items: center;

  > div {
    background-color: ${(props) => props.theme.secondary};
    backdrop-filter: blur(6px);
    border-radius: 0.25rem;
    padding: 1rem;
    border: 4px solid black;
    min-height: 7rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    > div:nth-child(2),
    > div:nth-child(3) {
      order: 1;
      background-color: ${(props) => props.theme.golden2};
      border: 2px solid ${(props) => props.theme.golden2};
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-rows: repeat(1fr, 2); */
    margin-top: -3.6rem;

    > div {
      min-height: 100px;
    }

    > div:nth-child(4) {
      /* order: 1; */
      /* background-color: ${(props) => props.theme.golden2}; */
      /* border: 2px solid ${(props) => props.theme.golden2}; */
    }
  }
`

export const Month = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.2rem;

  div:nth-child(3) {
    display: none;
  }

  i {
    font-size: 1.6rem;
    padding: 0.125rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.golden};
    color: black;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    font-size: 0.9rem;

    div:nth-child(3) {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }

    i {
      font-size: 1.2rem;
    }

    > i {
      display: none;
    }
  }

  @media (max-width: 425px) {
    /* flex-direction: row; */
    /* justify-content: space-between; */

    div:nth-child(3) {
      /* display: none; */
    }

    > i {
      /* display: flex; */
      /* font-size: 1.2rem; */
      /* padding: 0.25rem; */
    }
  }
`

export const Transactions = styled.div<{ balance: number }>`
  i,
  span {
    color: ${(props) =>
      props.balance > 0
        ? props.theme.green
        : props.balance < 0
        ? props.theme.red
        : props.theme.golden};
  }

  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: 0.7rem;
  }

  i {
    font-size: 1.4rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    gap: 0.5rem;

    > span i {
      font-size: 1.4rem;
    }

    div:last-child span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    div:last-child span {
      font-size: 1rem;
    }
  }
`
