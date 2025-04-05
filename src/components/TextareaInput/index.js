import { Input } from 'antd';

const { TextArea } = Input;

function TextareaInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextareaInput;
