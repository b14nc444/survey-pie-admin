import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ onClick }) {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        {' '}
        <PlusCircleOutlined />{' '}
      </IconButton>{' '}
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2.4rem;
`;

export default AddButton;
