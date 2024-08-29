export default function Nav() {
  return (
    <nav className=" flex flex-row justify-between my-8 ">
      <h1 className="tracking-[-0.05em] text-2xl font-medium sm:ms-0 ms-14 ">
        RIDHO  PRIAMBODO
      </h1>
      <ul className=" items-center text-lg hidden sm:flex ">
        <li className="mx-8 hover:text-neutral-400 transation ease-in-out hover:scale-110"><a href="#about">About</a></li>
        <li className="mx-8 hover:text-neutral-400 transation ease-in-out hover:scale-110 "><a href="#project">Projects</a></li>
        <li className="mx-8 hover:text-neutral-400 transation ease-in-out hover:scale-110"><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}
