
export default function ImageContainer ({src, nombre}) {
    let color = "after:bg-[radial-gradient(circle,rgba(0,11,18,1)_0%,rgba(0,61,96,1)_100%)] before:bg-[radial-gradient(circle,rgba(0,48,77,1)_0%,rgba(0,11,18,1)_100%)]";

    let style = "2xl:h-[180px] 2xl:w-[180px] w-[170px] h-[170px] inline-block 2xl:mb-4 2xl:mt-4 relative z-[1] 2xl:h-[200px] 2xl:w-[200px] ";
    let styleBefore = "before:content-[''] before:w-full before:h-0 before:rounded-[50%] before:bg-blue-400 before:absolute before:bottom-[135%] before:right-0 before:left-0 before:opacity-90 before:scale-[3] before:transition-all before:duration-[0.35s] before:ease-linear before:z-[-2]";
    let styleAfter = "after:content-[''] after:w-full after:h-full after:rounded-[50%] after:absolute after:top-0 after:left-0 after:z-[-1]";
    let styleGroup = "group-hover:before:h-full";

    return (
        <div className={`${style} ${styleBefore} ${styleAfter} ${styleGroup} ${color}`} >
            <Image
                src={src}
                alt={nombre} 
            />
        </div>
    );

}

function Image ({src, nombre}) {
    let style = "w-full h-auto rounded-[50%] scale-100 transition-all duration-1000 ease-in-out";
    let styleGroup = "group-hover:scale-[0.9] group-hover:shadow-[0_0_0_5px_rgba(0,48,77,0.5)]";

    return (
        <>
            <img className={`${style} ${styleGroup}`}
            src={src}
            alt={nombre} 
            />
        </>
    );

}
