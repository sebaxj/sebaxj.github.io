import React, { useState } from 'react';
import Banner from './Banner';
import WelcomeMessage from './WelcomeMessage';
import CommandInput from './CommandInput';
import TerminalOutput from './TerminalOutput';

type TerminalProps = {
  terminalPrompt: string;
  banner: string;
  welcomeMessage: string;
};

const Terminal = (props: TerminalProps) => {
  const { terminalPrompt, banner, welcomeMessage } = props;
  const [output, setOutput] = useState<string[]>([]);

  const processInput = (input: string) => {
    switch (input) {
      case 'clear':
        setOutput([]);
        break;
      default:
        setOutput([...output, input]);
        break;
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-content">
        <Banner banner={banner} />
        <WelcomeMessage message={welcomeMessage} />
        <TerminalOutput output={output} />
        <CommandInput terminalPrompt={terminalPrompt} processInput={processInput} />
      </div>
    </div>
  );
};

export default Terminal;
