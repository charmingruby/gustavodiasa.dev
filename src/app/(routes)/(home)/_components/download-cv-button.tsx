import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function DownloadCVButton() {
  return (
    <Button asChild>
      <a
        href="/GustavoDias_CV_2024.pdf"
        target="_blank"
        download
        className="flex items-center gap-2 text-base"
      >
        Resume <Download className="h-5 w-5" />
      </a>
    </Button>
  )
}
