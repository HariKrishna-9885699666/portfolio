# Professional Portfolio - Next.js 16 & Sanity CMS

A high-performance, SEO-optimized personal portfolio built for a Senior Full Stack Developer. This project features a dynamic content management system (CMS), modern animations, and production-ready SEO configurations.

## 🚀 Live Demo
[harikrishna.is-a-good.dev](https://harikrishna.is-a-good.dev/)

---

## 🛠 Tech Stack & Packages

### Core Framework
- **[Next.js 16 (App Router)](https://nextjs.org/)**: The foundation of the application, providing server-side rendering, static site generation, and optimized routing.
- **[React 19](https://react.dev/)**: Used for building the component-based user interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety and improves developer experience.

### Content Management (Sanity CMS)
- **[Sanity.io](https://www.sanity.io/)**: A headless CMS used to manage all portfolio data (Bio, Experience, Skills, Projects).
- **`next-sanity`**: Provides seamless integration between Next.js and the Sanity Content Lake.
- **`@sanity/client`**: Official client for fetching data and performing GROQ queries.
- **`@sanity/image-url`**: Efficiently generates optimized, CDN-backed image URLs with on-the-fly resizing.
- **`@portabletext/react`**: Deeply customized renderer for Sanity's "Portable Text" (Rich Text), supporting bullet lists, links, and specialized formatting.

### Aesthetics & Animations
- **[Framer Motion](https://www.framer.com/motion/)**: Powers the high-end 3D tilt effects and entry animations in the **Expertise** section.
- **[Tailwind CSS](https://tailwindcss.com/)**: Used for utility-first styling and responsive layouts.
- **`styled-components`**: Used for specialized component-level styling and theme consistency.

### Communication & Utilities
- **[Resend](https://resend.com/)**: Integrated with the contact form to deliver emails reliably to the owner.
- **`lucide-react` / FontAwesome**: Provides a consistent iconography system across the site.

---

## ✨ Features

- **Dynamic Metadata & SEO**: 
  - Automated `generateMetadata` implementation for social media sharing (WhatsApp, LinkedIn, Twitter).
  - Open Graph (OG) integration with dynamic profile image thumbnails.
  - Automated `sitemap.xml` and `robots.txt` generation.
- **Interactive Expertise Grid**: 3D animated skill icons that react to hover and touch.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop screens.
- **Portable Text Architecture**: Allows complex formatting in Bio and Experience sections while maintaining a consistent design system.
- **Fast Build Times**: Uses Next.js Turbo for a lightning-fast development experience.

---

## 📂 Project Structure

- `src/app`: App Router logic, metadata configurations, and global layouts.
- `src/components/sections`: Semantic UI sections (Hero, About, Experience, etc.).
- `src/sanity`: Schema definitions and internal CMS configuration.
- `src/lib`: Shared utilities (Sanity client, Portable Text to Text converter, GROQ queries).
- `public`: Static assets including optimized CSS and global scripts.

---

## � Content Management (Sanity Studio)

You can manage all your portfolio content (Bio, Experience, Skills, Education) using the embedded Sanity Studio.

### How to update data:
1.  **Run the project locally**:
    ```bash
    yarn dev
    ```
2.  **Access the Studio**: Open [http://localhost:3000/studio](http://localhost:3000/studio) in your browser.
3.  **Login**: Use your Sanity credentials (or the provider you linked: GitHub, Google, etc.).
4.  **Edit Content**:
    - Select a document type (e.g., **Profile** for bio/social links, **Skills** for expertise grid).
    - Make your changes in the editor.
    - Click **Publish** at the bottom right to save and update the live data.

### Schema Definitions:
The data structure is defined in:
- `src/sanity/schemaTypes/`: Modify these files to add/change fields in the Studio.

---

1. **Install Dependencies**:
   ```bash
   yarn install
   ```

2. **Configure Environment**:
   Create a `.env.local` file with your Sanity Project ID and Dataset.

3. **Run Development Server**:
   ```bash
   yarn dev
   ```

4. **Build for Production**:
   ```bash
   yarn build
   ```

---

## 📜 Scripts

- `yarn dev`: Starts the Next.js development server with Turbo.
- `yarn build`: Creates an optimized production build.
- `yarn lint`: Runs ESLint to ensure code quality and remove unused imports/variables.
- `yarn start`: Starts the production server.
