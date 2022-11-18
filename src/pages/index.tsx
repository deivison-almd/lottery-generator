import styles from '../styles/Home.module.css';
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  /* color: #6e7681; */
  color: #f56121;
  max-width: 25ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Header = styled.header`
  padding: 1px 25px;
  background: #121225;
  position: absolute;
  width: 100vw;
`;

const Content = styled.main`
  background-color: #6e7681;
  height: 100vh;
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  float: right;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Button = styled.button`
  background: #1ea841;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 0.25em 1em;
  margin-top: 25%;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #4ca867;
  }
`;

export default function Home() {
  return (
    <>
      <Header>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          dolore laudantium similique cum ut, autem quam recusandae nam omnis
          vero quaerat labore asperiores quibusdam velit? Iure ipsa quae esse
          delectus.
        </Title>
      </Header>
      <Content>
        <Button>
          Generate
          <Spinner />
        </Button>
      </Content>
    </>
  );
}
