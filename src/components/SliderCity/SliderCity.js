import React from 'react';
import Slider, { createSliderWithTooltip } from "rc-slider";
import 'rc-slider/assets/index.css';
import './SliderCity.css';;

const SliderWithTooltip = createSliderWithTooltip(Slider);

function celFormatter(v) {
  return `${v} °C`;
}

export default function SliderCity() {

    const styleContainer = { width: 200, margin: 50, textAlign: 'left' };
    const styleLabel = {display: 'inline-block', marginBottom: '1rem'}
          
    function log(value) {
      console.log(value);
    }

    return (
      <div style={styleContainer}>
        <label style={styleLabel}>Где сейчас теплее, чем</label>
        <SliderWithTooltip
          tipFormatter={celFormatter}
          reverse
          min={-30}
          tipProps={{ visible: true, placement: "bottom" }}
          onChange={log}
          defaultValue={0}
          placement="bottom"
          max={30}
          trackStyle={{ backgroundColor: "gray" }}
          handleStyle={{
            borderColor: "black",
            backgroundColor: "black",
            borderRadius: "35%",
            width: "10px",
            height: "17px",
            marginTop: "-7px"
          }}
        />
      </div>
    );
}
