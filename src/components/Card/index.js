import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

function Card({ title, desc, children, onUpButtonClick, onDownButtonClick, onDeleteButtonClick }) {
  return (
    <CardWrapper>
      {' '}
      <Heading>
        <Title> {title} </Title> <Desc> {desc} </Desc>{' '}
      </Heading>{' '}
      <Body> {children} </Body>{' '}
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" icon={<UpOutlined />} onClick={onUpButtonClick} />{' '}
          <Button type="text" icon={<DeleteOutlined />} onClick={onDeleteButtonClick} />{' '}
          <Button type="text" icon={<DownOutlined />} onClick={onDownButtonClick} />{' '}
        </ButtonGroup>{' '}
      </ButtonGroupWrapper>{' '}
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: calc(100%);
  top: 0;
  display: none;
`;

const ButtonGroup = styled.div`
  background: #ffffff;
  margin-left: 16px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 400px;
  margin: 30px auto;
  background-color: #ffffff;
  position: relative;

  &:hover {
    ${ButtonGroupWrapper} {
      display: block;
    }
  }
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
