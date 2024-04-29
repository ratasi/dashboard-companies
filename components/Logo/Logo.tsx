"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function Logo() {
    const router = useRouter()

    return (
        <div className="flex items-center h-20 gap-2 px-6 border-b cursor-pointer min-h-20"
            onClick={() => router.push("/")}
        >
            <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
            <h1 className="text-xl font-bold">TarreManager</h1>
        </div>
    )
}
