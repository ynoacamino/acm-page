export default function Info ({nombre, cargo}) {
    const style = "p-6 h-40 flex flex-col justify-end";
    const nameStyle = "2xl:text-2xl text-xl font-semibold text-[#007bc2] mb-4 ";
    const jobStyle = "2xl:text-lg text-md text-[#00629b]";
    
    return (
      <div className={style}>
        <div className="h-full flex justify-center items-center ">
            <h3 className={nameStyle}>{nombre}</h3>
            </div>
        <h4 className={jobStyle}>{cargo}</h4>
      </div>
    );
}