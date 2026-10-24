import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
const nextConfig = (phase: string): NextConfig => ({ ...(phase === PHASE_DEVELOPMENT_SERVER ? { distDir: '.next-dev' } : {}), images: { remotePatterns: [{ protocol:'https', hostname:'images.unsplash.com' },{protocol:'https',hostname:'*.supabase.co'}] } });
export default nextConfig;
