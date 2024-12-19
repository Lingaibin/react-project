interface CoreConceptProps {
    image: string;
    title: string;
    description: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ image, title, description }) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default CoreConcept;