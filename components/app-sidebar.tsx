import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Brander } from "@/components/brander"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, Brain } from "lucide-react"
import { getMessages } from "@/server/messages"

const messages = await getMessages()

const data = {
  brand: {
    name: "FocusForge",
    logo: <Brain />
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Have a new chat",
          url: "/dashboard/new",
        },
      ],
    },
    {
      title: "My chats",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: messages?.map(m => m ? { title: m.title, url: `/chat/${m.id}` }: m),
    },
  ],
}

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Brander branding={data.brand} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
