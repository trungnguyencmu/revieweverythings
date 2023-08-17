/** @format */

export default {
  title: "Rich Text",
  name: "portableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "Quote", value: "blockquote" },
        // block level styles
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          // add your own decorator
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
              },
            ],
            // everybody needs a URL link
          },
          {
            title: "Internal link",
            name: "internalLink",
            type: "reference",
            to: [{ type: "post" }, { type: "product" }],
            // links, but to internal docs
          },
        ],
      },
    },
    {
      title: "Product",
      name: "product",
      type: "reference",
      to: [{ type: "product" }],
      // product embed
    },
    {
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Alternative text for screen readers.",
        },
      ],
      // image + alt text!
    },
  ],
};
