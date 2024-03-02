import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Input placeholder="Name" />
        <Input placeholder="E-mail" />
      </div>

      <Input placeholder="Subject" />

      <Textarea placeholder="Message" />
    </form>
  )
}
