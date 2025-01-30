import { useEffect } from "react";
import bedi from "../assets/bedi.jpg"
import WaveLinesDesktop2 from "../assets/backgrounds/WaveLinesDesktop2.svg"
import WaveLinesDesktop1 from "../assets/backgrounds/WaveLinesDesktop1.svg"
import WaveLinesDesktop3 from "../assets/backgrounds/WaveLinesDesktop3.svg"
import WaveLinesDesktop4 from "../assets/backgrounds/WaveLinesDesktop4.svg"

const HeroSection = () => {
  useEffect(() => {
    const waveImages = document.querySelectorAll(".wave-image");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      waveImages.forEach((waveImage) => {
        const translateValue = scrollPosition * 0.1;
        waveImage.style.transform = `translateY(${translateValue}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const waveImageUp = document.querySelectorAll(".wave-image-up");

    const handleScrollUp = () => {
      const scrollPosition = window.scrollY;
      waveImageUp.forEach((waveImage) => {
        const translateValue = scrollPosition * 0.1;
        waveImage.style.transform = `translateY(-${translateValue}px)`;
      });
    };

    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <img
        src={bedi}
        alt="Base"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />

      <img
        src={WaveLinesDesktop2}
        alt="Overlay 1"
        style={{
          position: "absolute",
          bottom: "200px",
          right: "30%",
          width: "100%",
          height: "100%",
          transition: "transform 0.3s ease-out",
          border: '1px solid black'
        }}
        className="wave-image"
      />

      {/* <img
        src={WaveLinesDesktop1}
        alt="Overlay 2"
        style={{
          position: "absolute",
          bottom: "900px",
          left: "10px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease-out",
        }}
        className="wave-image"
      /> */}

      {/* <img
        src={WaveLinesDesktop3}
        alt="Overlay 3"
        style={{
          position: "absolute",
          bottom: "90px",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.15)",
          opacity: "0.6",
        }}
        className="wave-image-up"
      /> */}
{/* 
      <img
        src={WaveLinesDesktop4}
        alt="Overlay 4"
        style={{
          position: "absolute",
          bottom: "-750px",
          left: "220px",
          width: "100%",
          height: "100%",
          transform: "rotate(1deg)",
        }}
        className="wave-image-up"
      /> */}

      <div style={{ position: "absolute", left: "0", top: "0" }}>
        <p
          style={{
            fontSize: "4.5rem",
            fontWeight: "600",
            position: "relative",
            top: "300px",
            left: "250px",
            color: "white",
          }}
        >
          Embrace the
          <br />
          future of finance
        </p>
        <p
          style={{
            color: "#D1D5DB",
            marginTop: "2.5rem",
            fontWeight: "600",
            position: "relative",
            top: "300px",
            left: "250px",
          }}
        >
          Reimagine financial services with AnyTech’s open platform, distributed
          <br />
          banking solution that powers transformation
        </p>

        <button
          style={{
            display: "flex",
            gap: "0.5rem",
            color: "white",
            backgroundColor: "#FB923C",
            padding: "0.75rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            borderRadius: "0.375rem",
            marginTop: "2.5rem",
            fontWeight: "600",
            position: "relative",
            top: "300px",
            left: "250px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            const firstP = e.target.querySelector("p:nth-child(1)");
            const secondP = e.target.querySelector("p:nth-child(2)");

            firstP.style.transform = "translateX(1px)";
            setTimeout(() => {
              firstP.style.transform = "translateX(-5px)";
            }, 200);

            secondP.style.transform = "translateX(-1px)";
            setTimeout(() => {
              secondP.style.transform = "translateX(5px)";
            }, 200);
          }}
          onMouseLeave={(e) => {
            const firstP = e.target.querySelector("p:nth-child(1)");
            const secondP = e.target.querySelector("p:nth-child(2)");

            firstP.style.transform = "translateX(0)";
            secondP.style.transform = "translateX(0)";
          }}
        >
          <p
            style={{
              margin: 0,
              transition: "transform 0.3s ease",
            }}
          >
            Reach Out To Us
          </p>
          <p
            style={{
              margin: 0,
              transition: "transform 0.3s ease",
            }}
          >
            ❯
          </p>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
