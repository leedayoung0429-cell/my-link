import styles from "./page.module.css";

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      link: "https://blog.naver.com/leedayoung0429/223678225070",
      img: "/project1.jpg"
    },
    {
      title: "Project 2",
      link: "https://blog.naver.com/leedayoung0429/223753774534",
      img: "/project2.jpg"
    },
    {
      title: "Project 3",
      link: "https://blog.naver.com/leedayoung0429/223784310026",
      img: "/project3.jpg"
    },
    {
      title: "Project 4",
      link: "https://blog.naver.com/leedayoung0429/224230464654",
      img: "/project4.jpg"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Background Blobs for Glassmorphism */}
      <div className={styles.bgBlob1}></div>
      <div className={styles.bgBlob2}></div>

      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero} id="about">
          <div className={styles.heroGreeting}>* COZY STITCHES</div>
          <h1 className={styles.heroTitle}>I'M LEE DA-YOUNG</h1>
          <p className={styles.heroSubtitle}>
            Welcome to my personal space on the internet.
            <br />
            <br />
            Just as stitches weave together to create a garment, this is a small archive where I carefully knit the fragments of my daily life and thoughts. Stepping away from a fast-paced world, I share the mindful records filled with the warmth of my fingertips. Within the cozy spaces created between yarn and needles, I hope your heart can find a warm place to rest.
          </p>
        </section>

        {/* Projects Section */}
        <section className={styles.projectsSection} id="projects">
          <h2 className={styles.sectionTitle}>Selected Works 🧵🪡</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                {project.img && (
                  <div className={styles.projectImageWrapper}>
                    <img src={project.img} alt={project.title} className={styles.projectImage} />
                  </div>
                )}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerText}>
          © {new Date().getFullYear()} Lee Da-young. Built bold.
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/leedayoung0429-cell" className={styles.socialBtn} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/kintting_0000/" className={styles.socialBtn} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-0.057 1.645-0.069 4.849-0.069zm0-2.163c-3.259 0-3.668 0.014-4.948 0.072-4.358 0.2-6.78 2.618-6.98 6.98-0.059 1.28-0.073 1.689-0.073 4.948 0 3.259 0.014 3.668 0.072 4.948 0.2 4.358 2.618 6.78 6.98 6.98 1.28 0.058 1.689 0.072 4.948 0.072 3.259 0 3.668-0.014 4.948-0.072 4.354-0.2 6.782-2.618 6.979-6.98 0.059-1.28 0.073-1.689 0.073-4.948 0-3.259-0.014-3.667-0.072-4.947-0.196-4.354-2.617-6.78-6.979-6.98-1.28-0.058-1.689-0.072-4.948-0.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-0.796 0-1.441 0.645-1.441 1.44s0.645 1.44 1.441 1.44c0.795 0 1.439-0.645 1.439-1.44s-0.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://blog.naver.com/leedayoung0429" className={styles.socialBtn} aria-label="Naver Blog" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.273 19.186h-4.832v-7.147l-4.54 7.147H2.069V4.814h4.832v7.147l4.54-7.147h4.832v14.372z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
