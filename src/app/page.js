"use client";
import "flowbite";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faScrewdriverWrench,
  faMicrochip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import RotatingText from "./components/RotatingText";
import Link from "next/link";
import HALO from "./components/vanta.halo.min.js";
import * as THREE from "three";

export default function Home() {
  useEffect(() => {
    function obfuscateEmail() {
      const emailElement = document.getElementById("email");
      const email = "info@codable.gr"
        .split("")
        .map((char) => `&#${char.charCodeAt()};`)
        .join("");
      emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
    }

    obfuscateEmail();

    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          baseColor: 0x41e827,
          backgroundColor: 0x0,
          amplitudeFactor: 0,
          xOffset: -0.08,
          size: 1.2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <main
      className="flex flex-col min-h-screen lg:h-screen justify-between px-16 max-sm:px-8 py-10 font-satoshi overflow-x-clip"
      ref={vantaRef}
    >
      <div className="flex flex-col lg:flex-row w-full h-full" id="mainContainer">
        <div className="flex flex-col w-full h-full font-black max-lg:justify-around lg:justify-between">
          <div className="flex w-full max-lg:justify-center lg:justify-start">
            <Link href="/">
              <h1 className="text-4xl">codable</h1>
            </Link>
          </div>

          <div className="flex max-lg:w-full w-4/5 max-lg:justify-center lg:justify-start max-lg:text-center lg:text-start">
            <div className="flex flex-row">
              <h2 className="lg:text-6xl text-4xl py-10">
                Empowering Your Digital Presence
              </h2>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:w-1/2 sm:w-full h-full justify-start"
          id="accordion-collapse"
          data-accordion=""
        >
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex bg-black items-center justify-between w-full mt-4 p-4 text-left text-xl text-white border border-white rounded-[15px] aria-expanded:rounded-b-none aria-expanded:bg-transparent aria-expanded:border-neutral-300  hover:border-neutral-300"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-1"
              id="buttonWithArrow"
            >
              <span className="font-bold">INFO</span>
              <div
                data-accordion-icon
                className="menuButtonArrow"
                aria-hidden="false"
              ></div>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-4 mb-5 border border-t-0 border-gray-200 animate-buttonReveal max-h-80 overflow-y-scroll">
              <FontAwesomeIcon
                icon={faInfo}
                className="fa-solid fa-info"
                style={{
                  color: "black",
                  fontSize: "1rem",
                  background: "white",
                  "border-radius": "100%",
                  padding: "0.25rem",
                  width: "1rem",
                  height: "1rem",
                  marginBottom: "1rem",
                  display: "flex",
                }}
              />
              <p className="mb-2">
                We're a dynamic team of digital nomads, unburdened by the
                confines of a traditional office. Our journey takes us across
                the globe as we work seamlessly to transform your ideas into
                immersive digital experiences. With expertise in cutting-edge
                technologies, we're your trusted partner for all things web and
                mobile. Our passion lies in pushing the boundaries of technology
                to deliver solutions that leave a lasting impression. Join us on
                the path to innovation and excellence, wherever it may lead.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex bg-black items-center justify-between w-full mt-4 p-4 text-left text-xl text-white border border-white rounded-[15px] aria-expanded:rounded-b-none aria-expanded:bg-transparent aria-expanded:border-neutral-300  hover:border-neutral-300"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span className="font-bold">SERVICES</span>
              <div
                data-accordion-icon
                className="menuButtonArrow"
                aria-hidden="false"
              ></div>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-4 mb-5 border border-t-0 border-gray-200 animate-buttonReveal max-h-80 overflow-y-scroll">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="fa-solid fa-screwdriver-wrench"
                style={{
                  color: "black",
                  fontSize: "1rem",
                  background: "white",
                  "border-radius": "100%",
                  padding: "0.25rem",
                  width: "1rem",
                  height: "1rem",
                  marginBottom: "1rem",
                  display: "flex",
                }}
              />
              <p className="mb-2">
                Are you considering a digital transformation for your business?
                At Codable, we offer a range of digital solutions to enhance
                your online presence. Whether you require a website, a mobile
                app, a portal, or a tailored solution for the tourism sector, we
                have the expertise to meet your needs. With years of experience
                working in the touristic industry and a history of portal
                development, we specialize in crafting digital experiences that
                cater to specific business requirements. Let us help bring your
                digital vision to life with our practical and tailored approach.
              </p>
              <p className="mt-6 mb-4 font-bold">Our Services:</p>
              <ul class="list-disc list-inside font-bold leading-loose">
                <li>
                  Web Development Services:
                  <ul class="list-disc list-inside pl-6 font-semibold">
                    <li className="font-light">WordPress Development</li>
                    <li className="font-light">Drupal Development</li>
                    <li className="font-light">Mobile-First Web Apps</li>
                  </ul>
                </li>
                <li>
                  App Development Expertise
                  <ul class="list-disc list-inside pl-6 font-semibold">
                    <li className="font-light">Java Development</li>
                    <li className="font-light">Spring Framework</li>
                    <li className="font-light">Angular</li>
                    <li className="font-light">React</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex bg-black items-center justify-between w-full mt-4 p-4 text-left text-xl text-white border border-white rounded-[15px] aria-expanded:rounded-b-none aria-expanded:bg-transparent aria-expanded:border-neutral-300  hover:border-neutral-300"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span className="font-bold">TECHNOLOGIES</span>
              <div
                data-accordion-icon
                className="menuButtonArrow"
                aria-hidden="false"
              ></div>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-4 mb-5 border border-t-0 border-gray-200 animate-buttonReveal max-h-80 overflow-y-scroll">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="fa-solid fa-microchip"
                style={{
                  color: "black",
                  fontSize: "1rem",
                  background: "white",
                  "border-radius": "100%",
                  padding: "0.25rem",
                  width: "1rem",
                  height: "1rem",
                  marginBottom: "1rem",
                  display: "flex",
                }}
              />
              <p className="mb-2">
                Behind our exceptional digital experiences lie a powerful
                arsenal of cutting-edge technologies. With expertise in
                WordPress, Drupal, Java, Spring, Angular, and React, we harness
                the latest and greatest tools to build your web and mobile
                solutions. WordPress and Drupal empower us to create versatile
                and customizable websites, while Java and Spring provide robust,
                secure foundations for your applications. Our mastery of Angular
                and React ensures dynamic and engaging interfaces. We blend
                these technologies seamlessly to deliver innovative and
                high-performance solutions tailored to your unique needs. Trust
                us to shape the future of your digital presence.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex bg-black items-center justify-between w-full mt-4 p-4 text-left text-xl text-white border border-white rounded-[15px] aria-expanded:rounded-b-none aria-expanded:bg-transparent aria-expanded:border-neutral-300  hover:border-neutral-300"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-4"
            >
              <span className="font-bold">CONTACT</span>
              <div
                data-accordion-icon
                className="menuButtonArrow"
                aria-hidden="false"
              ></div>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-4 mb-5 border border-t-0 border-gray-200 animate-buttonReveal max-h-80 overflow-y-scroll">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="fa-regular fa-paper-plane"
                style={{
                  color: "black",
                  fontSize: "1rem",
                  background: "white",
                  "border-radius": "100%",
                  padding: "0.25rem",
                  width: "1rem",
                  height: "1rem",
                  marginBottom: "1rem",
                  display: "flex",
                }}
              />
              <div className="mb-2">
                Feel free to reach out to us via email at <br></br>
                <p id="email" className="inline">
                  {" "}
                  [click to show email]
                </p>{" "}
                to start a conversation about how we can elevate your digital
                presence. We look forward to connecting with you and exploring
                the possibilities together.
              </div>
            </div>
          </div>

          <RotatingText />
        </div>
      </div>
    </main>
  );
}
