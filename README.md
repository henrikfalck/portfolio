## Get started

```sh
# Create and enter the folder where you want your files to end up
mkdir my_folder && cd my_folder

# Download the repo
git clone https://gitlab.com/HenrikFalck/hf-gatsby-starter.git

# Create a new repo on your own account and make it your remote origin
git remote add origin git@gitlab.com:[Username]/[Project-name].git
git remote set-url https://gitlab.com/[Username]/[Project-name].git

# Check if your origin is correct
git remote -v

# Push your first commit to your new project
git add . && git commit -m "Initial commit" && git push -u origin master
```

## ⚙️ Installed plugins

- **[Gatsby SASS](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)**
- **[Google Analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)**

## ⚡️ Custom commands

```sh
# Updates NPM and Gatsby to the newest stable version, and updates and audits all the installed packages.
npm run update-template
```

## 🧐 What's inside?

A quick look at the files and directories you'll see in the template.

    .
    ├── node_modules
    ├── src
        ├── brand-components
        ├── components
        ├── pages
        └── style
            ├── fonts
            ├── _typography.scss
            └── base.scss
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/)
