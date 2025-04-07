import type { ReactRangeSliderInputProps } from "react-range-slider-input";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { description, rangeSlider, wrapper } from "./style.css";
type SliderType = ReactRangeSliderInputProps & {
  unit?: string;
  width?: number;
};
const Slider = ({
  value,
  disabled,
  onInput,
  unit = "unit",
  width = 200,
  ...props
}: SliderType) => {
  return (
    <div className={wrapper} style={{ width: width }}>
      <RangeSlider
        {...props}
        disabled={disabled}
        rangeSlideDisabled={disabled}
        className={rangeSlider}
        value={value}
        onInput={onInput}
      />
      <p className={description}>
        {value?.[0]}
        {unit} ~ {value?.[1]}
        {unit}
      </p>
    </div>
  );
};

export default Slider;
