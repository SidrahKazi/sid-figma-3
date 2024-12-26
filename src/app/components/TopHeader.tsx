import Link from 'next/link';
import { RxDividerVertical } from "react-icons/rx";


export default function Header() {
    return (
        <header className="bg-gray-50 text-black pl-6 pr-12 mt-0 text-xs">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <img src="/Frame.png" alt="Logo" />

                {/* Links */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link className="hover:text-gray-400" href="/">Find a Store</Link>
                        </li>

                      <li> 
                          <RxDividerVertical  size={25}/>
                          </li>

                        <li>
                            <Link className="hover:text-gray-400" href="/Help">Help</Link>
                        </li>

                        <li> 
                             <RxDividerVertical  size={25}/>
                              </li>
                        <li>
                            <Link className="hover:text-gray-400" href="/JoinUs">Join us</Link>
                        </li>

                        <li> 
                             <RxDividerVertical  size={25}/>
                        </li>

                        <li>
                            <Link className="hover:text-gray-400" href="/SignIn">Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
