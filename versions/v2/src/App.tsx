import React from "react";

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Welcome to my site fellow humans and bots.

Type 'help' to view a list of available commands.
`;

const bannerCondensed =
"                                                                              \n" +
"  __      _               _   _                __                             \n" +
" / _\ ___| |__   __ _ ___| |_(_) __ _ _ __     \ \  __ _ _ __ ___   ___  ___  \n" +
" \ \ / _ \ '_ \ / _` / __| __| |/ _` | '_ \     \ \/ _` | '_ ` _ \ / _ \/ __| \n" +
" _\ \  __/ |_) | (_| \__ \ |_| | (_| | | | | /\_/ / (_| | | | | | |  __/\__ \ \n" +
" \__/\___|_.__/ \__,_|___/\__|_|\__,_|_| |_| \___/ \__,_|_| |_| |_|\___||___/ \n" +
"  \u00A9 " +
  getYear();

const prompt = ">";

function App() {
  return (
    <div>{bannerCondensed}</div>
  );
}

export default App;

