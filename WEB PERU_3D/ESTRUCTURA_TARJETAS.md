# Estructura de las Tarjetas de Productos

## Cómo pedir las tarjetas de nuevo

Cuando quieras que implemente las tarjetas de productos, di:

**"Quiero las tarjetas de productos con esta estructura exacta:"**

## Estructura HTML de cada tarjeta:

```html
<div class="carousel__slide">
    <div class="wd-product product-grid-item carousel-product">
        <div class="product-wrapper">
            <div class="product-element">
                <div class="product-element-top wd-quick-shop">
                    <div class="product-i3d-top">
                        <a href="#" class="product-image-link">
                            <img loading="lazy" src="URL_DE_IMAGEN" 
                                 alt="Nombre del Producto" 
                                 class="attachment-woocommerce_thumbnail">
                        </a>
                    </div>
                    <div class="product-i3d-bottom">
                        <h3 class="wd-entities-title">
                            <a href="#">Nombre del Producto</a>
                        </h3>
                        <span class="price">
                            <span class="woocommerce-Price-amount amount">
                                <bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;PRECIO</bdi>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="top-information wd-fill">
                    <h3 class="product-i3d-nombre">Nombre del Producto</h3>
                    <span class="price">
                        <span class="woocommerce-Price-amount amount">
                            <bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;PRECIO</bdi>
                        </span>
                    </span>
                    <ul class="product-i3d-atributos">
                        <li><strong>Atributo 1</strong> Valor 1</li>
                        <li><strong>Atributo 2</strong> Valor 2</li>
                        <li><strong>Atributo 3</strong> Valor 3</li>
                        <li><strong>Atributo 4</strong> Valor 4</li>
                    </ul>
                    <div class="product-i3d-botones">
                        <div class="btn btn-viewproduct">
                            <a class="view-product" href="javascript:void(0)"><span>Ver producto</span></a>
                        </div>
                        <div class="btn btn-addcart wd-add-btn-replace">
                            <a href="javascript:void(0)" class="button btn-comprar"><span>Leer más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Clases CSS principales que deben mantenerse:

### Contenedor principal:
- `.carousel__slide` - Slide del carrusel
- `.wd-product` - Contenedor del producto
- `.product-grid-item` - Item de grid
- `.carousel-product` - Producto en carrusel

### Estructura interna:
- `.product-wrapper` - Wrapper del producto
- `.product-element` - Elemento del producto
- `.product-element-top` - Parte superior (visible siempre)
- `.wd-quick-shop` - Clase de utilidad
- `.product-i3d-top` - Contenedor de imagen
- `.product-image-link` - Enlace de imagen
- `.product-i3d-bottom` - Parte inferior con nombre y precio
- `.wd-entities-title` - Título del producto
- `.top-information` - Overlay que aparece en hover
- `.wd-fill` - Clase de utilidad
- `.product-i3d-nombre` - Nombre en el overlay
- `.product-i3d-atributos` - Lista de atributos
- `.product-i3d-botones` - Contenedor de botones
- `.btn-viewproduct` - Botón "Ver producto"
- `.btn-addcart` - Botón "Leer más"
- `.view-product` - Clase del enlace "Ver producto"
- `.btn-comprar` - Clase del enlace "Leer más"

## Funcionalidad:

1. **Hover**: Al pasar el mouse sobre la tarjeta, aparece el overlay `.top-information` con:
   - Nombre del producto
   - Precio
   - Lista de atributos
   - Dos botones: "Ver producto" y "Leer más"

2. **Botones**: Ambos botones abren WhatsApp con información del producto

3. **Estructura de precio**: Usa clases de WooCommerce:
   - `.price`
   - `.woocommerce-Price-amount`
   - `.woocommerce-Price-currencySymbol`

## Ejemplo completo de una tarjeta:

```html
<div class="carousel__slide">
    <div class="wd-product product-grid-item carousel-product">
        <div class="product-wrapper">
            <div class="product-element">
                <div class="product-element-top wd-quick-shop">
                    <div class="product-i3d-top">
                        <a href="#" class="product-image-link">
                            <img loading="lazy" src="https://ejemplo.com/imagen.jpg" 
                                 alt="Elegoo Neptune 4 Max" 
                                 class="attachment-woocommerce_thumbnail">
                        </a>
                    </div>
                    <div class="product-i3d-bottom">
                        <h3 class="wd-entities-title">
                            <a href="#">Elegoo Neptune 4 Max</a>
                        </h3>
                        <span class="price">
                            <span class="woocommerce-Price-amount amount">
                                <bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;2,000.00</bdi>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="top-information wd-fill">
                    <h3 class="product-i3d-nombre">Elegoo Neptune 4 Max</h3>
                    <span class="price">
                        <span class="woocommerce-Price-amount amount">
                            <bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;2,000.00</bdi>
                        </span>
                    </span>
                    <ul class="product-i3d-atributos">
                        <li><strong>Tecnología</strong> FDM</li>
                        <li><strong>Volumen de impresión</strong> 420 x 420 x 480 mm</li>
                        <li><strong>Resolución de Capa</strong> 0.10-0.30 mm</li>
                        <li><strong>Velocidad máxima</strong> 500 mm/s</li>
                    </ul>
                    <div class="product-i3d-botones">
                        <div class="btn btn-viewproduct">
                            <a class="view-product" href="javascript:void(0)"><span>Ver producto</span></a>
                        </div>
                        <div class="btn btn-addcart wd-add-btn-replace">
                            <a href="javascript:void(0)" class="button btn-comprar"><span>Leer más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Notas importantes:

1. **Mantener TODAS las clases** exactamente como están
2. **El overlay `.top-information`** debe estar dentro de `.product-element`
3. **Los botones** deben tener las clases `.view-product` y `.btn-comprar` para que funcionen con WhatsApp
4. **La estructura de precio** debe usar las clases de WooCommerce
5. **El hover** funciona automáticamente con CSS (`.wd-product:hover .top-information`)

## Para pedir las tarjetas de nuevo:

Simplemente di: **"Quiero las tarjetas de productos con la estructura exacta que está documentada en ESTRUCTURA_TARJETAS.md"**

