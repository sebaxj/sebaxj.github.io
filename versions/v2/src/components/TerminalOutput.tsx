type TerminalOutputProps = {
  output: (string | JSX.Element)[];
};

const TerminalOutput = (props: TerminalOutputProps) => {
  return <div>{props.output}</div>;
};

export default TerminalOutput;
