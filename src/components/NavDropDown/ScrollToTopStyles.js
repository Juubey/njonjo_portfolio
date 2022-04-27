import styled from 'styled-components';


export const backtotop = styled.div`
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 996;
    background: #149ddd;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: all 0.4s;
`
export const backtotopi = styled.div`
    font-size: 28px;
    color: #fff;
    line-height: 0;
`  
export const backtotophover = styled.div`
    background: #2eafec;
    color: #fff;
`
export const backtotopactive = styled.div`
    visibility: visible;
    opacity: 1;
`
