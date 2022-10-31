type TerminalOutputProps = {
  output: string[];
};

const TerminalOutput = (props: TerminalOutputProps) => {
  const outputList = props.output.map((output, index) => {
    <div className="terminal-command-output">{output}</div>;
  });
  return <>{outputList}</>;
};

export default TerminalOutput;
