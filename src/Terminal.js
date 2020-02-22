import React from 'react';
import { connect } from 'react-redux';
import {
  addCharacter,
  deleteCharacter,
  toggleCursorColor,
  moveCursorLeft,
  moveCursorRight,
  resurrectLastCommandBackwards,
  resurrectLastCommandForward,
  submitPrompt,
} from './actions';
import {
  isArrowUp,
  isArrowLeft,
  isArrowRight,
  isBackspace,
  isEnter,
  isValidKey,
  isArrowDown,
} from './utils';

const r = 201.64 / 21;

function Cursor({ color, index, shift = 0 }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: '21px',
        width: '10px',
        position: 'absolute',
        marginLeft: `${r * (index + shift)}px`,
      }}
    ></div>
  );
}

function Input({ text }) {
  return <div>{text}</div>;
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
      }}
    >
      <ConnectedCursor />
      <ConnectedInput />
    </div>
  );
}

function Prompt() {
  return <KeyboardInput />;
}

function Output({ texts }) {
  return (
    <div>
      {texts.map(text => (
        <p>{text}</p>
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
  if (blinkableCursor) {
    setInterval(() => {
      toggleCursorColor();
    }, 1200);
  }

  document.addEventListener('keydown', function(event, ...rest) {
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
    } else if (isBackspace(event)) {
      deleteCharacter();
    } else if (isValidKey(event)) {
      addCharacter(event.key);
    }
  });

  return (
    <div
      style={{
        backgroundColor: 'black',
        width: '500px',
        height: '400px',
        fontFamily: 'Roboto Mono',
        margin: '24px',
        color: '#75FA4C',
      }}
    >
      <ConnectedOutput />
      <Prompt />
    </div>
  );
}

const ConnectedTerminal = connect(
  null,

  (dispatch, ownProps) => ({
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
