import React from 'react'
import {useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children}) => {
    const lenis = useRef(null)

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smooth: true,
            smoothTouch: true
        })
        const raf = (time) => {
            lenis.current.raf(time);
            ScrollTrigger.update()
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.current.destroy()
        }
    }, [])

    return <>{children}</>
}
export default SmoothScroll
