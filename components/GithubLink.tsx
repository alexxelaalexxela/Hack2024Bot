import Image from 'next/image';
import GithubLogo from '../public/assets/github.svg';
export function GithubLink() {
  const handleClick = () => {
    window?.open('https://github.com/shihui-huang/call-bob', '_blank')?.focus();
  };
  return (
    <div className="mx-1">
    </div>
  );
}
