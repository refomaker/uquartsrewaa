import {NextResponse} from 'next/server';import{userClient}from'@/lib/supabase/user';
export async function POST(req:Request){const c=await userClient();await c?.auth.signOut();return NextResponse.redirect(new URL('/admin/login',req.url),303)}
