type TerminalOutputProps = {
  output: (string | JSX.Element)[];
};

const TerminalOutput = (props: TerminalOutputProps) => {
  /*
   TODO: why doesn' this display the output?
  const outputList = props.output.map((output, index) => {
    <div key={index}>{output}</div>;
  });
  */

  return <div>{props.output}</div>;
};

export default TerminalOutput;
