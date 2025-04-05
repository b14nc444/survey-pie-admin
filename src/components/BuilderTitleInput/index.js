import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectSurveyLoading, selectSurveyTitle, setTitle } from '../../stores/survey/surveySlice';

function BuilderTitleInput() {
  const dispatch = useDispatch();
  const title = useSelector(selectSurveyTitle);
  const loading = useSelector(selectSurveyLoading);

  if (loading) {
    return <Input placeholder="설문 제목을 입력하세요" value="" disabled />;
  }

  return (
    <Input
      placeholder="설문 제목을 입력하세요"
      value={title}
      onChange={(e) => {
        dispatch(setTitle(e.target.value));
      }}
    />
  );
}

export default BuilderTitleInput;
