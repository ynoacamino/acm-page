

export default function Social ({nombreRed, href}) {
    let style = `${nombreRed} block p-3 text-[20px] text-white no-underline transition-all duration-300 ease-in-out hover:bg-white hover:text-[#00304d] cursor-pointer`

    return (
        <li className="inline-block">
            <a
                href={href}
                className={style}
                aria-hidden="true"
            ></a>
        </li>
    );
}