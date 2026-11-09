/* ===== MASSIMO MODULAR — swimming pool store. Edit this file to change what the site shows. ===== */

/* Your contact details */
const EMAIL='massimomodulaalt@gmail.com';
const TELEGRAM='kernel_ca_grace';
const TG_URL=`https://t.me/${TELEGRAM}`;

/* Contact form + order requests: paste your free access key from web3forms.com (they email it to you).
   Every message then arrives in your inbox. If left empty, the visitor's own email app opens instead. */
const WEB3KEY='';

/* Live chat button: create a free account at tawk.to, then paste the two ids from your widget code, like '64abc123def456/1h9xyzabc'.
   Replies are sent from your Tawk.to dashboard or phone app. Leave empty to hide live chat. */
const TAWK='';

/* 2. Currency symbol and delivery fee used in the cart/checkout (change to '₦' etc. and update prices below) */
const CUR='$';
const DELIVERY=150;

/* 3. Home-page videos: plain video files played by the site (no embeds). Put each file in the videos folder with the exact name below,
   or change src. portrait:true = phone-shaped (vertical) video. Optional poster:'images/cover.jpg' shows a cover picture before play. */
const VIDEOS=[
 {title:'See our pools',text:'A look at our frame, fibreglass and inflatable pools up close.',src:'videos/see-our-pools.mp4',portrait:true},
 {title:'Delivery & installation (1 of 2)',text:'How we deliver, set up and fill your pool on site.',src:'videos/delivery-installation-1.mp4',portrait:true},
 {title:'Delivery & installation (2 of 2)',text:'How we deliver, set up and fill your pool on site.',src:'videos/delivery-installation-2.mp4',portrait:true}
];

/* 4. Home-page slides. pid = product id (its position in the list below, starting at 1), v = which photo of that product to show. */
const HERO=[
 {pid:13,bg:'images/hero-1.jpg',eyebrow:'FIBREGLASS & CONTAINER POOLS',title:'A permanent pool for your yard',text:'Smooth fibreglass pools and modern container-style pools, delivered and set into place.'},
 {pid:31,bg:'images/hero-2.jpg',eyebrow:'IN-GROUND FIBREGLASS',title:'Ready-made pools, installed fast',text:'Moulded fibreglass shells with built-in steps and spa sections, set into your garden.'},
 {pid:4,bg:'images/hero-3.jpg',eyebrow:'FRAME POOLS',title:'The backyard pool, made easy',text:'Sturdy steel-frame pools in round and rectangular sizes, with ladders and covers available.'},
 {pid:27,bg:'images/hero-4.jpg',eyebrow:'KIDS POOLS & SLIDES',title:'Safe, colourful fun for little ones',text:'Inflatable kids’ pools and water slides in bright colours and playful designs.'}];
const FEATURED=[13,1,31,16,27,40];  /* product ids shown under 'Popular pools' on the home page */

const CATS={frame:'Frame Pools',fibreglass:'Fibreglass & Container Pools',inflatable:'Inflatable Pools',kids:'Kids Pools & Slides'};
const COLORS=[{n:'Standard',h:'#2b8fd6'}];
/* Packages. m = price multiplier. PACKS says which packages each category offers (indexes into SIZES). */
const SIZES=[{n:'Pool only',m:1,a:'Pool supplied'},{n:'Pool + accessories',m:1.15,a:'Pump, ladder or cover where available'},{n:'Pool + installation',m:1.4,a:'Delivery & setup included'}];
const PACKS={frame:[0,1,2],fibreglass:[0,2],inflatable:[0,1],kids:[0,1]};

/* 5. PRODUCTS — one entry per pool, made from YOUR photos.
   Prices are placeholder USD reference prices from Nov 2026 market research — change them to yours.
   Sizes (l length, w width, h height, d water depth) are in metres and are estimates from the photos, except the two 260x160 / 295x170 pools whose sizes are printed on the photos.
   Photos: images/<slug>-1.jpg, -2.jpg, -3.jpg   (n = how many photos that pool has). k = rough water-volume factor used for the litres estimate. */
const RAW=[
 {name:"Container Pool with Timber Steps",slug:"container-pool-steps",n:1,cat:"fibreglass",shape:"rect",price:2300,badge:"LIMITED",l:6.1,w:2.4,h:1.5,d:1.4,k:0.8,desc:"Shipping-container-style pool with a timber-topped edge and wooden entry steps. Delivered as a ready-made unit, with filtration equipment available from the same supplier."},

 {name:"Container Pool with Timber Deck",slug:"container-pool-timber",n:1,cat:"fibreglass",shape:"rect",price:2200,badge:"PREMIUM",l:6.1,w:2.4,h:1.5,d:1.4,k:0.8,desc:"Modern container-style pool: a blue fibreglass pool set into a steel shell with a hardwood timber rim and built-in steps. Stylish, quick to install and suited to modern homes and hotels."},

 {name:"Container Pool with Deck Steps & Cabinet",slug:"container-pool-cabinet",n:1,cat:"fibreglass",shape:"rect",price:1600,badge:"PREMIUM",l:4.5,w:2.2,h:1.4,d:1.25,k:0.8,desc:"Container-style raised pool with a blue fibreglass interior, composite-wood decking, built-in entry steps and a lockable equipment cabinet beside the steps."},

 {name:"Freeform Fibreglass Pool",slug:"freeform-fibreglass",n:1,cat:"fibreglass",shape:"freeform",price:1750,badge:"LIMITED",l:8,w:4,h:1.5,d:1.4,k:0.65,desc:"Curved, freeform fibreglass pool with a built-in seating ledge and steps. Lifted into position by crane and set into your garden."},

 {name:"Long Fibreglass Pool",slug:"long-fibreglass",n:2,cat:"fibreglass",shape:"rect",price:1750,badge:"",l:8,w:3,h:1.5,d:1.4,k:0.75,desc:"Long rectangular fibreglass shell in turquoise with built-in light and water-return fittings. A great shape for laps and entertaining."},

 {name:"Fibreglass Pool with Round Spa Section",slug:"fibreglass-spa-section",n:1,cat:"fibreglass",shape:"rect",price:1800,badge:"NEW",l:8,w:3.5,h:1.5,d:1.4,k:0.75,desc:"Long blue fibreglass pool with a built-in round spa section at one side, installed into the ground. Smooth gel-coat finish with a built-in water-return fitting."},

 {name:"Blue Fibreglass Pool with Corner Steps",slug:"fibreglass-corner-steps",n:1,cat:"fibreglass",shape:"freeform",price:850,badge:"",l:7,w:3.5,h:1.5,d:1.4,k:0.7,desc:"Deep-blue moulded fibreglass pool with a curved corner, built-in steps and a bench ledge. Shown being lowered into its excavation."},

 {name:"Step-Entry Fibreglass Pool",slug:"step-entry-fibreglass",n:2,cat:"fibreglass",shape:"rect",price:1700,badge:"PREMIUM",l:6,w:3,h:1.5,d:1.4,k:0.75,desc:"Moulded fibreglass pool in a deep, glossy blue with built-in corner steps and a seat. A smooth, durable shell that is installed into the ground."},

 {name:"Compact Fibreglass Pool",slug:"compact-fibreglass",n:2,cat:"fibreglass",shape:"rect",price:1500,badge:"NEW",l:5,w:3,h:1.4,d:1.3,k:0.75,desc:"Compact fibreglass pool in soft aqua with curved corner steps, finished with stone edging and set neatly into a lawn."},

 {name:"Deck Plunge Pool with Steps",slug:"deck-plunge-pool-steps",n:3,cat:"fibreglass",shape:"rect",price:1350,badge:"POPULAR",l:3,w:2,h:1.2,d:1.1,k:0.8,desc:"Blue fibreglass plunge pool with moulded corner steps and a wood-effect deck frame with built-in steps. Compact enough for small gardens and terraces."},

 {name:"Aqua Plunge Pool with Bench",slug:"aqua-plunge-pool-bench",n:1,cat:"fibreglass",shape:"rect",price:1700,badge:"NEW",l:2.4,w:1.6,h:1,d:0.9,k:0.8,desc:"Small aqua-coloured fibreglass plunge pool with a built-in seating bench and a dark composite-wood deck surround with storage steps. A neat soaking or cooling pool for small patios."},

 {name:"Tropical Palm Water Slide",slug:"tropical-water-slide",n:1,cat:"kids",shape:"rect",price:600,badge:"LIMITED",l:7,w:3.5,h:4.5,d:0.4,k:0.8,desc:"Large tropical-themed inflatable water slide with palm-tree decorations and a splash pool at the base. Suited to parties, events and bigger gardens."},

 {name:"Grand Rectangular Frame Pool",slug:"grand-rectangular-frame",n:1,cat:"frame",shape:"rect",price:1100,badge:"LARGE SIZE",l:7,w:3.5,h:1.3,d:1.15,k:1,desc:"Extra-large rectangular steel-frame pool with a light wall and heavy-duty legs. Plenty of room for laps and family swims, with ladder access."},

 {name:"Large Rectangular Steel-Frame Pool",slug:"large-rectangular-steel-frame",n:1,cat:"frame",shape:"rect",price:1500,badge:"LARGE SIZE",l:10,w:5,h:1.2,d:1.05,k:1,desc:"Very large rectangular pool with a deep blue PVC wall and a two-tone top band, held up by a row of sturdy white steel legs. Suited to hotels, schools, resorts and large compounds."},

 {name:"Ultra Rectangular Frame Pool",slug:"ultra-rectangular-frame",n:2,cat:"frame",shape:"rect",price:600,badge:"BEST SELLER",l:5.5,w:2.7,h:1.3,d:1.15,k:1,desc:"Rectangular above-ground frame pool with a dark grey wall, sturdy steel legs and a safety ladder with platform. Shown with a roll-up solar cover. Quick to set up on a level patio or lawn."},

 {name:"Inflatable Pool House (Enclosed Pool)",slug:"inflatable-pool-house",n:5,cat:"inflatable",shape:"rect",price:950,badge:"NEW",l:4,w:4,h:2.8,d:0.8,k:0.8,desc:"Inflatable pool house with a clear see-through roof and walls and a double door, covering a pool inside. Keeps leaves out and warms the water. Shown in blue, pink, red, purple and green."},

 {name:"Round Inflatable Pool",slug:"round-inflatable",n:2,cat:"inflatable",shape:"round",price:600,badge:"BEST SELLER",l:4,w:4,h:1.2,d:1.1,k:0.85,desc:"Round inflatable-wall pool in turquoise with a white top rim. Quick to set up in a garden, and easy to store when not in use."},

 {name:"Blue Wave Water Slide with Round Pool",slug:"blue-wave-water-slide",n:1,cat:"kids",shape:"rect",price:550,badge:"POPULAR",l:5,w:4,h:3.5,d:0.35,k:0.8,desc:"Blue inflatable water slide with a wave-pattern round splash pool at the bottom. A great centrepiece for kids’ parties."},

 {name:"Large Square Aqua Pool",slug:"square-aqua-pool",n:1,cat:"inflatable",shape:"rect",price:300,badge:"NEW",l:4.2,w:4.2,h:1.1,d:1,k:0.9,desc:"Large square pool with tall aqua walls and a cream top rim, with plenty of room for the whole family to play and cool off."},

 {name:"Rectangular Inflatable Pool",slug:"rectangular-inflatable",n:2,cat:"inflatable",shape:"rect",price:400,badge:"POPULAR",l:3,w:2,h:1.2,d:1.1,k:0.85,desc:"Rectangular inflatable-wall pool in aqua with a white top rail and built-in carry handles. Sets up quickly without any digging."},

 {name:"Large Round Aqua Pools (Multiple Sizes)",slug:"round-aqua-pools",n:1,cat:"inflatable",shape:"round",price:250,badge:"LARGE SIZE",l:4.5,w:4.5,h:1.1,d:1,k:0.9,desc:"Large round pools with tall aqua walls and a cream top rim, available in several diameters. Message us for the size you need."},

 {name:"Family Round Frame Pool",slug:"family-round-frame",n:1,cat:"frame",shape:"round",price:800,badge:"NEW",l:4.5,w:4.5,h:1.2,d:1.05,k:1,desc:"Large round family pool with a light grey wall and strong steel frame, spacious enough for several swimmers, with ladder access."},

 {name:"Rainbow Water Slide with Splash Pool",slug:"rainbow-water-slide",n:1,cat:"kids",shape:"rect",price:450,badge:"BEST SELLER",l:5.5,w:3.5,h:3.5,d:0.3,k:0.8,desc:"Colourful inflatable water slide with multiple lanes and a built-in splash pool at the bottom. Hours of summer fun for children."},

 {name:"Round Steel Frame Pool",slug:"round-steel-frame",n:3,cat:"frame",shape:"round",price:300,badge:"BEST SELLER",l:3.6,w:3.6,h:1,d:0.85,k:1,desc:"Round steel-frame pool with a vivid blue wall and white support legs. Easy to assemble, and it fits neatly into small yards and patios."},

 {name:"Inflatable Round Hot Tub",slug:"inflatable-round-hot-tub",n:1,cat:"inflatable",shape:"round",price:300,badge:"POPULAR",l:1.8,w:1.8,h:0.7,d:0.55,k:1,desc:"Round inflatable spa-style tub with a woven-look wall, built-in grab handles and an air-jet system for relaxing soaks. Seats several adults."},

 {name:"Garden Rectangular Frame Pool",slug:"garden-rectangular-frame",n:2,cat:"frame",shape:"rect",price:650,badge:"POPULAR",l:3,w:2,h:0.75,d:0.6,k:1,desc:"Compact rectangular metal-frame pool with a bright blue wall and white corner joints. A great starter pool for gardens, yards and play areas."},

 {name:"Inflatable Plunge Tub with Lid",slug:"inflatable-plunge-tub",n:1,cat:"inflatable",shape:"round",price:320,badge:"NEW",l:1.1,w:1.1,h:0.7,d:0.6,k:1,desc:"Round grey inflatable tub with a turquoise interior, carry handles and a matching inflatable lid. A compact plunge or soaking tub for small spaces."},

 {name:"Foldable Portable Family Pool",slug:"foldable-family-pool",n:2,cat:"kids",shape:"rect",price:250,badge:"POPULAR",l:3,w:1.9,h:0.65,d:0.55,k:0.9,desc:"Foldable, no-inflation pool with a rigid-feeling blue wall and angled support feet. Folds flat for storage; available in large and small sizes."},

 {name:"Deep Inflatable Family Pool",slug:"deep-inflatable-family",n:1,cat:"inflatable",shape:"rect",price:185,badge:"",l:3.05,w:1.83,h:0.7,d:0.6,k:0.8,desc:"Tall, deep-wall rectangular inflatable pool in blue and white. Available in several sizes — message us for the size you need."},

 {name:"Teal & Orange Inflatable Pool",slug:"teal-orange-inflatable",n:3,cat:"inflatable",shape:"rect",price:125,badge:"NEW",l:3,w:1.8,h:0.75,d:0.6,k:0.8,desc:"Stylish rectangular inflatable pool with stacked teal air rings and an orange-and-white top rim. Looks great in a garden or on a terrace."},

 {name:"Inflatable Lounge Family Pool",slug:"inflatable-lounge-family",n:3,cat:"inflatable",shape:"freeform",price:125,badge:"NEW",l:2.8,w:2.3,h:0.65,d:0.5,k:0.8,desc:"Curved inflatable family pool with built-in backrests and a floating seat, for lounging with a drink. Fits a small terrace or garden."},

 {name:"Blue Inflatable Family Pool with Lifebuoys",slug:"blue-inflatable-lifebuoys",n:1,cat:"inflatable",shape:"rect",price:140,badge:"VALUE",l:3,w:1.8,h:0.65,d:0.5,k:0.8,desc:"Tall four-ring rectangular inflatable pool in blue and white, shown with two red-and-white lifebuoy floats."},

 {name:"Inflatable Family Pool 295 × 170 cm",slug:"inflatable-family-295x170",n:2,cat:"inflatable",shape:"rect",price:75,badge:"BEST SELLER",l:2.95,w:1.7,h:0.56,d:0.45,k:0.8,desc:"Larger three-ring rectangular inflatable pool in blue and white, 295 × 170 × 56 cm, with room for the whole family."},

 {name:"Teal Inflatable Family Pool",slug:"teal-inflatable-family",n:1,cat:"inflatable",shape:"rect",price:120,badge:"",l:3,w:1.8,h:0.6,d:0.5,k:0.8,desc:"Spacious teal-and-white rectangular inflatable pool with a soft padded floor. Easy to inflate and fill on any level lawn."},

 {name:"Kids Pool with Basketball Hoop",slug:"kids-basketball-pool",n:1,cat:"kids",shape:"freeform",price:75,badge:"NEW",l:2.6,w:1.9,h:0.7,d:0.55,k:0.8,desc:"Light-blue inflatable play pool with a built-in basketball hoop and ball. Shaped for splashing, games and family fun."},

 {name:"Inflatable Family Pool 260 × 160 cm",slug:"inflatable-family-260x160",n:2,cat:"inflatable",shape:"rect",price:100,badge:"VALUE",l:2.6,w:1.6,h:0.56,d:0.45,k:0.8,desc:"Three-ring rectangular inflatable pool in blue and white, 260 × 160 × 56 cm. Light, quick to inflate and easy to store."},

 {name:"Printed Sea-Life Inflatable Pool",slug:"sea-life-inflatable",n:1,cat:"kids",shape:"rect",price:100,badge:"",l:2.6,w:1.7,h:0.65,d:0.5,k:0.8,desc:"Rectangular three-ring inflatable pool with a bright printed sea-life and palm-tree design on the walls. Fun for kids and families."},

 {name:"Kids Printed-Liner Frame Pool",slug:"kids-printed-frame",n:1,cat:"kids",shape:"rect",price:200,badge:"",l:2.6,w:1.6,h:0.5,d:0.4,k:1,desc:"Kids’ rectangular frame pool with a colourful printed liner and sturdy legs. Holds more water than an inflatable and is simple to set up."},

 {name:"Oval Inflatable Pool",slug:"oval-inflatable",n:1,cat:"inflatable",shape:"freeform",price:79,badge:"",l:2,w:1.2,h:0.5,d:0.4,k:0.8,desc:"Oval-shaped inflatable pool in pale blue with a white rim. Compact and light, suited to small yards."},

 {name:"Rainbow Round Kids Pool",slug:"kids-rainbow-round",n:1,cat:"kids",shape:"round",price:45,badge:"POPULAR",l:1.2,w:1.2,h:0.45,d:0.3,k:0.8,desc:"Colourful rainbow-gradient round inflatable kids’ pool with a padded pink floor. Great for splashing in the garden or on the deck."},

 {name:"Cartoon Kids Inflatable Pool",slug:"kids-cartoon-pool",n:1,cat:"kids",shape:"rect",price:75,badge:"",l:1.3,w:0.9,h:0.4,d:0.3,k:0.8,desc:"Rectangular kids’ inflatable pool with a clear blue wall and fun cartoon beach print, with a soft floor for little swimmers."},

 {name:"Kids Soft-Floor Inflatable Pool",slug:"kids-soft-floor-pool",n:1,cat:"kids",shape:"rect",price:35,badge:"VALUE",l:1.5,w:1,h:0.3,d:0.2,k:0.8,desc:"Small rectangular inflatable paddling pool with a padded inflatable floor. Gentle and safe for babies and toddlers under supervision."}
];
const litres=p=>{const v=(p.round?Math.PI*(p.l/2)**2:p.l*p.w)*p.d*(p.k||1)*1000;return Math.round(v/(v<1000?10:100))*(v<1000?10:100)};
const P=RAW.map((x,i)=>({...x,id:i+1,round:x.shape=='round',litres:litres({...x,round:x.shape=='round'}),imgs:Array.from({length:x.n},(_,k)=>`images/${x.slug}-${k+1}.jpg`),rating:(4.4+(i*3%6)/10).toFixed(1),color:'#2b8fd6',real:true}));
const MAXP=Math.ceil(Math.max(...P.map(p=>p.price))/1000)*1000;
const dimText=p=>p.round?`Ø ${p.l} × ${p.h} m`:`${p.l} × ${p.w} × ${p.h} m`;

const FAQ=[['How long does delivery take?','Frame and inflatable pools usually ship within days; fibreglass pools take longer because they are delivered by crane truck and installed on site.'],['Do I need to prepare the ground?','Yes. Frame and inflatable pools need a flat, firm, clear surface. Fibreglass pools need an excavation — we can advise on site preparation.'],['Can you install the pool for me?','Yes. Choose the "Pool + installation" package, or message us on Telegram for a quote.'],['What size pool do I need?','Tell us the space you have and how many people will use the pool, and we will recommend a size.'],['Can I talk to someone before ordering?','Yes — message us on Telegram any time and our team will help you choose.'],['How do I order?','Add pools to your cart and send your order request. Our team confirms the price, delivery time and payment details with you directly.'],['Can I send screenshots of the pools I like?','Yes — use the Telegram or email buttons, or the chat button, and attach screenshots of the models you chose.']];
const LEGAL=n=>n=='Privacy Policy'?[
['What we collect','When you use our contact form or send an order request, we receive your name, email, phone number, delivery address and message. If you message us on Telegram or email, we receive whatever you choose to send, including photos and screenshots.'],
['How we use it','We use your details only to answer your enquiry, confirm prices, arrange delivery and installation, and provide support. We do not sell your information.'],
['Your cart and wishlist','Your cart and wishlist are saved in your own browser on your device so they are still there when you return. You can clear them at any time by clearing your browser data.'],
['Third-party services','Messages may pass through services such as Telegram, email providers and our website form provider, each with its own privacy policy. Our live chat, if enabled, is provided by Tawk.to.'],
['Contact','To ask us to correct or delete your information, email '+EMAIL+'.']]:[
['Orders and prices','Submitting an order request does not create a binding contract. We confirm availability, the final price, delivery cost and payment details with you directly before any order is accepted. Prices shown are guide prices and may change.'],
['Delivery and installation','Delivery times depend on the pool type, your location and site readiness. You are responsible for providing a suitable, level and accessible site. Installation is quoted separately unless it is included in the package you choose.'],
['Product information','Sizes, capacities and images are for guidance and may differ slightly from the product supplied.'],
['Safety','Pools must always be used with adult supervision, especially around children. Follow the manufacturer’s safety instructions.'],
['Contact','Questions about these terms? Email '+EMAIL+' or message us on Telegram.']];
