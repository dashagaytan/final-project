import { useState } from "react";
import { ArtPieces } from "../data";
import DreamTable from '../components/DreamTable'
import data from "../data"

export default function ArtGallery() {
  const [artPieces, setArtPieces] = useState(ArtPieces);

  return (
    <div className="page-container">
      <h1>My Childhood Dream: Digital Artist</h1>
      <p>...</p>

      <DreamTable artPieces={artPieces} onChange={setArtPieces} />

      <h2>My Gallery</h2>

    </div>
  );
}