import { toast } from 'sonner'

import { FormData } from '@/app/(routes)/(root)/(lp)/_components/contact-form/use-contact-controller'

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email'
  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message)
    })
    .catch((err) => {
      toast.error(err)
    })
}
