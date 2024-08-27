export default function Nav() {
  return (
    <nav className=" flex flex-row justify-between my-8">
      <h1 className="tracking-[-0.05em] text-2xl font-medium ">
        RIDHO  PRIAMBODO
      </h1>
      <ul className="flex items-center text-lg">
        <li className="mx-8 hover:text-neutral-400">
            <a href="#about">About</a></li>
        <li className="mx-8 hover:text-neutral-400"><a href="#project">Project</a></li>
        <li className="mx-8 hover:text-neutral-400"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
