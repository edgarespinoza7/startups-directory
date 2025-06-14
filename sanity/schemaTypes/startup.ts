import { defineType, defineField } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(3).max(20).required().error("Please enter a valid category."),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) =>
        Rule.required().error("Please enter a valid image URL."),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
