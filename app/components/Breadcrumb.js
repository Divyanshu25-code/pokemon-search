'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const path = usePathname();
  const pathArray = path.split('/').filter((path) => path);
console.log(path,"pathname")
  return (
    <nav className="text-sm mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 2).join('/')}`;
          const isLast = index === pathArray.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2 capitalize">
              <span>/</span>
              {!isLast ? (
                <Link href={href} className="text-blue-500 hover:underline">
                  {decodeURIComponent(path)}
                </Link>
              ) : (
                <span className="font-bold">{decodeURIComponent(path)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
