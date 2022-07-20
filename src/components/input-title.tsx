type Props = {
  title: string;
  setTitle: Function;
}

const InputTitle = (props: Props) => {
  return (
    <div id="input-thumbnail-title">
      <textarea
        cols={80}
        rows={5}
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      ></textarea>
    </div>
  )
}

export default InputTitle