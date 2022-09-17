export interface Charity {
    ownerId?: string
    id: string,
    name: string,
    desc: string,
    tiers: Tier[]
}

export interface Tier {
    charityId: string
    name: string
    desc: string
    type: "monthly" | "one-time"
    amount: number
}

export interface Profile {
    displayName: string
    email: string
    charities: Charity[]
}