import React from 'react';
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
  const [output, setOutput] = React.useState<(string | JSX.Element)[]>([]);
  const outputRef = React.useRef<HTMLDivElement>(null);

  // effect to automatically scroll to input line
  const scrollToBottom = () => {
    outputRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(scrollToBottom, [output]);

  // functions to add glow to a string
  const glow = (text: string) => {
    return <span className="terminal-glow">{text}</span>;
  };
  const errorGlow = (text: string) => {
    return <span className="error-glow">{text}</span>;
  };

  const errorMessage: JSX.Element = (
    <div>
      {errorGlow('Error:')} type {glow('help')} to see a list of available commands.
    </div>
  );

  // command keys
  const commandKeys: string[] = ['help', 'about', 'portfolio', 'cv', 'website', 'socials', 'contact'];

  // commands
  const commands: { [key in typeof commandKeys[number]]: JSX.Element } = {
    help: (
      <div>
        <p>Type one of the following commands into the {glow('>')} prompt:</p>
        <dl>
          <dt>{glow('help')}</dt>
          <dd>well, you clearly know what this does already...</dd>
          <dt>{glow('about')}</dt>
          <dd>education, who I am, where I am, what I've done, and what I do now.</dd>
          <dt>{glow('portfolio')}</dt>
          <dd>information and links to my projects.</dd>
          <dt>{glow('website')}</dt>
          <dd>about this website.</dd>
          <dt>{glow('socials')}</dt>
          <dd>LinkedIn, Twitter, etc.</dd>
          <dt>{glow('contact')}</dt>
          <dd>how to contact me.</dd>
        </dl>
      </div>
    ),
    about: (
      <div>
        <p>
          I graduated from Stanford University in 2022 with a Bachelor of Arts in {glow('Music')} with a concentration
          in {glow('Human-Computer Interaction')}. Currently, I am still at Stanford University pursuing a Master of
          Science in {glow('Computer Science')}.
        </p>
        <p>
          My specialties are {glow('backend microservice engineering')} and {glow('full-stack web development')}.
          Additionally, I am passionate about {glow('systems')} and {glow('theory')}.
        </p>
        <p>
          <div className="languages-property">{glow('Typescript:')}</div>
          <div className="languages-value">[####-]</div>
          <div className="languages-property">{glow('Java:')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('C/C++:')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('Python:')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('HTML:')}</div>
          <div className="languages-value">[####-]</div>
          <div className="languages-property">{glow('CSS:')}</div>
          <div className="languages-value">[##---]</div>
          <div className="languages-property">{glow('React:')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('Express:')}</div>
          <div className="languages-value">[####-]</div>
          <div className="languages-property">{glow('MongoDB:')}</div>
          <div className="languages-value">[####-]</div>
          <div className="languages-property">{glow('Nodejs:')}</div>
          <div className="languages-value">[####-]</div>
          <div className="languages-property">{glow('Spring Boot:')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('Docker')}</div>
          <div className="languages-value">[###--]</div>
          <div className="languages-property">{glow('Unix:')}</div>
          <div className="languages-value">[#####]</div>
          <div className="languages-property">{glow('Git:')}</div>
          <div className="languages-value">[#####]</div>
          <div className="languages-property">{glow('AWS:')}</div>
          <div className="languages-value">[###--]</div>
        </p>
      </div>
    ),
    portfolio: (
      <div className="terminal-link">
        <a href="https://github.com/sebaxj/baremetal-raspberrypi-doc" target="_blank" rel="noopener noreferrer">
          {glow('Baremetal Raspberry Pi Operating System')}
        </a>
        <p>
          Baremetal operating system with a functional shell, graphics library, and audio driver. Implemented in{' '}
          {glow('C')} and {glow('Assembly')}.
        </p>
        <a href="https://github.com/sebaxj/project-031421" target="_blank" rel="noopener noreferrer">
          {glow('Electrocardiogram Sonification')}
        </a>
        <p>
          Probability-based algorithm for sonification of electrocardiogram data. Implemented in {glow('Python')} and{' '}
          {glow('C++')}.
        </p>
        <a href="https://github.com/sebaxj/Jumper" target="_blank" rel="noopener noreferrer">
          {glow('Jumper')}
        </a>
        <p>
          A hybrid "Flappy Bird" and "Jetpack Joyride" game implmented using a capacitive touch sensor integrated on a
          8x8 LED array. The game is controlled using an {glow('Arduino')}.
        </p>
        <a href="https://ccrma.stanford.edu/~sebaxj/256a/final/index.html" target="_blank" rel="noopener noreferrer">
          {glow('Musical Operation')}
        </a>
        <p>
          Desktop audio-visual game implemented in {glow('Unity')} and {glow('ChucK')}.
        </p>
        <a href="https://ccrma.stanford.edu/~sebaxj/220b/final/index.html" target="_blank" rel="noopener noreferrer">
          {glow('Do what you Love, Love what you Do')}
        </a>
        <p>
          Audio-visual granular-synthesis instrument implemented in {glow('C++')} and {glow('ChucK')}.
        </p>
        <a href="https://ccrma.stanford.edu/~sebaxj/256a/hw2/index.html" target="_blank" rel="noopener noreferrer">
          {glow('Galactic Sistine Chapel')}
        </a>
        <p>
          Audio visualizer using FFT implemented in {glow('Unity')} and {glow('ChucK')}.
        </p>
        <a href="https://ccrma.stanford.edu/~sebaxj/256a/hw3/index.html" target="_blank" rel="noopener noreferrer">
          {glow('ECG Sequencer')}
        </a>
        <p>
          Audio sequencer implemented in {glow('Unity')} and {glow('ChucK')}.
        </p>
        <a
          href="https://ccrma.stanford.edu/~sebaxj/assets/turn_taking_duet_paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {glow(
            'Does performance monitoring differ between scored and improvised musical actions?: A turn-taking piano-duet EEG study',
          )}
        </a>
        <p>Paper on the role of partner-monitoring as a function of score-reading and improvisation on a keyboard.</p>
        <a
          href="https://ccrma.stanford.edu/~sebaxj/assets/music451a-final-report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {glow('Gender Priming Pitch Height and Instrument Timbre Perception: Differentiating the N400 ERP Component')}
        </a>
        <p>EEG study conducted in the Neuromusic Lab at the Center for Computer Research in Music and Acoustics.</p>
        <a
          href="https://ccrma.stanford.edu/~sebaxj/assets/music451c-final-report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {glow(
            'Alpha Power as a Constituent of Agency and Creativity: Looking at a Pilot Piano Turn-Taking Improvisation Duet',
          )}
        </a>
        <p>EEG study conducted in the Neuromusic Lab at the Center for Computer Research in Music and Acoustics.</p>
        <a href="https://ccrma.stanford.edu/~sebaxj/assets/RBA1.pdf" target="_blank" rel="noopener noreferrer">
          {glow('The Rebellion of Music in Medicine: Using Music Therapy to replace Opioids')}
        </a>
        <p>Paper on the use of music therapy as an alternative to opiods for pain management.</p>
      </div>
    ),
    cv: (
      <div className="terminal-link">
        <a href="https://ccrma.stanford.edu/~sebaxj/assets/CV.pdf" target="_blank" rel="noopener noreferrer">
          View my {glow('CV')} here!
        </a>
      </div>
    ),
    website: (
      <div className="terminal-link">
        <p>
          This website was made using {glow('Typescript')}, {glow('React')}, and vanilla {glow('CSS')}.
        </p>
        <a
          href="https://github.com/sebaxj/sebaxj.github.io/tree/main/versions/v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on {glow('GitHub')}
        </a>
        <p>Inspiration borrowed from Craig Feldman.</p>
      </div>
    ),
    socials: (
      <div className="terminal-link">
        <a href="https://www.linkedin.com/in/sebaxj/" target="_blank" rel="noopener noreferrer">
          {glow('LinkedIn')}
        </a>
        <br />
        <a href="https://github.com/sebaxj" target="_blank" rel="noopener noreferrer">
          {glow('GitHub')}
        </a>
      </div>
    ),
    contact: <div>{glow('Email:')} sebaxj 'at' stanford.edu</div>,
  };

  const processInput = (input: string) => {
    input = input.trim().toLowerCase();

    // store record of command
    const commandRecord = (
      <div ref={(el) => (outputRef.current = el)} className="terminal-command-record">
        <span className="terminal-prompt">{terminalPrompt}</span> <span>{input}</span>
      </div>
    );

    if (input === 'clear') {
      setOutput([]);
    } else if (commandKeys.includes(input)) {
      setOutput([...output, commandRecord, <div className="terminal-command-output">{commands[input]}</div>]);
    } else {
      // display error message
      setOutput([...output, commandRecord, <div className="terminal-command-output">{errorMessage}</div>]);
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
