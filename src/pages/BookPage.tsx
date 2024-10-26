import { useGetBookQuery } from "@/api/books.api"

export default function BookPage() {
  const { data: book, isLoading, error } = useGetBookQuery()
  return <div></div>
}
