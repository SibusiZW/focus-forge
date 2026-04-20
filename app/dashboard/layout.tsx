import { AppSidebar } from "@/components/app-sidebar";
import IntroCard from "@/components/intro-card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Show } from "@clerk/nextjs";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            
            
            <main className="p-4">
                <Show when={'signed-in'}>
                    <AppSidebar />
                    <SidebarTrigger />
                    {children}
                </Show>
                <Show when={'signed-out'}>
                    <IntroCard />
                </Show>
            </main>
        </SidebarProvider>
    )
}