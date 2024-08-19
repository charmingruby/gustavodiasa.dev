'use client'

import { Copy } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { email } from '@/data/profile'

export function CopyEmail() {
  const handleCopyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
    toast.success('E-mail copied to clipboard')
  }

  return (
    <div className="flex w-full flex-col items-end">
      <div className="relative w-full">
        <Input value={email} disabled />
        <Button
          variant="ghost"
          className="absolute right-0 top-0 h-11"
          onClick={handleCopyEmailToClipboard}
        >
          <Copy className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}
