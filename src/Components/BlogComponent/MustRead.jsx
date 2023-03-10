import { BookSaved } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const MustRead = (props) => {
  return (
    <div className="relative w-full my-10 bg-slate-100 border border-solid border-l-4 border-l-red-400 rounded-2xl shadow-default overflow-hidden pr-[180px] py-7 flex">
      <strong className='absolute right-0 top-0 w-[165px] h-full bg-cover bg-center bg-no-repeat bg-[url("/src/assets/img/relatedLink.svg")] flex justify-center '>
        <span>
          <BookSaved size="25" className="text-white ml-2" variant="Bulk" />
        </span>
        <p className="text-white font-bold text-2xl">حتما بخونید</p>
      </strong>


      <Link to="" className="text-headingColor font-bold text-2xl">{props.children}</Link>
    </div>
  );
};

export default MustRead;
