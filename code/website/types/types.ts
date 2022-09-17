export interface Charity {
    id: string,
    name: string,
    description: string,
}

export interface Profile {
    displayName: string
    email: string
    charities: Charity[]
}