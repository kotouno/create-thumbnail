import React, { useEffect, useRef, useState } from 'react';

const useDetectClickOut = (initState: boolean) => {
  // 何やってんだこれ
  interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
  }

  const triggerRef = useRef<HTMLDivElement>(null); // optional
  const nodeRef = useRef<HTMLDivElement>(null); // required

  const [show, setShow] = useState(initState);
  // anyじゃないとエラー出ちゃう
  // https://tech-1natsu.hatenablog.com/entry/2021/03/08/211324
  const handleClickOutside: any = (event: HTMLElementEvent<HTMLElement>) => {
    // if click is on trigger element, toggle modal
    if(triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }

    // if modal is open and click is outside modal, close it
    if(nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    triggerRef,
    nodeRef,
    show,
    setShow
  }
 }

 export default useDetectClickOut;