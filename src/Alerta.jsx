
function Alerta(props) {

    return (
        <div>
            <div className="alert alert-success text-center" role="alert">
                {props.text}
            </div>
        </div>
    );
}

export default Alerta;

