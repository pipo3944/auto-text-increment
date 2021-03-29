import React, { useCallback, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import incrementer from '../../util/incrementer';
import BeContainer from '../common/BeContainer';
import BePrism from '../common/BePrism';
import BePrismEditor from '../common/BePrism/BePrismEditor';

const expCode01 = `http://www.example.com/item_[x].html
http://www.example.com/item_[x].html
http://www.example.com/item_[x].html`;
const expCode02 = `http://www.example.com/item_1.html
http://www.example.com/item_2.html
http://www.example.com/item_3.html`;

type HomeMainProps = {
}
const HomeMain: React.FC<HomeMainProps> = () => {
  const [code, setCode] = useState<string>('');
  const [startingValue, setStartingValue] = useState<number>(1);
  const [replaceString, setReplaceString] = useState<string>('[x]');
  const [digits, setDigits] = useState<number>(1);
  const [increment, setIncrement] = useState<number>(1);

  const [isConverted, setConverted] = useState<boolean>(false);
  const [convertedCode, setConvertedCode] = useState<string>('');

  const convert = useCallback(() => {
    setConvertedCode(incrementer(code, replaceString, startingValue, increment, digits));
    setConverted(true);
  }, [code, digits, increment, replaceString, startingValue]);

  const reflesh = useCallback(() => {
    setCode('')
    setConvertedCode('');
    setConverted(false);
  }, []);
  
  return (
    <BeContainer>
      <Header as='h1' textAlign="center">Online String Incremeter</Header>
      
      <p>
        By using this page, the work of allocating the index will be much easier! <br/>
        Please take advantage of it!
      </p>

      <h2>Example</h2>      
      <BePrism code={expCode01} />

      <p>
        The following text can be converted using the default setting.
      </p>
      <BePrism code={expCode02} />

      <Header size='large' textAlign="center">Let's Try!</Header>
      

      <Form>
        <Form.Group widths='equal'>
          <Form.Input value={startingValue} fluid label='Starting value' placeholder='0' type="number" onChange={(_:any, {value}: any) => setStartingValue(value) } />
          <Form.Input value={replaceString} fluid label='Replace string' placeholder='[x]' onChange={(_:any, {value}: any) => setReplaceString(value) } />
          <Form.Input value={increment} fluid label='Increment' placeholder='1' type="number" onChange={(_:any, {value}: any) => setIncrement(value) } />
          <Form.Input value={digits} fluid label='Digits' placeholder='1' type="number" onChange={(_:any, {value}: any) => setDigits(value) } />
        </Form.Group>
      </Form>
      <BePrismEditor code={code} onChange={setCode} />

      <div style={{textAlign: 'center'}}>
        <Button positive style={{margin: '2em 1em'}} onClick={convert}>Convert!!</Button>
        <Button color='purple' style={{margin: '2em 1em'}} onClick={reflesh}>Refresh</Button>
      </div>

      {
        isConverted && (
          <BePrism code={convertedCode} />
        )
      }

    </BeContainer>
  );
};

export default HomeMain;
