import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function DownloadCVButton() {
  return (
    <Button asChild className="text-base">
      <a
        href="/GustavoDias_CV_2024.pdf"
        target="_blank"
        download
        className="flex items-center gap-2 text-base font-semibold"
      >
        Resume <Download className="h-5 w-5" />
      </a>
    </Button>
  )
}
