import React, {useEffect, useState} from 'react'
import tinycolor from "tinycolor2";

const ColorShadesGenerator = ({color}) => {
	const [shades, setShades] = useState([])
	function generateLighterShades(color) {
		const shades = [];
		for (let i = 0; i < 5; i++) {
			let shade = tinycolor(color).darken(5).toHexString()
			shades.push(shade);
			color = shade
		}
		return shades;
	}
	useEffect(() => {
		if(color){
			setShades(generateLighterShades(color))
		}

	}, [color])
	return (
			<>
				{shades.map( (shade, idx) => { return <div className="color__picker-column-box" key={`shade__${idx}`} style={{background: shade}}></div> })}
			</>
		)
}
export default ColorShadesGenerator