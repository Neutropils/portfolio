import { useEffect, useRef, useState } from "react";
import {
  profile,
  photos,
  stats,
  record,
  projects,
  achievements,
  skills,
} from "./data";

// Resolve a /public asset path against the deployed base (e.g. "/portfolio/"),
// so images work both in local dev ("/") and on GitHub Pages.
const asset = (p) => (p ? import.meta.env.BASE_URL + p.replace(/^\//, "") : p);

// ── Hooks ──────────────────────────────────────────────────────────────────

// Adds `is-in` once the element scrolls into view (one-shot fade/rise).
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Wrapper that fades + rises its children in on scroll.
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// ── Scroll-linked text reveal (words brighten as you scroll through) ────────
function RevealText({ text }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll(".word"));
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Reveal zone: starts when block enters lower third, done near top third.
      const start = vh * 0.85;
      const end = vh * 0.35;
      const progress = (start - rect.top) / (start - end + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const n = spans.length;
      spans.forEach((s, i) => {
        const threshold = i / n;
        // each word lights over a short span of progress
        const o = Math.max(0, Math.min(1, (clamped - threshold) * n * 0.6 + 0.3));
        s.style.opacity = (0.16 + 0.84 * o).toFixed(3);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text]);

  return (
    <p className="reveal-text" ref={ref}>
      {words.map((w, i) => (
        <span className="word" key={i}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

// ── Pieces ──────────────────────────────────────────────────────────────────

function AnimatedName({ name }) {
  return (
    <h1 className="hero__name" aria-label={name}>
      {name.split("").map((ch, i) => (
        <span
          key={i}
          className="char"
          aria-hidden="true"
          style={{ animationDelay: `${0.15 + i * 0.04}s` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </h1>
  );
}

function SectionHead({ num, label, title, id }) {
  return (
    <div className="section__head">
      <div className="index-mark" aria-hidden="true">
        <span className="num">{num}</span>
        {label}
      </div>
      <h2 className="section__title" id={id}>
        {title}
      </h2>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav__brand">
        {scrolled ? profile.name : initials}
        <span style={{ display: "none" }}>
          {profile.name.slice(initials.length === profile.name.length ? 0 : 0)}
          {" "}
          {profile.name.split(" ").slice(1).join(" ")}
        </span>
      </a>
      <div className="nav__links">
        <a href="#record">Record</a>
        <a href="#work">Work</a>
        <a href="#honors">Honors</a>
      </div>
      <a href="#contact" className="nav__cta">
        Contact
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hero__inner">
        <p className="hero__eyebrow">Portfolio — a record so far</p>
        <AnimatedName name={profile.name} />
        <div className="hero__role">
          <span className="lead">Cybersecurity student.</span>
          <span>{profile.tagline}</span>
        </div>
      </div>
      <div className="hero__status hero__inner">
        <span>
          <span className="dot">●</span> Available for internships
        </span>
        <span>{profile.location}</span>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label} ↗
          </a>
        ))}
      </div>
    </header>
  );
}

function FeatureImage() {
  if (!photos?.feature?.src) return null;
  return (
    <figure className="feature">
      <img src={asset(photos.feature.src)} alt={photos.feature.caption} loading="lazy" />
      {photos.feature.caption && (
        <figcaption className="feature__caption">
          {photos.feature.caption}
        </figcaption>
      )}
    </figure>
  );
}

function Gallery() {
  if (!photos?.gallery?.length) return null;
  return (
    <div className="gallery">
      {photos.gallery.map((p, i) => (
        <figure className="gallery__item" key={i}>
          <img src={asset(p.src)} alt={p.caption} loading="lazy" />
          {p.caption && <figcaption>{p.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function About() {
  return (
    <section className="wrap section" aria-labelledby="about">
      <SectionHead num="01" label="About" title="Who I am" id="about" />
      <div className="section__body">
        <div className="col-main">
          {stats && stats.length > 0 && (
            <Reveal className="about__stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__value">{s.value}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </Reveal>
          )}
          <RevealText text={profile.about} />
        </div>
      </div>
    </section>
  );
}

const kindLabel = { work: "Work", education: "Education", milestone: "Milestone" };

function Record() {
  return (
    <section className="wrap section" aria-labelledby="record">
      <SectionHead num="02" label="Record" title="Where I've been" id="record" />
      <div className="section__body">
        <Reveal className="col-main record-list">
          {record.map((e, i) => (
            <article className="entry" key={i}>
              <div className="entry__period">{e.period}</div>
              <div>
                <span className="entry__kind">{kindLabel[e.kind] || e.kind}</span>
                <h3 className="entry__title">{e.title}</h3>
                <div className="entry__org">{e.org}</div>
                <p className="entry__detail">{e.detail}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="wrap section" aria-labelledby="work">
      <SectionHead num="03" label="Work" title="Selected projects" id="work" />
      <div className="section__body">
        <Reveal className="col-main">
          {projects.map((p, i) => {
            const Tag = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Tag
                className={`project${p.featured ? " project--featured" : ""}`}
                key={i}
                {...linkProps}
              >
                {p.featured && (
                  <div className="project__flag">✦ Featured — Hackathon</div>
                )}
                {p.featured && p.image && (
                  <img className="project__image" src={asset(p.image)} alt={p.title} loading="lazy" />
                )}
                <div className="project__title">
                  {p.title}
                  {p.url && <span className="arrow">↗</span>}
                </div>
                <div className="project__year">{p.year}</div>
                {p.meta && <div className="project__meta">{p.meta}</div>}
                <p className="project__blurb">{p.blurb}</p>
                {p.tags && p.tags.length > 0 && (
                  <div className="project__tags">
                    {p.tags.map((t, ti) => (
                      <span className="tag" key={ti}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Tag>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function Honors() {
  return (
    <section className="wrap section" aria-labelledby="honors">
      <SectionHead num="04" label="Honors" title="Awards & achievements" id="honors" />
      <div className="section__body">
        <Reveal className="col-main">
          {achievements.map((grp) => (
            <div className="ach-group" key={grp.group}>
              <div className="ach-group__name">{grp.group}</div>
              <div className="ach-list">
                {grp.items.map((a, i) => (
                  <div className="ach" key={i}>
                    <div className="ach__year">{a.year}</div>
                    <div className="ach__text">{a.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Gallery />
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="wrap section" aria-labelledby="skills">
      <SectionHead num="05" label="Skills" title="What I work with" id="skills" />
      <div className="section__body">
        <Reveal className="col-main">
          <div className="skill-groups">
            {skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <div className="skill-group__name">{g.group}</div>
                <ul className="skill-group__items">
                  {g.items.map((it, ii) => (
                    <li key={ii}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="wrap contact" aria-labelledby="contact">
      <SectionHead num="06" label="Contact" title="" id="contact-mark" />
      <div className="section__body">
        <Reveal className="col-main">
          <h2 className="contact__title" id="contact">
            Let's talk.
          </h2>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact__socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureImage />
        <About />
        <Record />
        <Work />
        <Honors />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
