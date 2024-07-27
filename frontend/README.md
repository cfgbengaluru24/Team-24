# Nextjs Starter Template
a simple nextjs starter with authentication, shadcn components, prisma connection and react query setup

# Getting Started References

- https://nextjs.org/docs/getting-started/installation
- https://ui.shadcn.com/docs/installation/next
- https://authjs.dev/getting-started/installation?framework=next.js
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb
- https://tanstack.com/query/latest/docs/framework/react/installation

## Steps

```bash
#creating nextjs project
npx create-next-app@latest
# installing shadcn
npx shadcn-ui@latest init
# setting up prisma
npm install prisma typescript ts-node @types/node --save-dev
npx prisma init
# authjs setup
npm install next-auth@beta
# react query
npm i @tanstack/react-query
```

### auth.ts

```bash
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

### Adding new shadcn components

```bash
npx shadcn-ui@latest add <component>
```

## Dark Mode Setup

```bash
npm install next-themes
```

## Navbars and Skeleton

- **contexts to set up**
    
    ```tsx
    import { SessionProvider } from "next-auth/react";
    import { auth } from "@/auth";
    
    export default async function AuthProvider({
      children,
    }: {
      children: React.ReactNode;
    }) {
      const session = await auth();
      return <SessionProvider session={session}>{children}</SessionProvider>;
    }
    ```
    
    ```tsx
    "use client"
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    
    const queryClient = new QueryClient();
    
    export default function QueryProvider({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
    }
    ```
    
    ```tsx
    "use client"
    
    import * as React from "react"
    import { ThemeProvider as NextThemesProvider } from "next-themes"
    import { type ThemeProviderProps } from "next-themes/dist/types"
    
    export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
      return <NextThemesProvider {...props}>{children}</NextThemesProvider>
    }
    
    ```
    
- **Sidebar**
- **Necessary Components**
    - UserButton
    - Themetoggle

## Setting user profile

```tsx
import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        username?: string
    }
    interface Session {
        user: {
            username?: string
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        username?: string
    }
}
```

## Protecting Routes

```tsx
import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
    const session = await auth();
    const url = req.nextUrl;
    
    if (session && (
        url.toString().startsWith("/signin") ||
        url.toString().startsWith("/signup") ||
        url.toString().startsWith("/")
    )) {
        console.log("redirecting to /home");
        return NextResponse.redirect("/home");
    }
    if (!session) 
        return NextResponse.redirect(new URL("/signin", req.url));

    return NextResponse.next();
}

export const config = {
    matcher: [
        // '/sign-in',
        // '/sign-up',
        '/home',
        '/about',
        // '/url',
        // '/url/:path*',
    ],
}
```

https://authjs.dev/getting-started/session-management/protecting


## Getting Started locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
