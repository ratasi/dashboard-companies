import { redirect } from 'next/navigation'

import { auth } from '@clerk/nextjs'

import { db } from '@/lib/db'

import { DataTable } from './data-table'
import { columns } from './columns'

export async function ListCompanies() {
    const { userId } = auth()

    if (!userId) {
        return redirect("/")
    }

    const companies = await db.company.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "desc"
        }
    })



    return (
        <DataTable columns={columns} data={companies} />
    )
}
