"use client"

import { useRouter } from "next/navigation";

import axios from "axios";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";
import { toast } from "@/components/ui/use-toast";

export function FooterCompany(props: FooterCompanyProps) {
    const { companyId } = props
    const router = useRouter()

    const onDeleteCompany = async () => {
        try {
            axios.delete(`/api/company/${companyId}`)
            toast({
                title: "Company deleted"
            })
            router.push("/companies")
        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"
            })
        }
    }

    return (
        <div className="flex justify-end mt-5">
            <Button variant="destructive" onClick={onDeleteCompany}>
                <Trash className="w-4 h-4 mr-2" />
                Remove company
            </Button>
        </div>
    )
}
