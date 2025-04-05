import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../service/fetchSurvey';

function BuilderPage() {
  const loading = useSelector((state) => state.survey.loading);
  const error = useSelector((state) => state.survey.error);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> Error: {error} </div>;
  }

  return (
    <MainLayout>
      <Row>
        <Col flex="auto">
          <BuilderTitleInput />
          <PreviewSection />{' '}
        </Col>{' '}
        <Col flex="320px">
          <OptionSection />
        </Col>{' '}
      </Row>{' '}
    </MainLayout>
  );
}

export default BuilderPage;
