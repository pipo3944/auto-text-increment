import replaceAll from "./replaceAll";

const myReplaceStr = '_____POSTSTR____';

const incrementer = (code: string, replaceString: string, startingValue: number, increment?: number, degits?: number) => {
  let myCode = replaceAll(code, replaceString, myReplaceStr);
  let counter:number = parseInt(startingValue);
  
  while(myCode.match(myReplaceStr)) {
    myCode = myCode.replace(myReplaceStr, degits ? String(parseInt(counter)).padStart(parseInt(degits), '0') : String(parseInt(counter)));
    counter += increment?parseInt(increment):1;
  }
  
  return myCode;
}

export default incrementer;