export type CsvArtwork={id:string;title_ar:string;title_en:string;status:string};
const quote=(v:unknown)=>`"${String(v??'').replaceAll('"','""')}"`;
export function artworkCsv(rows:CsvArtwork[],origin:string){const base=origin.replace(/\/$/,'');return[['Artwork ID','Arabic title','English title','Publication status','Canonical URL'],...rows.map(a=>[a.id,a.title_ar,a.title_en,a.status,`${base}/rewaa/art/${a.id}`])].map(row=>row.map(quote).join(',' )).join('\r\n')}
