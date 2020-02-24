import Link from "next/link";

const Index = () => <div>

  <h3><a href="https://www.cluemediator.com/">Clue Mediator</a></h3>
  <br />

  <Link href="/">
    <a style={{ marginRight: 15 }}>Home</a>
  </Link>
  <Link href="/about">
    <a style={{ marginRight: 15 }}>About</a>
  </Link>
  <Link href="/contact">
    <a>Contact</a>
  </Link>

  <h1>Home page!</h1>
</div>

export default Index;