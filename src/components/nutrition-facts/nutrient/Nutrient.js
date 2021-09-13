export default function Nutrient({ nutrient }) {
    return(
        <div>
        <div></div>
        <div><p>{Object.keys(nutrient)[0]}</p><p>{Object.values(nutrient)[0]}</p></div>
        <div></div>
        </div>
    )
}