# Massimo Modular — swimming pool store (HTML / CSS / JavaScript)

Open `index.html` by double-clicking it (needs internet for icons and fonts).
To go live, drag this whole folder onto https://app.netlify.com/drop

## Edit everything in js/data.js
- CUR / DELIVERY — currency symbol and delivery fee
- VIDEOS    — three home-page videos (YouTube/Vimeo link or file like videos/pools.mp4)
- HERO / FEATURED — the 4 home-page slides and the "Popular pools" list (by product number)
- RAW       — the 30 pools, one per line: name, slug, n (number of photos), category
              (frame, fibreglass, inflatable, kids), shape, price, badge, length/width/height/depth in metres, description.
              Prices are placeholders; sizes are estimates from the photos (except the two with sizes printed on the photo).

## Photos
Each pool's photos are in images/<slug>-1.jpg, -2.jpg, -3.jpg (best at 4:3, e.g. 1200x900).
To add a pool: drop its photos in images/ and add a new line to RAW with the same slug and n.
To add a Kids/other category: add it to CATS in data.js.


## Adding the 3 videos (home page)
Put your videos in the videos folder named exactly: see-our-pools.mp4, delivery-installation-1.mp4, delivery-installation-2.mp4
(or change the src names in VIDEOS in js/data.js). They play in the site's own video player. Use portrait:true for phone-shaped videos.
The "Videos" menu link jumps to that section; "Home" goes back to the top.

## Hero (top banner)
Each slide uses a wide background photo: images/hero-1.jpg ... hero-4.jpg. Replace those files (about 1600x900) or edit HERO in js/data.js.

## Contact, chat and orders (set these in js/data.js)
- EMAIL / TELEGRAM — already set (massimomodulaalt@gmail.com, @kernel_ca_grace).
- WEB3KEY — go to web3forms.com, enter your email, they send you a free access key. Paste it here.
  Contact-form messages and order requests then arrive in your inbox (name, email, phone, message).
- TAWK — create a free account at tawk.to, add your site, open Administration > Chat Widget, copy the two ids from
  the widget code (the part after embed.tawk.to/ , like 64abc123/1h9xyz). Paste them here.
  Visitors then chat from the chat button, you reply in the Tawk.to dashboard or phone app (only you can log in).
Checkout is an "order request": it sends the cart + customer details to you; you confirm price and payment with the customer yourself.
