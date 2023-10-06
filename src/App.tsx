import { useState } from "react";

import Container from "./components/Container/Container";

import "./App.css";

function App() {
  const [state, setState] = useState<boolean>(false);

  const props = {
    collapsedLabel: false,
    expandedLabel: true,
  };

  const onClick = () => {
    state === false ? setState(true) : setState(false);
  };

  return <Container {...(state ? props : "")} callback={onClick} />;
}

export default App;
