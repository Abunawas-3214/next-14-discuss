'use server'

import * as auth from '@/auth'
import { signOut as nextAuthSignOut } from 'next-auth/react'

export async function signOut() {
    await auth.signOut()
    await nextAuthSignOut({ redirect: false })
}