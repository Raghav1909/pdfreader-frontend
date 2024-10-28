import { useState } from "react"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Counter from "yet-another-react-lightbox/plugins/counter"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/counter.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { useGetBookPdfQuery } from "@/api/books.api"

const ImageDisplay = () => {
  const [open, setOpen] = useState(false)
  const { data, isLoading, error } = useGetBookPdfQuery(1)
  const [index, setIndex] = useState(0)

  const slides =
    data?.paths?.map((path) => ({
      src: `${import.meta.env.VITE_API_URL}/${path}`,
    })) || []

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="flex flex-wrap">
        {data &&
          data.paths?.length > 0 &&
          slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={`Page ${index + 1}`}
              className="hover:cursor-pointer"
              width={"120px"}
              height={"60px"}
              onClick={() => {
                setIndex(index)
                setOpen(true)
              }}
            />
          ))}
      </div>
      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        plugins={[Counter, Fullscreen, Slideshow, Thumbnails, Zoom]}
        slides={slides}
      />
    </div>
  )
}

export default ImageDisplay
