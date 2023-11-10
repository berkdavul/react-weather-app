import classes from "./style.module.scss"
const SuggestionList = ({ suggestions, onSuggestionSelect }) => {
    return (
        <ul className={classes.suggestions}>
            {suggestions.map((item, index) => (
                <li key={index} onClick={() => onSuggestionSelect(item)}>
                    {item.name}, {item.country}
                </li>
            ))}
        </ul>
    )
}
export default SuggestionList