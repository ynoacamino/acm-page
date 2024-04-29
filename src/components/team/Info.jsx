export default function Info ({nombre, cargo}) {
    const style = "p-6 h-40 flex flex-col justify-end";
    const nameStyle = "text-2xl font-semibold text-gray-800 mb-4 ";
    const jobStyle = "text-lg text-gray-400";
    
    return (
      <div className={style}>
        <div className="h-full flex justify-center items-center">
            <h3 className={nameStyle}>{nombre}</h3>
            </div>
        <h4 className={jobStyle}>{cargo}</h4>
      </div>
    );
}