import BooksList from "@/components/BooksList"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-end mr-10 p-4">
        <Button>Add Book</Button>
      </div>
      <BooksList />
    </div>
  )
}
