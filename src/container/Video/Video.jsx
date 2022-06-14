import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'
import './Video.scss';

const Video = () => {

  const [playVideo, setplayVideo] = useState(false)
  const vidRef = useRef(); 
  //返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loopcontrols={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? (<BsPauseFill color="#fff" fontSize={30} />
            ) : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Video;
