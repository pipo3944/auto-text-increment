const replaceAll = (str:string, before:string, after:string) => {
  return str.split(before).join(after);
}

export default replaceAll;