import { useGetBooksQuery } from "@/api/books.api"

const BooksList = () => {
  const { data: books, isLoading, error } = useGetBooksQuery()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      {books &&
        books.length > 0 &&
        books.map((book) => (
          <div>
            <p>{book.name}</p>
          </div>
        ))}
    </div>
  )
}

export default BooksList
