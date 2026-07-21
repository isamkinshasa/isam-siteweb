export const eventSchema = {
  name: "event",
  title: "Événements",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Horaire",
      type: "string",
      description: "Ex: 10h00 - 17h00 | Campus Principal",
    },
    {
      name: "location",
      title: "Lieu",
      type: "string",
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Académique", value: "academique" },
          { title: "Culturel", value: "culturel" },
          { title: "Sportif", value: "sportif" },
          { title: "Professionnel", value: "professionnel" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Photo de couverture",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Sans date",
      };
    },
  },
  orderings: [
    {
      title: "Date (prochains en premier)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
