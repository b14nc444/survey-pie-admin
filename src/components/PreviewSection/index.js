import { useDispatch, useSelector } from 'react-redux';

import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  selectSurveyLoading,
  selectSurveyQuestions,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection() {
  const questions = useSelector(selectSurveyQuestions);
  const loading = useSelector(selectSurveyLoading);
  const dispatch = useDispatch();

  if (loading) {
    return <div> 로딩 중... </div>;
  }

  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };

  const handleMoveUpQuestion = (index) => {
    if (index === 0) {
      return;
    }
    dispatch(moveUpQuestion(index));
  };

  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) {
      return;
    }
    dispatch(moveDownQuestion(index));
  };

  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };

  return (
    <div>
      {' '}
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => {
            handleMoveUpQuestion(index);
          }}
          onDownButtonClick={() => {
            handleMoveDownQuestion(index);
          }}
          onDeleteButtonClick={() => {
            handleDeleteQuestion(index);
          }}
        >
          {' '}
          <Body type={question.type} options={question.options} />{' '}
        </Card>
      ))}{' '}
      <AddButton addQuestion={handleAddQuestion} />{' '}
    </div>
  );
}

export default PreviewSection;
