# ReactJS Typescript Template

## Local start

Command `npm run start` or `npm run dev`

## Change default path

Edit `homepage` in package.json.<br />
Edit browser router `basename` in App.ts.<br />
Edit `try_files` path in nginx.conf.<br />
Edit `/usr/share/nginx/html/<frontend>` in Dockerfile.<br />

## Build prod

Command `npm run build:prod`

## Docker image

Create image : `npm run build:docker`<br />
Push image : `npm run publish:docker`
