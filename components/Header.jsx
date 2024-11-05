import Link from 'next/link'

const Header = () =>{
    return(
        <header className="py-8 xl:py-12 text-black">
            <div className="container mx-auto">
                <Link href="/">
                <h2 className="text-4xl font-semibold text-accent-red">GDG <span className="text-accent-green">On Campus</span><span className="text-accent"> UCB</span></h2>
                </Link>
            </div>
        </header>
    )
}

export default Header;