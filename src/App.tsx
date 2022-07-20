import { useState } from 'react';
import './App.scss';
import Canvas from './components/canvas';
import EmojiPicker from './components/emoji-picker'
import InputTitle from './components/input-title';
import SaveImageButton from './components/save-image-button';

function App() {
  const [emoji, setEmoji] = useState<string>('🍳');
  const [title, setTitle] = useState<string>('LINEBOTとGASで共有家計簿作ってみた');

  return (
    <div className="App">
      <div id="title">サムネイルジェネレーター</div>
      <Canvas emoji={emoji} title={title} />
      <div id="thumbnail-setting">
        <EmojiPicker emoji={emoji} setEmoji={setEmoji} />
        <InputTitle title={title} setTitle={setTitle} />
      </div>
      <SaveImageButton />
    </div>
  );
}

export default App;
