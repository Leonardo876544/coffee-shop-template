# Coffee Shop - Documentation

Thank you for purchasing the Coffee Shop website template.

This template was built with HTML5, CSS3 and JavaScript, with a focus on responsive design, accessibility, SEO and clean code.

---

## Project Structure

```text
assets/
├── css/
├── icons/
├── images/
└── js/

about.html
contact.html
gallery.html
index.html
menu.html
services.html
README.md
LICENSE
CHANGELOG.md
DOCUMENTATION.md
```

---

## Changing Text

The content of each page can be edited directly in its corresponding HTML file.

```text
index.html
about.html
menu.html
gallery.html
services.html
contact.html
```

Open the desired file and replace the existing text with your own content.

---

## Changing Images

The images are located inside:

```text
assets/images/
```

Replace the existing images with your own images.

If you use different filenames, remember to update the corresponding image path in the HTML file.

---

## Changing Colors

The main colors used throughout the template can be found in the CSS files.

Global styles are located in:

```text
assets/css/global.css
```

Some colors are also defined in page-specific stylesheets:

```text
assets/css/pages/
```

For example:

```text
assets/css/pages/home.css
assets/css/pages/about.css
assets/css/pages/menu.css
assets/css/pages/gallery.css
assets/css/pages/services.css
assets/css/pages/contact.css
```

To change a specific color, open the corresponding CSS file and look for properties such as:

```css
color: #C8A27A;
background-color: #2A1F1A;
```

Replace the color value with the desired color.

> For a consistent design, make sure that colors used throughout the website are updated in all relevant stylesheets.

---

## Changing Fonts

The template uses Google Fonts.

The fonts are loaded in the `<head>` of the HTML pages.

The current fonts are:

- Playfair Display
- Inter

To use different fonts, replace the Google Fonts link and update the corresponding `font-family` declarations in the CSS files.

---

## Favicon

The favicon is located at:

```text
assets/icons/favicon.ico
```

To use a different favicon, replace the existing file or update its path in the HTML `<head>`.

---

## Navigation Links

The navigation links are located in the HTML files.

Update the `href` attributes if you want to change the destination of a link.

Example:

```html
<a href="about.html">About</a>
```

---

## Social Media Links

The social media icons are included in the navigation/footer components.

Replace the `#` placeholder with the client's actual social media URL.

Example:

```html
<a href="https://instagram.com/yourprofile">
```

---

## Google Maps

The contact page contains a Google Maps iframe.

Replace the existing iframe `src` with the client's own Google Maps Embed URL.

Example:

```html
<iframe
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    title="Location map">
</iframe>
```

---

## Contact Form

The contact form included in this template is a front-end component.

The form layout and styling are already implemented, but form submission requires an external service or backend integration.

Possible solutions include:

- PHP
- Node.js
- Formspree
- EmailJS
- Another preferred backend or form service

The buyer can choose the solution that best fits the project.

---

## Order Buttons

The "Order Now" buttons are front-end elements.

They can be connected to the client's preferred ordering system, such as:

- WhatsApp
- An online ordering platform
- A custom ordering system
- Another preferred service

Update the button or link according to the client's requirements.

---

## Gallery

The Gallery page includes category filters for:

- All
- Coffee
- Desserts
- Atmosphere

The filtering functionality is handled by JavaScript.

Gallery images can be replaced inside:

```text
assets/images/gallery/
```

If you add or remove categories, make sure the corresponding HTML and JavaScript are updated.

---

## Responsive Design

The template is designed to adapt to:

- Mobile devices
- Tablets
- Desktop screens

The responsive behavior is controlled through CSS media queries.

The main breakpoints can be found in the corresponding CSS files.

---

## JavaScript

The JavaScript files are located inside:

```text
assets/js/
```

The JavaScript currently handles interactive features such as the Gallery category filters.

---

## External Resources

This template uses the following external resources:

- Google Fonts
- Font Awesome

These resources are loaded through external CDN or Google services.

---

## Customization

The template is designed to be customized according to the client's needs.

The following elements can be changed:

- Text
- Images
- Colors
- Fonts
- Social media links
- Google Maps location
- Navigation links
- Order links
- Contact form integration

---

## Image Credits

The images used in this template were sourced from Pixabay.

Attribution is not required under the Pixabay Content License,
but credit is provided to acknowledge the original contributors.

### Image Sources

| Image | Contributor | Source |
|---|---|---|
### images-hero
| cappuccino.webp | Contributor Alexas_Fotos | [Pixabay](https://pixabay.com/illustrations/drink-coffee-caffeine-cup-8770621/) |  

| hero-1.webp | Contributor honbliss | [Pixabay](https://pixabay.com/photos/coffee-americano-beans-food-break-3740012/) |  

| hero-2.webp | Contributor Max_Dormann | [Pixabay](https://pixabay.com/photos/coffee-cappuccino-barista-caffeine-8388244/) |

| hero-3.webp | Contributor kingai | [Pixabay](https://pixabay.com/pt/illustrations/ai-gerado-caf%C3%A9-expresso-cafe%C3%ADna-9638641/) |

### images-about
| about-1.jpg | Contributor pachecoytalo | [Pixabay](https://pixabay.com/pt/photos/artisan-coffee-latte-art-9599155/) |

| about-2.jpg | Contributor anncapictures | [Pixabay](https://pixabay.com/photos/coffee-coffee-pot-good-morning-1179878/) |

| croissants.jpg | Contributor CagnoDiMediaProduction | [Pixabay](https://pixabay.com/pt/photos/croissant-caf%C3%A9-da-manh%C3%A3-comida-4806337/) |

### images-menu
| brownie.jpg | Contributor StockSnap | [Pixabay](https://pixabay.com/pt/photos/chocolate-brownies-comida-doces-2560177/) |

| bundt-cake.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| cold-brew.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| cookie.jpg | Contributor Name | [Pixabay](IMAGE_URL) |

| croissant.webp | Contributor theplanetbaker | [Pixabay](https://pixabay.com/pt/photos/croissant-caseiro-croissant-padaria-4709235/) |

| iced-latte.webp | Contributor honbliss | [Pixabay](https://pixabay.com/pt/photos/caf%C3%A9-americano-feij%C3%B5es-alimentos-3740012/) |

### images-gallery
| --- gallery --- |
| gallery-banner.webp | Contributor Name | [Pixabay](IMAGE_URL) |
| --- gallery-atmosphere --- |
| atmosphere-1.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| atmosphere-2.webp | Contributor Madun_Digital | [Pixabay](https://pixabay.com/pt/photos/loja-de-caf%C3%A9-dentro-de-casa-393954/) |

| atmosphere-3.webp | Contributor Iffany | [Pixabay](https://pixabay.com/pt/illustrations/ai-gerado-cafeteria-caf%C3%A9-cafe%C3%ADna-8650286/) |

| atmosphere-4.webp | Contributor lorilorilo | [Pixabay](https://pixabay.com/photos/coffee-brew-aroma-beans-fresh-6566645/) |

| atmosphere-5.webp | Contributor StockSnap | [Pixabay](https://pixabay.com/pt/photos/de-madeira-tabela-cafeteria-2594768/) |

| atmosphere-6.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| --- gallery-breakfast --- |
| breakfast-1.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| breakfast-2.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| breakfast-3.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| breakfast-4.webp | Contributor Pexels | [Pixabay](https://pixabay.com/pt/photos/feij%C3%A3o-caf%C3%A9-da-manh%C3%A3-ovos-fritos-1834984/) |
| breakfast-5.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| breakfast-6.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| --- gallery-coffee --- |

| coffee-1.webp | Contributor mammela | [Pixabay](https://pixabay.com/photos/coffee-breakfast-cup-pot-722270/) |

| coffee-2.webp | Contributor subarasikiai | [Pixabay](https://pixabay.com/photos/brewed-coffee-coffee-hot-water-pour-6774915/) |

| coffee-3.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| coffee-4.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| coffee-5.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| coffee-6.webp | Contributor Be_Stasya | [Pixabay](https://pixabay.com/photos/coffee-milk-cappuccino-drink-caf%C3%A9-4862622/) |

| --- gallery-desserts --- |

| desserts-1.webp | Contributor RitaE | [Pixabay](https://pixabay.com/pt/photos/sobremesa-vidro-de-doce-prato-doce-1079759/) |

| desserts-2.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| desserts-3.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| desserts-4.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| desserts-5.webp | Contributor Name | [Pixabay](IMAGE_URL) |

| desserts-6.webp | Contributor Name | [Pixabay](IMAGE_URL) |

 ### Images-services 
| services-1.png | Contributor Name | [Pixabay](IMAGE_URL) |

All Pixabay content remains subject to the Pixabay Content License.

---

## Support

For custom development, backend integration or additional functionality, additional development work may be required.
