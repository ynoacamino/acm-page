export default function Info ({nombre, cargo}) {
    let style = "";

    return (
        <div className={style}>
                <h3 className="">{nombre}</h3>
                <h4 className="">{cargo}</h4>
        </div>
    );
}