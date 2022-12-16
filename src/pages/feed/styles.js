import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;

  color: white;
`

export const TitleHighLight = styled.h3`
  color: #ffffff70;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;
`

export const Column = styled.p`
  flex:${({flex}) => flex};
  padding-right: 24px;
`