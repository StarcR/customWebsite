import DropdownExample from '../components/DropdownExample';
import ButtonExample from '../components/ButtonExample';
import FormExampleSubmitText from '../components/FormExpampleSubmitText';
import'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <div>
      <h2>Hello</h2> 
      <ButtonExample />
      <br></br>
      <FormExampleSubmitText />
      <br></br>
      <DropdownExample />
    </div>
  )
}
