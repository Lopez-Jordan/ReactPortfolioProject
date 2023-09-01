export default function ProjectCard(props) {
    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px',
    };

    const imageStyle = {
        width: '100%',
        marginBottom: '12px',
        borderRadius: '4px',
    };

    const linkStyle = {
        display: 'block',
        margin: '8px 0',
        color: '#007bff',
        textDecoration: 'none',
    };

    return (
        <div style={cardStyle}>
            <h5>{props.name}</h5>
            <img src={props.imagePath} alt="project image" style={imageStyle} />
            <a href={props.deployed} style={linkStyle}>Deployed Link</a>
            <a href={props.repo} style={linkStyle}>Repo Link</a>
        </div>
    );
}
