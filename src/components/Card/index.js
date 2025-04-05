import styled from 'styled-components';

function Card({ title, desc, children }) {
  return (
    <CardWrapper>
      {' '}
      <Heading>
        <Title> {title} </Title> <Desc> {desc} </Desc>{' '}
      </Heading>{' '}
      <Body> {children} </Body>{' '}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 400px;
  margin: 30px auto;
  background-color: #ffffff;
`;

const Heading = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 16px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 14px;
  color: #666666;
  margin-left: 8px;
`;

const Body = styled.div`
  padding: 16px;
`;

export default Card;
