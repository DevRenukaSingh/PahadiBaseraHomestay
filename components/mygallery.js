"use client";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { images } from "../utils/galleryImages";

export default function MyGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum
        layout="rows"
        photos={images}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </div>
  );
}