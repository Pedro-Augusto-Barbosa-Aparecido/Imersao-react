import styled from "styled-components";

const Box = styled.div`
  background-color: #FFF;
  border-radius: 8px;

  margin-bottom: 10px;
  padding: 16px;

  .boxLink {
      font-size: 14px;
      color: #2E7884;
      text-decoration: none;
      font-weight: 800;
  }

  .title {
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 20px;
  }

  .subTitle {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 20px;
  }

  .samllTitle {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 700;
      color: #333;
      margin-bottom: 20px;
  }

  input {
      width: 100%;
      background-color: #F4F4F4;
      color: #333;
      border: 0;
      padding: 14px 16px;
      margin-bottom: 14px;
      border-radius: 10000px;
      ::placeholder {
          color: #333;
          opacity: 1;
      }
  }

  button {
      border: 0;
      padding: 8px 12px;
      color: #FFF;
      border-radius: 10000px;
      background-color: #6F92BB;
  }

`;

export default Box;
