# Portafolio — Pablo Ortega

Portafolio personal. React 19 + TypeScript + Vite + Tailwind CSS v4.

## Desarrollo local

```bash
cd client
npm install
npm run dev
```

## Con Docker

```bash
docker compose up --build
```

Sirve en [http://localhost:5173](http://localhost:5173).

## Variables de entorno

Copiar `client/.env.example` a `client/.env` y completar:

- `VITE_CV_URL` — link público de descarga del CV. Si queda vacío, el botón "Descargar CV" no se muestra.

## Build de producción

```bash
cd client
npm run build
```
