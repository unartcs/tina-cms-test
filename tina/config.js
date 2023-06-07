import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main" || '';

export default defineConfig({
  branch,
  clientId: 'cb2b421f-6b33-4e78-aa6f-2e4cb3496679', // Get this from tina.io
  token: '7a3b8a5dfd57be1f68bab8f64222961c9815e0a0', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
