/** @format */
const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "advantage",
      title: "Advantage",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "disadvantage",
      title: "Disadvantage",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default product;
