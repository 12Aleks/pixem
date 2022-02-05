import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div>
                <Link  href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About project</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;