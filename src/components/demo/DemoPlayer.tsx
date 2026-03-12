'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DemoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrubberRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [ended, setEnded] = useState(false)
  const [dragging, setDragging] = useState(false)

  const toggle = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setEnded(false)
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || dragging) return
    setCurrentTime(v.currentTime)
    setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
  }, [dragging])

  const handleEnded = useCallback(() => {
    setPlaying(false)
    setEnded(true)
  }, [])

  const handleLoaded = useCallback(() => {
    if (videoRef.current) setDuration(videoRef.current.duration)
  }, [])

  const seekToRatio = useCallback((clientX: number) => {
    const v = videoRef.current
    const bar = scrubberRef.current
    if (!v || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    v.currentTime = ratio * v.duration
    setProgress(ratio * 100)
    setCurrentTime(ratio * v.duration)
  }, [])

  const handleScrubMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
    seekToRatio(e.clientX)
  }, [seekToRatio])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => seekToRatio(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [dragging, seekToRatio])

  const restart = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play()
    setPlaying(true)
    setEnded(false)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggle])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <main className="min-h-screen bg-brand-graphite flex flex-col">

      {/* Top bar — logo centred like main navbar */}
      <div className="relative flex items-center justify-center px-6 h-14 border-b border-brand-white/8 shrink-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/kapslock-full-v-sand.png"
            alt="Kapslock"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <Link
          href="/"
          className="absolute right-6 font-sans text-xs tracking-[0.18em] uppercase text-brand-white/50 hover:text-brand-white transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span>
          <span>Zpět</span>
        </Link>
      </div>

      {/* Video area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 gap-8">

        {/* Label */}
        <div className="text-center">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-brand-blue block mb-2">
            KAPSLOCK
          </span>
          <h1 className="font-serif text-2xl md:text-3xl text-brand-white">
            Ukázka použití
          </h1>
        </div>

        {/* Video wrapper */}
        <div className="w-full max-w-3xl">
          <div
            className="relative bg-black cursor-pointer group"
            onClick={toggle}
          >
            <video
              ref={videoRef}
              src="/images/videos/demonstration.webm"
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoaded}
              onEnded={handleEnded}
              className="w-full block"
            />

            {(!playing || ended) && (
              <div className="absolute inset-0 flex items-center justify-center bg-brand-graphite/40">
                {ended ? (
                  <button
                    onClick={(e) => { e.stopPropagation(); restart() }}
                    className="flex flex-col items-center gap-3 group/btn"
                  >
                    <div className="w-16 h-16 rounded-full border border-brand-sand/60 flex items-center justify-center group-hover/btn:border-brand-sand transition-colors duration-200">
                      <svg className="w-6 h-6 text-brand-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-brand-sand/70">
                      Přehrát znovu
                    </span>
                  </button>
                ) : (
                  <div className="w-16 h-16 rounded-full border border-brand-white/40 flex items-center justify-center group-hover:border-brand-white/80 transition-colors duration-200">
                    <svg className="w-6 h-6 text-brand-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Controls bar */}
          <div className="bg-brand-graphite border border-brand-white/8 border-t-0 px-4 py-3 flex items-center gap-4">

            {/* Play/pause */}
            <button
              onClick={toggle}
              className="shrink-0 text-brand-white/70 hover:text-brand-white transition-colors duration-200"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Time */}
            <span className="font-sans text-[11px] text-brand-white/40 tabular-nums shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Scrubber — tall hit area, thin visual track */}
            <div
              ref={scrubberRef}
              className="flex-1 relative flex items-center cursor-pointer h-8"
              onMouseDown={handleScrubMouseDown}
            >
              {/* Track */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-brand-white/15 pointer-events-none">
                {/* Fill */}
                <div
                  className="absolute top-0 left-0 h-full bg-brand-sand"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* Thumb — always visible when progress > 0 */}
                <div
                className="absolute w-3 h-3 bg-brand-sand rounded-full pointer-events-none"
                style={{
                    left: `${progress}%`,
                    top: '50%',
                    transform: `translate(-50%, -50%) scale(${dragging ? 1.4 : 1})`,
                    transition: 'transform 0.1s',
                }}
                />
            </div>

          </div>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="inline-block font-sans border border-brand-white/20 text-brand-white/55 px-8 py-3 text-sm tracking-widest uppercase hover:border-brand-white/50 hover:text-brand-white transition-colors duration-300 mt-4"
        >
          ← Zpět na web
        </Link>

      </div>
    </main>
  )
}
