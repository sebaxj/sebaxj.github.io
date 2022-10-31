import React, { useEffect } from 'react';

type WelcomeMessageProps = {
  message: string;
};

const WelcomeMessage = (props: WelcomeMessageProps) => {
  const welcomeMessageRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    let index = 0;
    const typeText = setInterval(() => {
      if (!welcomeMessageRef.current) {
        return;
      }
      welcomeMessageRef.current.insertAdjacentText('beforeend', props.message[index++]);
      if (index === props.message.length) {
        clearInterval(typeText);
      }
    }, 30);
  }, [props.message]);
  return <div ref={welcomeMessageRef} className="terminal-welcome-message"></div>;
};

export default WelcomeMessage;
