import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.types";
import { User } from "lucide-react";
import { CompanyForm } from "../CompanyForm";
import { NewContact } from "../NewContact";
import { ListContacts } from "../ListContacts";


export function CompanyInformation(props: CompanyInformationProps) {
    const { company } = props

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
            <div className="p-4 rounded-lg shadow-md bg-background hover:shadow-lg">
                <div>
                    <Image src={company.profileImage} alt="Company Image" width={50} height={50} className="mb-3 rounded-lg" />

                    <CompanyForm company={company} />
                </div>
            </div>
            <div className="p-4 rounded-lg shadow-md bg-background hover:shadow-lg h-min">
                <div className="flex items-center justify-between gap-x-2">
                    <div className="flex items-center gap-x-2">
                        <User className="w-5 h-5" />
                        Contacts
                    </div>
                    <div>
                        <NewContact />
                    </div>
                </div>
                <ListContacts company={company} />
            </div>
        </div>
    )
}