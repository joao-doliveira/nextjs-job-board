import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = "jobs/new";
  return (
    <header className="shadow-sm">
      <nav className="max-w-5x1 m-auto flex items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="Flow jobs logo" />
          <span className="text-1 font-bold tracking-tight">Flow jobs</span>
        </Link>
        <Button asChild>
          <Link href={"/" + pathname}>Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
