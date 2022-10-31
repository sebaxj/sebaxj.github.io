import React, { useState } from 'react';
import Banner from './Banner';
import WelcomeMessage from './WelcomeMessage';
import CommandInput from './CommandInput';

type TerminalProps = {
  terminalPrompt?: string;
  banner?: string;
  welcomeMessage?: string;
};

const Terminal = (props: TerminalProps) => {
  const { terminalPrompt, banner, welcomeMessage } = props;
  const [output, setOutput] = useState<string[]>([]);

  return (
    <div className="terminal-container">
      <div className="terminal-content">
        <Banner banner={banner} />
        <WelcomeMessage message={welcomeMessage} />
        <CommandInput terminalPrompt={terminalPrompt} />
      </div>
    </div>
  );
};

export default Terminal;
