import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    useEffect(() => {

        const homeEl = document.querySelector(".home");
        if (homeEl) {
            const scroll = new LocomotiveScroll({
                el: homeEl,
                smooth: true,
            });

            ScrollTrigger.scrollerProxy(".home", {
                scrollTop(value) {
                    return arguments.length
                        ? scroll.scrollTo(value, 0, 0)
                        : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                pinType: homeEl.style.transform ? "transform" : "fixed",
            });

            const sections = document.querySelectorAll(".section");
            sections.forEach((section) => {
                gsap.to(section, {
                    backgroundPositionY: "50%",
                    scrollTrigger: {
                        trigger: section,
                        scroller: ".home",
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    },
                });
            });

            ScrollTrigger.addEventListener("refresh", () => scroll.update());
            ScrollTrigger.refresh();

            return () => {
                scroll.destroy();
                ScrollTrigger.removeEventListener("refresh", () => scroll.update());
            };
        }
    }, []);

    return (
        <div className="home">
            <div className="section musician">
                <div className="content">
                    <h1>Musician</h1>
                    <p>From bass grooves to band gigs, Nick's creativity knows no bounds.</p>
                </div>
            </div>
            <div className="section security-guard">
                <div className="content">
                    <h1>Security Guard</h1>
                    <p>Protecting assets and solving problems with precision and care.</p>
                </div>
            </div>
            <div className="section uncle">
                <div className="content">
                    <h1>World’s #1 Uncle</h1>
                    <p>It’s unofficial, but the family agrees—Nick’s got the title.</p>
                </div>
            </div>
            <div className="section cat-dad">
                <div className="content">
                    <h1>Cat Dad</h1>
                    <p>Loyal servant to [cat's name], the majestic supervisor of all projects.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;