// Recibe como prop name e email
function Card({ name, email }) {
    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            // src necesita el prop name
                            src={`https://robohash.org/${name}.png?size=200x200`}
                            // alt necesita el prop name
                            alt={`${name}`}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            {/* despliegue el nombre del robot */}
                            <p className="title is-4">{name}</p>
                            {/* despliegue el email del robot */}
                            <p className="subtitle is-6">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
