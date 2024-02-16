import styled from "styled-components";

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const BtnGroup = styled.div`
  display: flex;
  align-content: center;
  gap: 10px;
  justify-content: center;
  `

export const BtnBrowseEdit = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  /* width: 100%; */
  height: 40px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
  
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
  `