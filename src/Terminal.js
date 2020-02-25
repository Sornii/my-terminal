import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  addCharacter,
  deleteCharacter,
  moveCursorLeft,
  moveCursorRight,
  resurrectLastCommandBackwards,
  resurrectLastCommandForward,
  submitPrompt,
  toggleCursorColor,
} from './actions';
import {
  isArrowDown,
  isArrowLeft,
  isArrowRight,
  isArrowUp,
  isBackspace,
  isEnter,
  isValidKey,
} from './utils';

const characterWidth = 432.08 / 45;

function Cursor({ color, index, shift = 0 }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: '18px',
        width: `${characterWidth}px`,
        position: 'relative',
        left: `${characterWidth * (index + shift)}px`,
      }}
    ></div>
  );
}

function Input({ text }) {
  return (
    <pre
      style={{
        height: '18px',
        marginLeft: `-${characterWidth}px`,
      }}
    >
      unknown@internet: {text}
    </pre>
  );
}

const ConnectedInput = connect(({ terminal }) => ({
  text: terminal.input,
}))(Input);

const ConnectedCursor = connect(({ terminal }) => ({
  color: terminal.cursor,
  index: terminal.position,
}))(Cursor);

function KeyboardInput() {
  return (
    <div
      style={{
        display: 'flex',
        height: '18px',
      }}
    >
      <ConnectedCursor shift={18} />
      <ConnectedInput />
    </div>
  );
}

function Prompt() {
  return <KeyboardInput />;
}

function Output({ texts }) {
  return (
    <div
      style={{
        flexGrow: 0,
        flexShrink: 0,
      }}
    >
      {texts.map((text, index) => (
        <pre key={index}>{text}</pre>
      ))}
    </div>
  );
}

const ConnectedOutput = connect(({ terminal }) => ({
  texts: terminal.output,
}))(Output);

function Terminal({
  blinkableCursor,
  toggleCursorColor,
  addCharacter,
  submitPrompt,
  deleteCharacter,
  moveCursorRight,
  moveCursorLeft,
  resurrectLastCommandBackwards,
  resurrectLastCommandForward,
}) {
  const endRef = useRef(null);

  if (blinkableCursor) {
    setInterval(() => {
      toggleCursorColor();
    }, 1200);
  }

  document.addEventListener('keydown', function(event, ...rest) {
    event.preventDefault();
    if (isArrowDown(event)) {
      resurrectLastCommandForward();
    } else if (isArrowUp(event)) {
      resurrectLastCommandBackwards();
    } else if (isArrowLeft(event)) {
      moveCursorLeft();
    } else if (isArrowRight(event)) {
      moveCursorRight();
    } else if (isEnter(event)) {
      submitPrompt();
      endRef.current.scrollIntoView();
    } else if (isBackspace(event)) {
      deleteCharacter();
    } else if (isValidKey(event)) {
      addCharacter(event.key);
    }
  });

  return (
    <div className="Terminal">
      <ConnectedOutput />
      <Prompt />
      <div ref={endRef} />
    </div>
  );
}

const ConnectedTerminal = connect(
  null,

  dispatch => ({
    toggleCursorColor: () => dispatch(toggleCursorColor()),
    addCharacter: character => dispatch(addCharacter(character)),
    deleteCharacter: character => dispatch(deleteCharacter(character)),
    submitPrompt: character => dispatch(submitPrompt(character)),
    moveCursorRight: character => dispatch(moveCursorRight(character)),
    moveCursorLeft: character => dispatch(moveCursorLeft(character)),
    resurrectLastCommandBackwards: character =>
      dispatch(resurrectLastCommandBackwards(character)),
    resurrectLastCommandForward: character =>
      dispatch(resurrectLastCommandForward(character)),
  }),
)(Terminal);

export { ConnectedTerminal };
