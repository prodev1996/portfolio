import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    ? { kind: "github", repo: "prodev1996/portfolio" }
    : { kind: "local" },
  ui: { brand: { name: "Rajiv / Writing" } },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "content/articles/*",
      format: { contentField: "body" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
          slug: {
            description:
              "The article URL. Keep this unchanged after publishing.",
          },
        }),
        description: fields.text({
          label: "Summary",
          description:
            "A short introduction used in the article list and search results.",
          multiline: true,
          validation: { isRequired: true, length: { max: 240 } },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Technology evolution", value: "technology" },
            { label: "Build notes", value: "build-notes" },
            { label: "Practical guides", value: "practical-guides" },
          ],
          defaultValue: "technology",
        }),
        status: fields.select({
          label: "Status",
          description:
            "Only published articles appear on the website after deployment.",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        }),
        publishedAt: fields.date({
          label: "Publication date",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        updatedAt: fields.date({
          label: "Last revised",
          description: "Optional. Set this when you make a substantial update.",
        }),
        cover: fields.image({
          label: "Cover image (optional)",
          directory: "public/writing",
          publicPath: "/writing/",
        }),
        coverAlt: fields.text({
          label: "Cover image description",
          description:
            "Describe what the image shows for readers using a screen reader.",
        }),
        body: fields.markdoc({
          label: "Article",
          options: {
            heading: [2, 3],
            image: { directory: "public/writing", publicPath: "/writing/" },
          },
        }),
        sources: fields.array(
          fields.object({
            title: fields.text({
              label: "Source title",
              validation: { isRequired: true },
            }),
            url: fields.url({
              label: "Source URL",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Sources & further reading",
            itemLabel: (props) => props.fields.title.value || "Source",
          },
        ),
      },
    }),
  },
});
