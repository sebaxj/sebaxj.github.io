import React, { useState } from 'react';

type CommandInputProps = {
  terminalPrompt?: string;
};

const CommandInput = (props: CommandInputProps) => {
  const [command, setCommand] = useState('');

  const handleCommandChange = (input: React.ChangeEvent<HTMLInputElement>): void => {
    setCommand(input.target.value);
  };

  const handleInputKeyDown = (input: React.KeyboardEvent<HTMLInputElement>): void => {
    switch (input.key) {
      case 'Enter':
        setCommand('');
        break;
    }
  };

  return (
    <div className="terminal-input-area">
      <span className="terminal-prompt">{props.terminalPrompt}</span>
      <form>
        <input
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          value={command}
          onChange={handleCommandChange}
          onKeyDown={handleInputKeyDown}
        />
      </form>
    </div>
  );
};

export default CommandInput;
