import { toJpeg } from 'html-to-image';

const SaveImageButton = () => {

  const saveImage = () => {
    const canvas: HTMLElement | null = document.getElementById('canvas');
    if (canvas === null) {
      alert('画像の生成に失敗しました。');
      return;
    } else {
      toJpeg(canvas, {
        canvasWidth: 1024,
        canvasHeight: 512,
      })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'thumbnail.jpeg';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    }
  }
  return (
    <div id="save-image">
      <button type="button" onClick={() => saveImage()}>
        画像を保存する
      </button>
    </div>
  )
}

export default SaveImageButton