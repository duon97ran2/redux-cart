import styled from "styled-components"

export const StyledProductContainer = styled.div`
 display: grid;
 grid-template-columns:repeat(3,1fr);
`
export const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  & button {
    background-color: red;
    font-weight: 600;
    }
  &  h4{
    margin: 0;
    }
`
export const StyledCartContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
& h3{
  align-self: center;
}
`