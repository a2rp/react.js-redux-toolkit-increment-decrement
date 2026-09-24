import { FiArrowUp, FiCoffee, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube, FiCode } from "react-icons/fi";
import { Counter } from "./features/counter/Counter";
import "./App.css";

const externalLinks = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
];
const supportLinks = [
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
  { label: "Patreon", href: "https://patreon.com/a2rp", icon: FiHeart },
];
function IconLinks({ links }) {
  return <div className="icon-links">{links.map(({ label, href, icon: Icon }) => (
    <a className="icon-link" href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon aria-hidden="true" /></a>
  ))}</div>;
}
function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return <div className="app-shell">
    <header className="site-header"><a className="brand" href="#top" aria-label="Redux counter home"><img src="/logo.png" alt="Ashish Ranjan logo" /><span><small>A2RP</small>Redux Counter</span></a><span className="header-badge">Toolkit demo</span></header>
    <main id="top" className="page-content">
      <section className="intro-section" aria-labelledby="page-title"><p className="eyebrow">React state management</p><h1 id="page-title">Redux Toolkit Counter</h1><p className="intro-copy">A focused increment and decrement example built with React, Redux Toolkit, and a small reusable counter component.</p></section>
      <section className="counter-section" aria-label="Counter controls"><Counter /></section>
      <section className="note-card"><span className="note-icon" aria-hidden="true"><FiHeart /></span><div><h2>Simple state, clear actions</h2><p>The counter value lives in a Redux slice, so each button dispatches a predictable action and updates the shared store.</p></div></section>
    </main>
    <footer className="site-footer"><div><p className="footer-title">Redux Toolkit Counter</p><p className="copyright">Copyright © \2026 <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p></div><div className="footer-links"><IconLinks links={externalLinks} /><IconLinks links={supportLinks} /></div></footer>
    <button className="scroll-top" type="button" onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top"><FiArrowUp aria-hidden="true" /></button>
  </div>;
}
export default App;
