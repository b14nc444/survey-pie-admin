import SelectInput from '../SelectInput';
import TextareaInput from '../TextareaInput';
import TextInput from '../TextInput';

const Body = ({ type, options }) => {
  let Component;

  if (type === 'text') {
    Component = TextInput;
  } else if (type === 'textarea') {
    Component = TextareaInput;
  } else if (type === 'select') {
    Component = SelectInput;
  }

  return <Component options={options} />;
};

export default Body;
