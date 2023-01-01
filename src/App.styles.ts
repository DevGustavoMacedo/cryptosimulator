import styled from 'styled-components'

export const Header = styled.header`
  background-image: url('kanchanara-fsSGgTBoX9Y-unsplash.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  padding-top: 20px;

  @media (max-width: 425px) {
    height: 150px;
  }
`
export const HeaderTitle = styled.h1`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.secondary};
  width: fit-content;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  border-radius: 2rem 0 2rem 0;

  span {
    animation: blinkItem 700ms infinite;

    @keyframes blinkItem {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`

export const Container = styled.main`
  width: 80vw;
  max-width: 1200px;
  margin: auto;

  section:last-child {
    overflow-x: auto;
    
    ::-webkit-scrollbar {
      height: 6px;
      width: 100%;
    }
    ::-webkit-scrollbar-track {
      background-color: black;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.golden};
      border-radius: 25px;
      border-top: 2px solid black;
    }
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  max-width: 1200px;
  margin: 4rem auto 2rem;

  span {
    font-size: 0.8rem;
    
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }

  @media (max-width: 1024px) {
    width: 90vw;

    span {
      font-size: 0.65rem;
    }
  }
`

export const AddButton = styled.div`
  background-color: ${(props) => props.theme.golden};
  border-radius: 10px;
  padding: 0.5rem;
  transition: 1s;
  box-shadow: 3px 3px 0 3px #2d2705;
  transition: 0.5s ease;

  &:active {
    box-shadow: 0 0 0 0 #2d2705, inset 4px 4px 4px #2d2705;
    transform: translate(6px, 6px);
    background-color: ${(props) => props.theme.primary};

    i {
      color: ${(props) => props.theme.golden};
    }
  }

  i {
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  @media (max-width: 1024px) {
    box-shadow: 2px 2px 10px ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.primary};
  }

  @media (max-width: 425px) {
    i {
      font-size: 1rem;
    }
  }
`
