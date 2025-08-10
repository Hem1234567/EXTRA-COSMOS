import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative py-16 border-t bg-gradient-to-b from-background to-background/60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          animation: "starfield 20s linear infinite",
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-extrabold tracking-wider">
            PEC HACKS
          </div>
          <p className="text-muted-foreground mt-2 max-w-xs">
            Tamil Nadu's Largest Hackathon • December 28–29, 2024 • Chennai
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-semibold mb-3">Navigate</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#top" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#problems"
                  className="hover:text-white transition-colors"
                >
                  Problem Statement
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@pechacks.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </nav>

        <div className="flex md:justify-end items-end">
          <div className="flex gap-3">
            {[FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-cyan-400 hover:shadow-[0_0_5px_2px_rgba(34,211,238,0.3)] transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} PEC HACKS. All rights reserved.
      </div>

      <style jsx>{`
        @keyframes starfield {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 200px 200px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
