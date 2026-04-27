import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function HLSVideo({ src, grayscale = false }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      loop
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', zIndex: 0,
        filter: grayscale ? 'saturate(0)' : 'none',
      }}
    />
  )
}
