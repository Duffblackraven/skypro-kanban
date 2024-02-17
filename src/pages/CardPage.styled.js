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
  padding: 40px 30px 28px;
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
  export const BtnBrowseDel = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  /* height: 40px; */
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  border-radius: 4px;
  background: #565EEF;
  border: none;
  color: #FFFFFF;
  
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
`

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  font-family: Roboto;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  /* margin-bottom: 20px; */
`
export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`

export const StatusThemes = styled.div`
  border-radius: 24px;
  /* border: 0.7px solid rgba(148, 166, 190, 0.4); */
  /* color: #94A6BE; */
  /* padding: 11px 14px 10px; */
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Status = styled.div`
    margin-bottom: 11px;
`

export const Subttl = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
`

export const PopNewCardContainer = styled.div`
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

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 28px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`
export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormNewInput = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  font-family: Roboto;

  &::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`

export const FormNewInputArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  font-family: Roboto;

  &::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`
export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  /* color: #94A6BE; */
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`

export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

// export const CategoriesButton = styled.button`
//   display: inline-block;
//   width: auto;
//   height: auto;
//   padding: 8px 18px;
//   border-radius: 24px;
//   opacity: 0.4;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 14px;
//   white-space: nowrap;
//   display: inline-block;
//   cursor: pointer;
//   border: none;

//     &:hover {
//       opacity: 1 !important;
//     }
// `;