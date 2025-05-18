'use client'
import { Suspense } from 'react'
import { MenuContent } from '@/components';


export default function MenuPage() {
    return (
        <Suspense fallback={<div>Loading menu...</div>}>
            <MenuContent />
        </Suspense>
    )
}
