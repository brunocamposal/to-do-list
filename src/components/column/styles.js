import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212427;
  padding: 20px 10px;
  border-radius: 5px;
  height: 40vw;
  width: 85%;
  margin: 15px 15px;
  overflow-y: auto;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  h1 {
    margin-bottom: 30px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 17pt;
    }

    height: 100vh;
  }
`;
