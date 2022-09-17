export interface Charity {
    ownerId?: string
    id: string,
    name: string,
    desc: string,
}

export interface Profile {
    displayName: string
    email: string
    charities: Charity[]
}