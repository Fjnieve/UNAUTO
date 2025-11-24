# App Personal UNAUTO

Aplicación web para consultar tiempos de llegada de tus paradas favoritas de autobús UNAUTO.

## Paradas Configuradas

1. **REINO UNIDO** (ID: 160)
2. **RONDA BUENAVISTA, 18** (ID: 226)
3. **ITALIA, 294** (ID: 128)

## Funcionalidades

- Consultar tiempos de llegada de cada parada individualmente
- Ver todas las paradas ordenadas por tiempo de llegada
- Interfaz optimizada para iPhone
- Actualización en tiempo real

## Cómo usar en iPhone

### Opción 1: Añadir a Pantalla de Inicio (Recomendado)

1. Sube los archivos a un servidor web (GitHub Pages, Netlify, etc.)
2. Abre la URL en Safari en tu iPhone
3. Toca el botón de compartir (cuadrado con flecha hacia arriba)
4. Selecciona "Añadir a pantalla de inicio"
5. La app aparecerá como un icono en tu pantalla de inicio

### Opción 2: Usar localmente

1. Abre el archivo `index.html` directamente en Safari
2. Guarda la página en marcadores para acceso rápido

## Cómo funciona

La aplicación hace peticiones a la web de UNAUTO (https://unauto.es/tiempos-de-llegada/) usando un proxy CORS para obtener los datos en tiempo real. Luego parsea el HTML y muestra la información de forma ordenada y optimizada para móvil.

## Notas técnicas

- Usa un proxy CORS (api.allorigins.win) para evitar restricciones de origen cruzado
- Los tiempos se obtienen en tiempo real desde los servidores de UNAUTO
- Si el proxy no funciona, se muestra un enlace directo a la página de UNAUTO

## Personalización

Para añadir o cambiar paradas, edita el objeto `paradas` en el JavaScript del archivo `index.html`:

```javascript
const paradas = {
    160: { nombre: 'REINO UNIDO', url: '...' },
    226: { nombre: 'RONDA BUENAVISTA, 18', url: '...' },
    128: { nombre: 'ITALIA, 294', url: '...' }
};
```

## Problemas conocidos

- El proxy CORS puede ser lento en ocasiones
- Si el proxy falla, se proporciona enlace directo a UNAUTO.es
- La app necesita conexión a internet para funcionar
