import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { addQuestion } from '../../stores/survey/surveySlice';

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              onClick={() => {
                setVisible(false);
                addQuestion('select');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              객관식{' '}
            </Button>{' '}
            <Button
              onClick={() => {
                setVisible(false);
                addQuestion('text');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              단답식{' '}
            </Button>{' '}
            <Button
              onClick={() => {
                setVisible(false);
                addQuestion('textarea');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              서술식{' '}
            </Button>{' '}
          </div>
        }
        placement="right"
        trigger="click"
        open={visible}
        onOpenChange={handleVisibleChange}
      >
        {' '}
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>{' '}
      </Popover>{' '}
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
