/** @format */
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

const TableContent = ({ body }: { body: PortableTextBlock[] }) => {
  const tableBlocks = {
    block: ({ node, children }: any) => {
      const style = node.style || 'normal';
      if (style === 'h1') {
        return (
          <a href={`#${node._key}`} className="hover:underline text-blue-600">
            <li>{children}</li>
          </a>
        );
      }
      if (style === 'h2') {
        return (
          <a href={`#${node._key}`} className="hover:underline text-blue-600">
            <li>{children}</li>
          </a>
        );
      }
      if (style === 'h3') {
        return (
          <a href={`#${node._key}`} className="hover:underline text-blue-600">
            <li>{children}</li>
          </a>
        );
      }

      return <></>;
    },
  };
  return (
    <div className="flex flex-col border-dashed border-dashed border-2 border-indigo-600 p-4 w-1/2 my-4">
      <div className="title-font font-medium text-gray-900 section-heading text-center">
        Mục Lục
      </div>
      <ul className="list-none">
        <PortableText value={body} components={tableBlocks} />
      </ul>
    </div>
  );
};
export default TableContent;
