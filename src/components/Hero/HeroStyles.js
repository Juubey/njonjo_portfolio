import styled from 'styled-components';

/* Adding CSS manually is only necessary in JSFiddle,
   where CSS can't be inserted into the <head> */
   export const typedcursor = styled.div`
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
  }
  @keyframes typedjsBlink{
    50% { opacity: 0.0; }
  }
  @-webkit-keyframes typedjsBlink{
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
  }
  .typed-fade-out{
    opacity: 0;
    transition: opacity .25s;
    -webkit-animation: 0;
    animation: 0;
  }
  `

  /* Animation */
export const animtypewriter = styled.div`
  animation: typewriter 4s steps(44) 1s 1 normal both,
  blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
