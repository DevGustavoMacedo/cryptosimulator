import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`

export const TableHead = styled.th`
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.golden};
  color: ${(props) => props.theme.primary};

  &:first-child {
    border-radius: 0.5rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    font-size: 0.75rem;
  }
`

export const TableItem = styled.tr<{ outcome: number }>`
  background-color: rgba(226, 194, 25, 0.1);

  &:nth-child(even) {
    background-color: ${(props) => props.theme.golden2};
  }

  td {
    padding: 1rem 2rem;
    font-weight: 400;
    white-space: nowrap;
    font-size: 0.9rem;

    :first-child {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 1.4rem 2rem 0.6rem;
      font-size: 0.7rem;
      font-weight: 600;
      
      img {
        width: 1.8rem;
      }

      span:first-of-type {
        font-size: 0.9rem;
      }
    }

    &:nth-child(5) {
      color: ${(props) =>
        props.outcome > 0
          ? props.theme.green
          : props.outcome < 0
          ? props.theme.red
          : props.theme.gold};
    }

    &:nth-child(2) span {
      background-color: ${(props) => props.theme.golden};
      color: ${(props) => props.theme.primary};
      padding: 0.2rem 0.4rem;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.8rem;
      border: 2px solid ${(props) => props.theme.primary};
    }

    i {
      font-size: 1.4rem;
      cursor: pointer;
      border-radius: 25px;
      background-color: ${(props) => props.theme.golden};
      color: ${(props) => props.theme.primary};
      padding: 0.2rem;
      border: 2px solid ${(props) => props.theme.primary};
      transition: 1s;

      &:hover {
        color: ${(props) => props.theme.golden};
        background-color: ${(props) => props.theme.primary};
        border: 2px solid ${(props) => props.theme.golden};
      }
    }

    @media (max-width: 1024px) {
      padding: 1rem;
    }
  }
`
