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
        { title: "H3", value: "h3" },
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
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  // other types you may want to link to
                ]
              }
            ]
          }
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
