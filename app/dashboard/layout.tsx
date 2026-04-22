import { AppSidebar } from "@/components/app-sidebar";
import IntroCard from "@/components/intro-card";
import ThemeToggle from "@/components/theme-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Show } from "@clerk/nextjs";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Show when={'signed-out'}>
                <div className="min-h-screen p-6 bg-[#dddddd] flex flex-col text-center items-center justify-center">
                    <IntroCard />
                </div>
            </Show>

            <Show when={'signed-in'}>
                <SidebarProvider>
                    <AppSidebar />

                    <main className="p-4 w-full">
                        <div className="flex">
                            <SidebarTrigger />
                            <ThemeToggle />
                        </div>
                        {children}
                    </main>
                </SidebarProvider>
            </Show>
            <Toaster />
        </>
    )
}