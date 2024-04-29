

export default function Social ({nombreRed, href}) {
    let style = `${nombreRed} block p-3 text-[17px] text-white no-underline transition-all duration-300 ease-in-out hover:bg-white hover:text-neutral-700`

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