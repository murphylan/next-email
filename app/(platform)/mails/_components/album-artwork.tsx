import { PlusCircledIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import { playlists } from "../../data/playlists"
import { Album } from "../data/albums"
import SendMailForm from "./send-mail-form"
import Link from "next/link"

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Dialog>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md">
              <Link
                href={{
                  pathname: '/mails/detail',
                  query: { src: album.fullimage },
                }}
              >
                <Image
                  src={album.cover}
                  alt={album.name}
                  width={width}
                  height={height}
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                  )}
                />
              </Link>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem>Add to Library</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  New Playlist
                </ContextMenuItem>
                <ContextMenuSeparator />
                {playlists.map((playlist) => (
                  <ContextMenuItem key={playlist}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                    </svg>
                    {playlist}
                  </ContextMenuItem>
                ))}
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Play Next</ContextMenuItem>
            <ContextMenuItem>Play Later</ContextMenuItem>
            <ContextMenuItem>Create Station</ContextMenuItem>
            <ContextMenuSeparator />
            <DialogTrigger asChild>
              <ContextMenuItem>Like</ContextMenuItem>
            </DialogTrigger>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this file from our servers?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Send Email</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <SendMailForm template={album.template} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
