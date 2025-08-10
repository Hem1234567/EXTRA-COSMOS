import React, { useEffect, useRef } from "react";

const StackingCards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current;
      if (!cards) return;

      const cardsRect = cards.getBoundingClientRect();
      const cardsTop = cardsRect.top;
      const cardsHeight = cardsRect.height;

      // When cards container enters viewport
      if (cardsTop < window.innerHeight && cardsTop + cardsHeight > 0) {
        const scrollProgress = Math.min(
          1,
          Math.max(0, -cardsTop / (cardsHeight - window.innerHeight))
        );

        const cardElements = Array.from(cards.children);
        cardElements.forEach((card, index) => {
          const reverseIndex = cardElements.length - index - 1;
          const scale = 1.1 - 0.1 * reverseIndex;

          // Apply scaling based on scroll progress
          const content = card.querySelector(".card__content");
          if (content) {
            content.style.transform = `scale(${
              1 + (scale - 1) * scrollProgress
            })`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .card__content {
          transform-origin: 50% 0%;
          will-change: transform;
        }
        
        .problem-statement {
          padding: 120px 20vw 60px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          font:bold 1.3em sans-serif;
        }
        
        .problem-statement h1 {
          font-weight: 300;
          font-size: 2.5em;
          margin-bottom: 30px;
        }
        
        .problem-statement p {
          font-family: sans-serif;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          .problem-statement {
            padding: 100px 5vw 40px;
          }
          
          .card__content {
            grid-template-areas: "img" "text";
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
          }
          
          #cards {
            grid-template-rows: repeat(4, 60vw) !important;
          }
        }
      `}</style>

      <section className="problem-statement">
        <h1>Problem Statement</h1>
      </section>

      <main
        style={{
          width: "80vw",
          margin: "0 auto",
          paddingBottom: "60px",
        }}
      >
        <ul
          ref={cardsRef}
          id="cards"
          style={{
            paddingBottom: "calc(4 * 1em)",
            marginBottom: "4vw",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(4, 40vw)",
            gap: "4vw",
            listStyle: "none",
          }}
        >
          {[1, 2, 3, 4].map((cardNum, index) => (
            <li
              key={cardNum}
              id={`card_${cardNum}`}
              className="card"
              style={{
                position: "sticky",
                top: "0",
                paddingTop: `calc(${index + 1} * 1em)`,
              }}
            >
              <div
                className="card__content"
                style={{
                  boxShadow:
                    "0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "1em",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateAreas: '"text img"',
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "auto",
                }}
              >
                <div
                  style={{
                    gridArea: "text",
                    width: "80%",
                    placeSelf: "center",
                    textAlign: "left",
                    display: "grid",
                    gap: "1em",
                    placeItems: "start",
                  }}
                >
                  <h2 style={{ fontWeight: "300", fontSize: "2.5em" }}>
                    Solution{" "}
                    {cardNum === 4
                      ? "Four"
                      : cardNum === 3
                      ? "Three"
                      : cardNum === 2
                      ? "Two"
                      : "One"}
                  </h2>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.42",
                    }}
                  >
                    {cardNum === 1
                      ? "Dynamic scaling creates visual hierarchy during scrolling"
                      : cardNum === 2
                      ? "Sticky positioning maintains context while browsing"
                      : cardNum === 3
                      ? "Smooth transitions enhance user experience"
                      : "Performance optimized for all devices"}
                  </p>
                  <p>
                    <a
                      href="#top"
                      style={{
                        backgroundColor: "rgb(188 87 36)",
                        color: "#fff",
                        textDecoration: "none",
                        display: "inline-block",
                        padding: "0.5em",
                        borderRadius: "0.25em",
                      }}
                    >
                      Learn more
                    </a>
                  </p>
                </div>
                <figure style={{ gridArea: "img", overflow: "hidden" }}>
                  <img
                    src={`https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-${
                      cardNum === 4 ? 2 : cardNum
                    }.jpg`}
                    alt="Image description"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
