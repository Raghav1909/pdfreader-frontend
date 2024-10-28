import { useGetBookQuery } from "@/api/books.api"
import Header from "@/components/Header"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import ImageDisplay from "@/components/ImageDisplay"

export default function BookPage() {
  const { data: book, isLoading, error } = useGetBookQuery(1)
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <div className="pl-10 p-4">
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </div>

      <Tabs defaultValue="info" className="max-w-7xl mx-auto text-center">
        <TabsList>
          <TabsTrigger value="info">Basic Info</TabsTrigger>
          <TabsTrigger value="img">Images</TabsTrigger>
        </TabsList>
        <TabsContent
          value="info"
          className="bg-secondary rounded-md drop-shadow-sm p-4"
        >
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {book && (
            <div className="text-left">
              <p>
                <span className="font-bold mr-2">Name:</span>
                {book.name}
              </p>
              <p>
                <span className="font-bold mr-2">Author:</span>
                {book.author}
              </p>
              <p>
                <span className="font-bold mr-2">No of Pages:</span>
                {book.no_of_pages}
              </p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="img">
          <ImageDisplay />
        </TabsContent>
      </Tabs>
    </div>
  )
}
