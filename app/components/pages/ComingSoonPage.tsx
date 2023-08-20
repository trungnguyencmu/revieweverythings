import Link from 'next/link';
import React from 'react';
const ComingSoonPage: React.FC = () => {
return (
  <>
    <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <div className="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
        <Link
          href="/"
          className="font-bold bg-gradient-to-r from-orange-400
                  via-red-500 to-purple-600 bg-clip-text text-transparent flex gap-2 items-center"
        >
          <div>Review Everythings</div>
        </Link>

        <h1 className="text-5xl py-3">
          We are <b>Almost</b> there!
        </h1>
        <p>Stay tuned for something amazing!!!</p>
      </div>
    </div>
  </>
);
};
export default ComingSoonPage;
