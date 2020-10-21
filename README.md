# Welcome to Custom Documentation Example!

![custom ui documentation](https://user-images.githubusercontent.com/18171127/96633996-44c2cc00-12f0-11eb-999b-ae9330d0a6c5.png)
 
In this example you'll find an easy and slick way to implement your [Readme](https://readme.com/) content in a custom front-end using [Next.js](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/).

## Getting Started

### Install

```bash
yarn install
# or
npm install
```

### Run

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, this will redirect you to [http://localhost:3000/docs](http://localhost:3000/docs) where you'll be able to read the instructions on how to connect and modify the example.

### Set up environment variables

In the Readme dashboard go get your API KEY in the Configuration > API KEY tab.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `README_AUTH_TOKEN` should be the API token you just copied.

Your `.env.local` file should look like this:

```bash
README_AUTH_TOKEN=...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Tailwind, take a look at the following resources:

- [Tailwind Documentation](https://tailwindcss.com/docs/installation) - learn about Tailwind customization features.

To learn more about Readme, take a look at the following resources:

- [Readme Documentation](https://docs.readme.com/developers/reference/intro) - learn about Readme features and API.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import/git?c=1&s=https://github.com/scaleapi/custom-documentation-example&env=README_AUTH_TOKEN&envDescription=Required%20to%20connect%20the%20app%20with%20ReadMe&envLink=https://github.com/scaleapi/custom-documentation-example%23set-up-environment-variables) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
