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
  top: 30%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.golden};
  border-radius: 1rem;
  padding: 1rem;
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.golden};
    font-size: 1.4em;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 1rem;
    }
  }
`

export const SubmitButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.primary};
  transition: 0.5s ease-in-out;
  background-color: ${(props) => props.theme.golden};
  font-weight: bold;

  span {
    color: ${(props) => props.theme.primary};
  }

  svg {
    height: 1.4rem;
  }
`
