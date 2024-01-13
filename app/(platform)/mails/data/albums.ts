export interface Album {
  name: string
  artist: string
  cover: string,
  fullimage: string,
  template: string
}

export const listenNowAlbums: Album[] = [
  {
    name: "Notice",
    artist: "Ethan Byte",
    cover:
      "/mails/notice.png",
    fullimage:
      "/mails/notice-full.png",
    template: "notice"
  },
  {
    name: "Notice with background",
    artist: "Nina Netcode",
    cover:
      "/mails/notice-bg.png",
    fullimage:
      "/mails/notice-bg-full.png",
    template: "noticeWithBackgroud"
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
    fullimage:
      "/mails/notice-bg.png",
    template: "notice"
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    fullimage:
      "/mails/notice-bg.png",
    template: "notice"
  },
]
