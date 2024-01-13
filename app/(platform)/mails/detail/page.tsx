'use client'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Image from "next/image"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const MailDetailPage = () => {
  const searchParams = useSearchParams()
  const imgsrc = searchParams.get('src') as string;
  console.log(imgsrc)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          <Link href="/mails" className="hover:opacity-75 transition">Mails</Link>
          <span className="ml-3 text-muted-foreground">/</span>
          <span className="ml-3 text-muted-foreground">Detail</span>
        </h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <Image
          src={imgsrc}
          alt=""
          width={700}
          height={1000}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            "aspect-square"
          )}
        />
      </div>
    </div>
  )
}

export default MailDetailPage
