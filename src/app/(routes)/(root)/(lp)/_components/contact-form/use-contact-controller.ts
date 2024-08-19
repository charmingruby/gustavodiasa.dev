'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { sendEmail } from '@/helpers/send-email'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export type FormData = z.infer<typeof formSchema>

export function useContactController() {
  let isLoading: boolean = false

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    isLoading = true

    await sendEmail(data)

    isLoading = false
  }

  return { form, onSubmit, isLoading }
}
