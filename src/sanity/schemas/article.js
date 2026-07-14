export const articleSchema = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Actualités", value: "actualites" },
          { title: "Événements", value: "evenements" },
          { title: "Partenariats", value: "partenariats" },
          { title: "Formations", value: "formations" },
          { title: "Vie étudiante", value: "vie-etudiante" },
        ],
      },
    },
    {
      name: "excerpt",
      title: "Extrait",
      type: "text",
      rows: 3,
      description: "Un court résumé de l'article (affiché dans les listes).",
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: "image",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Citation", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Gras", value: "strong" },
              { title: "Italique", value: "em" },
              { title: "Souligné", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Lien",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                ],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
        { type: "table" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString("fr-FR") : "Sans date",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date de publication (récent)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
