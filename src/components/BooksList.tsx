import { useGetBooksQuery } from "@/api/books.api"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"

const BooksList = () => {
  const { data: books, isLoading, error } = useGetBooksQuery()
  const navigate = useNavigate()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <Table className="max-w-7xl mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>No of Pages</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books &&
          books.length &&
          books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.name}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.no_of_pages}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/${book.id}`)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default BooksList
