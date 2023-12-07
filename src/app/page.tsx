import Link from "next/link";

export default function Home() {
  return (
  <>
    <header className="flex justify-between">
      <h1 className="text-2xl">Welcome to E-comm Application</h1>
      {/* <Link href="/users">Users</Link> */}
      <Link href="\pages\first-page.tsx">First Page</Link>
    </header>
  </>
  )
}
