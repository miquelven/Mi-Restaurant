// eslint-disable-next-line react/prop-types
export default function Links({ setOpenMenu, openMenu }) {
  const data = [
    {
      id: 0,
      href: "#about",
      label: "sobre nós",
    },
    {
      id: 1,
      href: "#products",
      label: "produtos",
    },
    {
      id: 2,
      href: "#rating",
      label: "avaliações",
    },
    {
      id: 3,
      href: "#contact",
      label: "contato",
    },
  ];

  return (
    <>
      {data.map((d) => (
        <li
          key={d.id}
          onClick={() => setOpenMenu(false)}
          className={`py-4 ${
            openMenu
              ? "hover:bg-white/10 w-full h-full  flex justify-center"
              : ""
          }`}
        >
          <a
            href={d.href}
            className="w-full flex justify-center uppercase py-1 border-b-4 font-semibold border-transparent transition-all duration-500 hover:text-[#d3d3d3] sm:hover:border-[#BA181B]"
          >
            <span>{d.label}</span>
          </a>
        </li>
      ))}
    </>
  );
}
