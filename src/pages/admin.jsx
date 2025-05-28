import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import IframeSect from "../components/home/IframeSect";

export default function Home() {
  useEffect(() => {
    // Load the Google Translate API script dynamically
    const script = document.createElement("script");
    // script.type = 'text/javascript';
    script.src =
      "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script tag when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [currentUser, setCurrentUser] = useState({});

  const [showsidecard, setShowsideCard] = useState(false);
  const [showDisplayCard, setshowDisplayCard] = useState(false);

  const handleGrandMovementTraffic = (e) => {
    if (e.target.className === "profileIcon") {
      setshowDisplayCard((prev) => !prev);
    } else {
      setshowDisplayCard(false);
    }
  };

  useEffect(() => {
    const user =
      JSON.parse(sessionStorage.getItem("activeUser")) ||
      JSON.parse(localStorage.getItem("activeUser"));
    setCurrentUser(user);
  }, []);

  //Animation variables
  const parentVar = {
    init: {
      opacity: 0.95,
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.01,
      },
    },
  };

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%",
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <div className="HomefirstPageCtn" onClick={handleGrandMovementTraffic}>
      <main>
        <section className="homeIntro">
          <h1>Are you an admin?</h1>
          <div className="cta">
            <Link className="fancyBtn" href={"/signin_admin"}>
              Sign In as admin
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { apod: "ADA" },
  };
}
