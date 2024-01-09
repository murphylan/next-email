import Image from "next/image"
import { Menu } from "./_components/menu";
import { Sidebar } from "./_components/sidebar";
import { playlists } from "./data/playlists";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const PlatFormLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <ResizablePanelGroup
              direction="horizontal"
              className="h-full  items-stretch"
            >
              <ResizablePanel
                defaultSize={20}
                collapsible={true}
                minSize={15}
                maxSize={25}
              >
                <div className="flex h-full items-start justify-center p-6">
                  <Sidebar playlists={playlists} />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={80}>
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">
                    {children}
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatFormLayout;
