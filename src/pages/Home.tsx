import HomeHero from "../components/HomeHero"

export default function Home() {
  return (
    <div className="page-container">
      <HomeHero />
      <section>
        <h2>Find out more about Dasha</h2>
        <ul style={{listStyleType: "none"}}>
          <li>Learn who I am now on the <a href="/About">About</a> page.</li>
          <li>Visit the <a href="/ArtGallery">Art Gallery</a> to add your dreamy art ideas.</li>
          <li>Find my GitHub and LinkedIn on the <a href="/Contact">Contact</a> page.</li>
        </ul>
      </section>
    </div>
  );
}