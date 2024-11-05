import Link from 'next/link';
import GDG from './GDG.png'
import Image from "next/image";

const Header = () =>{
    return(
        <header className="py-8 xl:py-12 text-black">
            <div className="container mx-auto">
                <Link href="/">
                <Image src={GDG} alt="alt" width={300} height={200} />
                {/* <h1 className="text-2xl font-semibold text-accent-orange">GDG <span className="text-accent-green">On Campus</span><span className="text-accent-red"> UCB</span></h1> */}
                <p className="text-accent font-semibold">On Campus <span className="">. Université Catholique de Bukavu</span></p>
                </Link>
            </div>
        </header>
    )
}

export default Header;