/* Shows the product photo for the requested view. If a photo file is missing, a simple pool illustration shows instead. */
const photo=(src,alt)=>`<img class="real" src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`;
let gid=0;
function art(p,color,v=0){
 const id='g'+(++gid),w=p.cat=='fibreglass'?'#6fd0e8':'#2b8fd6';
 const s=`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe3ee"/><stop offset="1" stop-color="#e9efd9"/></linearGradient></defs><rect width="400" height="300" fill="url(#${id})"/><rect y="170" width="400" height="130" fill="#7c9468"/>${p.round?`<ellipse cx="200" cy="190" rx="120" ry="48" fill="#e8e8e8"/><ellipse cx="200" cy="186" rx="108" ry="40" fill="${w}"/>`:`<path d="M80 150H320L350 235H50Z" fill="#e8e8e8"/><path d="M95 158H305L328 226H72Z" fill="${w}"/>`}</svg>`;
 return s+(p.imgs&&p.imgs[v]?photo(p.imgs[v],p.name):'');
}
