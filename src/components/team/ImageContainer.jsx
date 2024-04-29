
export default function ImageContainer ({src, nombre}) {

    let style = "h-[180px] w-[180px] inline-block mb-10 relative z-[1] 2xl:h-[200px] 2xl:w-[200px]";
    let styleBefore = "before:content-[''] before:w-full before:h-0 before:rounded-[50%] before:bg-blue-400 before:absolute before:bottom-[135%] before:right-0 before:left-0 before:opacity-90 before:scale-[3] before:transition-all before:duration-300 before:ease-linear ";
    let styleAfter = "after:content-[''] after:w-full after:h-full after:rounded-[50%] after:bg-blue-400 after:absolute after:top-0 after:left-0 after:z-[-1]";
    let styleGroup = "group-hover:before:h-full";

    return (
        <div className={`${style} ${styleBefore} ${styleAfter} ${styleGroup}`} >
            <Image
                src={src}
                alt={nombre} 
            />
        </div>
    );

}

function Image ({src, nombre}) {
    let style = "w-full h-auto rounded-[50%] scale-100 transition-all duration-1000 ease-in-out";
    let styleGroup = "group-hover:scale-[0.8] group-hover:shadow-[0_0_0_12px_#f7f5ec]";

    return (
        <>
            <img className={`${style} ${styleGroup}`}
            src={src}
            alt={nombre} 
            />
        </>
    );

}
