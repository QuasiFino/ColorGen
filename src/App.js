import React, {useState} from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#FF7777").all(5));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  // console.log("colorWeight: " + list[0].weight);
  // console.log("colorTint: " + list[0].tint);

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input  
            type="text"
            placeholder="#FF7777 ot type new.."
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setError(false);
            }}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Get Colors
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

//
// https://noeldelgado.github.io/values.js/
// instance example for 'red'
// Values {
//   alpha: 1
//   rgb: (3) [255, 0, 0]
//   type: "base"
//   weight: 0
//   get hex: ƒ(...)
//   setColor: ƒ setColor(color)
//   tint: ƒ tint(weight=50)
//   tints: ƒ tints(weight=10)
//   shade: ƒ shade(weight=50)
//   shades: ƒ shades(weight=10)
//   all: ƒ all(weight=10)
//   hexString: ƒ hexString()
//   rgbString: ƒ rgbString()
//   getBrightness: ƒ getBrightness()
// }
