import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Friends, bots, potential employers, welcome to my website!

Type 'help' to view a list of available commands.
`;

const bannerCondensed =
  '  ____       _               _   _                   _                          \n' +
  ' / ___|  ___| |__   __ _ ___| |_(_) __ _ _ __       | | __ _ _ __ ___   ___  ___  \n' +
  " \\___ \\ / _ \\ '_ \\ / _` / __| __| |/ _` | '_ \\   _  | |/ _` | '_ ` _ \\ / _ \\/ __| \n" +
  '  ___) |  __/ |_) | (_| \\__ \\ |_| | (_| | | | | | |_| | (_| | | | | | |  __/\\__ \\ \n' +
  ' |____/ \\___|_.__/ \\__,_|___/\\__|_|\\__,_|_| |_| \\_____/\\__,_|_| |_| |_|\\___||___/ \n' +
  '  \u00A9 ' +
  getYear();

const prompt = '>';

function App() {
  return <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />;
}

export default App;
