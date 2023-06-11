import Image from "next/image";
// import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { FaBeer } from 'react-icons/fa';

export default function Posts() {
  return (
    <main>
      {/* <AddIcon boxSize={6} /> */}
      <FaBeer />
      <div className="bg-gray-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">Card content goes here.</p>
          </div>

          <div className="rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">Card content goes here.</p>
          </div>

          <div className="rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">Card content goes here.</p>
          </div>

          <div className="rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">Card content goes here.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
