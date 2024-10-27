import { useState, useRef } from "react"
import { useGetBookQuery } from "@/api/books.api"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Page1 from "@/assets/book/AI-Powered Log Monitoring and Anomaly Detection_page-0001.jpg"
import Page2 from "@/assets/book/AI-Powered Log Monitoring and Anomaly Detection_page-0002.jpg"
import Page3 from "@/assets/book/AI-Powered Log Monitoring and Anomaly Detection_page-0003.jpg"
import Page4 from "@/assets/book/AI-Powered Log Monitoring and Anomaly Detection_page-0004.jpg"

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Counter from "yet-another-react-lightbox/plugins/counter"
import "yet-another-react-lightbox/plugins/counter.css"
import { Slideshow, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins"
import "yet-another-react-lightbox/plugins/thumbnails.css"

export default function BookPage() {
  const [open, setOpen] = useState(false)
  const { data: book, isLoading, error } = useGetBookQuery()

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Counter, Fullscreen, Slideshow, Thumbnails, Zoom]}
        slides={[
          { src: Page1 },
          { src: Page2 },
          { src: Page3 },
          { src: Page4 },
        ]}
      />
    </>
  )
}
