import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TBook = {
  id: number
  name: string
  author: string
  no_of_pages: number
}

const getBooks = async () => {
  const response = await api.get("/")
  return response.data
}

export const useGetBooksQuery = () => {
  return useQuery<TBook[]>({
    queryKey: ["books"],
    queryFn: getBooks,
  })
}

const getBook = async (id: number) => {
  const response = await api.get(`/${id}`)
  return response.data
}

export const useGetBookQuery = (id: number) => {
  return useQuery<TBook>({
    queryKey: ["books", id],
    queryFn: () => getBook(id),
  })
}
