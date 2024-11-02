"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MobileSidebar } from '@/components/Sidebar';

function BreadcrumbHeader() {
    const pathName = usePathname();
    const path = pathName === "/" ? [""] : pathName?.split("/")
    return (
        <div className='flex items-center flex-start'>
            <MobileSidebar />
            <Breadcrumb>
                <BreadcrumbList>
                    {path.map((path, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='capitalize' href={`/${path}`}>
                                    {path === "" ? "home" : path}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbHeader