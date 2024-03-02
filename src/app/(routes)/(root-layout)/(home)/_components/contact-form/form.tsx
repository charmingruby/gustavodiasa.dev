import { Button } from '@/components/ui/button'
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

      <Button size="lg" className="ml-auto w-fit text-base">
        Send
      </Button>
    </form>
  )
}
