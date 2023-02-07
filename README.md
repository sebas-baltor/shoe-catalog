This is a [Next.js](https://nextjs.org/), [Sanity.io]("https://www.sanity.io/") and [Tailwindcss]("https://tailwindcss.com/") started with the oficial [sanity documentation]("https://www.sanity.io/guides/sanity-nextjs-tailwindcss") and a first 40 min of this [Youtube Video]("https://www.youtube.com/watch?v=x3fCEPFgUSM")

## Getting Started

First, install all dependencies:

```bash
npm i 
# or
npm install
```
Change your envarioment variables, to do that go to [sanity personal manage]("https://www.sanity.io") if you doesn't have one, login

Then change you enviroment variables into .env file

```.env
NEXT_PUBLIC_SANITY_PROJECT_ID=you_proyect_id
NEXT_PUBLIC_SANITY_DATASET=dataset_name
NEXT_PUBLIC_SANITY_API_VERSION=release_date
```

Now you are ready to run
```bash
npm run dev 
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- [next-sanity example]("https://github.com/sanity-io/next-sanity#using-the-pages-directory-2")

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
