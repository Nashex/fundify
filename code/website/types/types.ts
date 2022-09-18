export interface Charity {
    ownerId?: string
    id: string,
    name: string,
    desc: string,
    tiers: Tier[],
    payments: Payment[],
    donators: string[]
}

export interface Tier {
    id?: string
    charityId: string
    name: string
    desc: string
    type: "monthly" | "one-time"
    amount: number
}

export interface Payment {
    id?: string
    date: Date
    email: string
    amount: number
}

export interface Profile {
    displayName: string
    email: string
    charities: Charity[]
}