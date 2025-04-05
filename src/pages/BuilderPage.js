import { Col, Input, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../service/fetchSurvey';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from '../stores/survey/surveySlice';

function BuilderPage() {
  const survey = useSelector((state) => state.survey.data);
  const loading = useSelector((state) => state.survey.loading);
  const error = useSelector((state) => state.survey.error);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (!survey || loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> Error: {error} </div>;
  }

  return (
    <MainLayout>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력하세요"
            value={survey.title}
            onChange={(e) => {
              dispatch(setTitle(e.target.value));
            }}
          />{' '}
          <PreviewSection
            questions={survey.questions}
            addQuestion={(type) => {
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
            deleteQuestion={(index) => {
              dispatch(deleteQuestion(index));
            }}
          />{' '}
        </Col>{' '}
        <Col flex="320px">
          <OptionSection />
        </Col>{' '}
      </Row>{' '}
    </MainLayout>
  );
}

export default BuilderPage;
