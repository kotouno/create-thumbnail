import React from 'react'

type Props = {
  emoji: string;
  title: string;
}

const Canvas = (props: Props) => {
  const oddEmojiRow: React.ReactNode[]= [];
  const evenEmojiRow: React.ReactNode[] = [];

  for (let i = 0; i < 10; i++) {
    if (i === 9) {
      evenEmojiRow.push(<div>{props.emoji}</div>);
    } else {
      oddEmojiRow.push(<div>{props.emoji}</div>);
      evenEmojiRow.push(<div>{props.emoji}</div>);
    }
  }

  return (
    <div id="canvas">
      <div className="bg">
        <div>{evenEmojiRow}</div>
        <div>{oddEmojiRow}</div>
        <div>{evenEmojiRow}</div>
        <div>{oddEmojiRow}</div>
        <div>{evenEmojiRow}</div>
        <div>{oddEmojiRow}</div>
        <div>{evenEmojiRow}</div>
        <div>{oddEmojiRow}</div>
      </div>
      <div className="rounded-square">
        { props.title }
      </div>
    </div>
  )
}

export default Canvas