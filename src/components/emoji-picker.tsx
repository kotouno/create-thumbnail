import React, { useState } from 'react';
import Picker, { IEmojiData } from "emoji-picker-react";
import useDetectClickOut from '../hooks/useDetectClickOut';

type Props = {
  emoji: string;
  setEmoji: Function;
}

const EmojiPicker = (props: Props) => {
  // emoji-pickerで絵文字を選択したときに返ってくるオブジェクト
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>({
    activeSkinTone: 'neutral',
    emoji: props.emoji,
    names: [''],
    originalUnified: '',
    unified: '',
  });

  const { show, nodeRef, triggerRef } = useDetectClickOut(false);

  const onEmojiClick = (
    event: React.MouseEvent,
    emojiObject: IEmojiData
  ) => {
    setChosenEmoji(emojiObject);
    props.setEmoji(emojiObject.emoji);
  };

  return (
    <div id="emoji-picker">
      <div className="preview">{chosenEmoji.emoji}</div>
      <div className="message" ref={triggerRef}>絵文字を選択する</div>
      <div className="picker" ref={nodeRef} style={{ display: show ? 'block' : 'none' }}>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
    </div>
  )
}

export default EmojiPicker