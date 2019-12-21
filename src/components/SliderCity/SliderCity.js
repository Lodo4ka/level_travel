import React from 'react';
import Slider, { createSliderWithTooltip } from "rc-slider";
import 'rc-slider/assets/index.css';
import './SliderCity.css';
import { connect} from "react-redux";
import { setTemp } from '../../actions'

const SliderWithTooltip = createSliderWithTooltip(Slider);

function celFormatter(v) {
  return `${v} °C`;
}

function SliderCity(props) {

    const styleContainer = { width: 200, margin: 50, textAlign: 'left' };
    const styleLabel = {display: 'inline-block', marginBottom: '1rem'}
          
    function changeVal(value) {
      setTempAction(value)
    }
    const { temp, setTempAction } = props;
    return (
      <div style={styleContainer}>
        <label style={styleLabel}>Где сейчас теплее, чем</label>
        <SliderWithTooltip
          tipFormatter={celFormatter}
          reverse
          min={-30}
          tipProps={{ visible: true, placement: "bottom" }}
          onChange={changeVal}
          defaultValue={temp}
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

const mapStateToProps = ({ temp }) => ({
  temp
});

const mapDispatchToProps = dispatch => ({
  setTempAction: (value) => dispatch(setTemp(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderCity);