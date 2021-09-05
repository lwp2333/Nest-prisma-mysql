export interface commmonType<T> {
  data: T
  message: string
}

export type ResponseType<T> = {
  statusCode: number
  error: boolean
} & Partial<commmonType<T>>
