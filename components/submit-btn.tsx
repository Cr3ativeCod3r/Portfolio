// import React from "react";
// import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// export default function SubmitBtn() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
//       disabled={pending}
//     >
//       {pending ? (
//         <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
//       ) : (
//         <>
//           Submit{" "}
//           <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
//         </>
//       )}
//     </button>
//   );
// }
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamiczny import ikony z wyłączeniem renderowania po stronie serwera
const FaPaperPlane = dynamic(() => import('react-icons/fa').then(mod => mod.FaPaperPlane), {
  ssr: false,
});

export default function SubmitButton() {
  const [pending, setPending] = useState(false);

  // Logika dla operacji, która ustawia stan `pending` na true/false
  // Przykład może obejmować obsługę zdarzenia onSubmit dla formularza

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
