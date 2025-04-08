import type { ReactRangeSliderInputProps } from "react-range-slider-input";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { description, rangeSlider, rangeWrapper } from "./style.css";
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
  const startValue = value?.[0] + unit;
  const endValue = value?.[1] + unit;
  return (
    <div className={rangeWrapper} style={{ width: width }}>
      <RangeSlider
        disabled={disabled}
        rangeSlideDisabled={disabled}
        className={rangeSlider}
        value={value}
        onInput={onInput}
        {...props}
      />
      <p className={description}>
        {startValue} ~ {endValue}
      </p>
    </div>
  );
};

export default Slider;
