import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        username?: string
        email?: string
        password?: string
        land?: any
        role?: string
        labourers?: any
        machines?: any
        products?: any
        orders?: any
        isApproved?: boolean
    }
    interface Session {
        user: {
            username?: string
            email?: string
            isApproved?: boolean
            role?: string
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        username?: string
        email?: string
        land?: any
        role?: string
    }
}