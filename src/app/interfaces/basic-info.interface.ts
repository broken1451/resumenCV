export interface BasicInfo {
    address: string;
    country: string;
    email: string;
    phone: string;
    degree: string;
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
    description?: string;
}