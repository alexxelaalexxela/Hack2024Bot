import Image from 'next/image';
import GithubLogo from '../public/assets/github.svg';


export function GithubLink() {

  return (
    <div className="mx-1 mt-10">
      {/* Adjust the sizes for xxs to be smaller; adjust further as needed for your design */}
      <div className="bg-[url(../public/assets/flag.png)] h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] bg-no-repeat bg-contain bg-center"></div>
    </div>
  );
}
