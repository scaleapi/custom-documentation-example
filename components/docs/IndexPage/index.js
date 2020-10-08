import React from 'react';

const IndexPage = () => (
  <>
    <header className="bg-gray-100 lg:bg-white dark:bg-gray-900 px-2 lg:px-0 -mx-2 lg:mx-0 py-4 sm:py-12 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
      <div>
        <h2 className="font-maax text-2xl md:text-4xl text-black dark:text-white mb-2">
          Documentation
        </h2>
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-500">
          Guides and quickstarts for integrating your company products.
        </p>
      </div>
    </header>
    <div className="py-4 text-base text-black dark:text-white">

      <h2 className="text-2xl mb-3">Welcome to your new documentation!</h2>
      <p>Thanks for trying out Scale's Custom Documentation Example! Here you'll find a quick setup guide to integrate your <a className="text-link" href="https://readme.com/">Readme</a> documentation content with this example.</p>
      <p>When you've finnished all of these steps remember to change the content of this page since it will be your home. You can do this in <span className="bg-utility-gold dark:bg-purple-dark font-code">./components/docs/IndexPage</span>.</p>

      <h2 className="text-2xl mt-7 mb-3">Connect with Readme</h2>
      <p>Go to <a className="text-link" href="https://readme.com/">Readme</a> and create an account.</p>
      <p>In the <a className="text-link" href="https://readme.com/">Readme</a> dashboard go get your <span className="bg-utility-gold dark:bg-purple-dark font-code">API KEY</span> in the <span className="bg-utility-gold dark:bg-purple-dark font-code">Configuration > API KEY</span> tab.</p>
      <p>After you've copied the <span className="bg-utility-gold dark:bg-purple-dark font-code">API KEY</span> go to the root folder and create an <span className="bg-utility-gold dark:bg-purple-dark font-code">.env</span> file and type <span className="bg-utility-gold dark:bg-purple-dark font-code">README_AUTH_TOKEN=your-auth-token</span> where <span className="bg-utility-gold dark:bg-purple-dark font-code">your-auth-token</span> is your <span className="bg-utility-gold dark:bg-purple-dark font-code">API KEY</span>.</p>
      <p>If you already have created categories and pages under the categories in <a className="text-link" href="localhost:3000/docs">localhost:3000/docs</a> you should be able to see the navigation populate with your categories and pages.</p>
      <p>If you haven't done this then you won't get any navigation or pages so get to <a className="text-link" href="https://readme.com/">Readme</a> and create those!</p>

      <h2 className="text-2xl mt-7 mb-3">Where's my code at?</h2>
      <p>You'll be able to find all the functions used to retrieve the content and the search function from <a className="text-link" href="https://readme.com/">Readme</a> in the <span className="bg-utility-gold dark:bg-purple-dark font-code">./lib/content/docs.js</span> file.</p>
      <p>On <span className="bg-utility-gold dark:bg-purple-dark font-code">./pages/api/content/docs.js</span> you'll find where we store search results from the <a className="text-link" href="https://www.algolia.com/">Algolia</a> integration <a className="text-link" href="https://readme.com/">Readme</a> has. You can find more information about API Routes in the <a className="text-link" href="https://nextjs.org/docs/api-routes/introduction">Next.js API Routes</a> documentation.</p>
      <p>On the <span className="bg-utility-gold dark:bg-purple-dark font-code">./pages/docs</span> folder you'll be able to find the home for docs and the <span className="bg-utility-gold dark:bg-purple-dark font-code">[slug].js</span> file which will be rendering any page under the category you've created it.</p>
      <p>Last but not least in the <span className="bg-utility-gold dark:bg-purple-dark font-code">./components</span> folder you'll find all the components we used to create this example. Feel free to customize anything you want!</p>

      <h2 className="text-2xl mt-7 mb-3">How to style?</h2>
      <p>In the <span className="bg-utility-gold dark:bg-purple-dark font-code">./tailwind.config.js</span> file you'll be able to see all the customizations we did for the <a className="text-link" href="https://tailwindcss.com/">Tailwind</a> theme. There you'll be able to change fonts, colors, spacings, etc. More information about the Tailwind Theme on the <a className="text-link" href="https://tailwindcss.com/docs/theme">Tailwind Theme</a> documentation.</p>
      <p>We also used <a className="text-link" href="https://github.com/css-modules/css-modules">CSS Modules</a> for the custom CSS we wanted to add to the example, you can find this CSS in any <span className="bg-utility-gold dark:bg-purple-dark font-code">.module.css</span> file.</p>
      <h2 className="text-2xl mt-7 mb-3">Good luck, have fun :)</h2>
    </div>
  </>
);

export default IndexPage;
