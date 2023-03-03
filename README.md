deno run --allow-read --allow-env --allow-write npm:prisma@^4.5.0 init
deno run -A --unstable npm:prisma db push
deno run -A --unstable npm:prisma generate --data-proxy
JavaScript Mastery