export interface BasicInfo {
    address: string;
    country: string;
    email: string;
    phone: string;
    degree: string;
    job: string;
    name: string;
}

export interface Education {
    title: string;
    name?: string;
    institution: string;
    date: string;
}

export interface Experience {
    title?: string;
    date?: string;
    company?: string;
    description?: string | any[];
}