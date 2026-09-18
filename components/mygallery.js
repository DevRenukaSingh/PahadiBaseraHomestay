"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {RowsPhotoAlbum} from "react-photo-album";
import "react-photo-album/rows.css";

import { images } from "../utils/galleryImages";

export default function MyGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="bg-white">

      <RowsPhotoAlbum
        spacing={10}
        photos={images}
        targetRowHeight={200}
        onClick={({ index: current }) => setIndex(current)}
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