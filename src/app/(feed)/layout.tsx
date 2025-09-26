import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React, { ReactNode } from 'react'

interface FeedLayoutProps {
    children: ReactNode;
}

const FeedLayout = ({ children }: FeedLayoutProps) => {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                {/* Sidebar */}
                <AppSidebar />

                {/* Content */}
                <main className='w-full flex-1'>
                    <div className='w-full pt-6 pl-6 flex justify-between items-end'>
                        <SidebarTrigger className='hover:text-white  text-white' />
                    </div>

                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default FeedLayout;
