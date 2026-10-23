export function nextArtworkId(existing: string[]): string {
 const max=existing.reduce((n,id)=>{const m=/^RW-(\d{4,})$/.exec(id);return m?Math.max(n,Number(m[1])):n;},0);
 return `RW-${String(max+1).padStart(4,'0')}`;
}
