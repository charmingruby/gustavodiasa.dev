'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function useContactController() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return { form, onSubmit }
}
