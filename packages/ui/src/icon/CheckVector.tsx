interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

const SvgComponent = ({ height, width, fill, ...props }: SvgComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M14 0H0v14h14V0Z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUElEQVR4nO3dW4hVVRzH8a2jWY2S1pQIXlMUphIlSUXzQTFExVJfNCFoJAiakgQRhLQIelAxFAUDr6AmCEbKgJMXxBctIxJj7EHL6GpoNzW8Nd9YzB4YRuec/znus/9nrfX/vLvPb5/fnLP3Xvu/j0lijDHGGGOMMcYYY4wxxhhjjPEL0AtoBD4BPgWWAr21c0UJ6A18wd1agDrtfNEBttG1Hdr5ogK8ALQWKOQ60E07ZxSAPsBFCnNlPaidNQrARoo7q50zCsDzwH+CQl7WzhrLKW6LoIwjdvzIAbBGUMbfwOA88kQNeA64Iyjkde2swQMecAdpQRnH7asqB8B7gjLcdceIPPJEDRgN3BQU8rZ21uABPYDTgjJOATXaeYMHLBeUcQN4Sjtr8ICRwL+CQlZoZw0e0B04ISjja6Cndt7gAW8KyrgNPKudNXjAEOAfQSHva2cNHtANaBaUcc6W1nMALBaU4VZ6J+WRJ2rAAOAPQSFrtbNGgbapkWK+A2q1swYPWCgow92SnaadNXhAHXBJUMgm7axRAPYKyvjBDTZoZw0eMBuZGdpZgwc8AvwoKGObdtYoUHjqsN0vQD/trMEDphaZOmw3Vztr8IBa4IKgjI+1s0YB2dThZeAJ7azBAyYKpw4XamcNHvKpw4PaWaMArBaU8RcwUDtr8ICxwC1BIQ3aWWMZ5flKUMZRL6cO07HKRcA64B2gPqliwCpBGVeBoYlv3Pcr8E2nnXEDyMuTKgQ8I5w6bEx8BHxWYKe2VtNIDFDTxROynblxn+6Jb4BBgp077BbtkioALBPkdYNwIxMfAeORcV9pQzyZOlyW+Ap4VHiV6/wKjKvyqcPPvR+QTo8TUteAFxUyviHI5g70Tye+Ax4CmkooxZ2BLanCqcOVSSjSsxfJimlHH7kLtByyHRJkOVNNZ4OZcX/5JRxTSN+sig0KAA3CAWmVY1sugHnCs5mOf50DFacOP0hCB0wQzjW1+wkYk3GG/YLX/TaaAWngyXQiXMqtHc3M6LUXCF7PfbVOTmKSXqe457Slbt/vQ/bAY8JP54dJxHfldlGa9eWuJQF7BNv/Puqf3Esfenm3xFL2uWucEl9nlmC7btRneuX21iPAq8K7dO1OAo9nPHW4ufJ76hE3vp/ep5Y6D4wSbHeLYFs/A33z2VOPuIfqBT+H19EVYEoGU4dz8t1Tj6QXbl8id8PdJr7Hdh5OP0XF7NTZU/9GOA+UUEqrOznotI0Ngn/3u/RYFL10YVLypnbkptR7ljB1OD/6N7qMT8vSEhcmm9Olj2L2WRllAl5Kf/QrK5eB/lbI/f+O4W8ZFbLIysgAMEw4BF1Ik5WRIffYGHCM8rifZR1khVRmRHVnGYW8ZmVUfmGyVVjGMS8HpH0DvCKYyXVnaMO1s0aDtjWrPwsU8pZ2xugA9V2sXW23ryrd/+dpCbA7nZycrZXFGGOMMcYYY4wxxhhjkmr0PzeHWP8QvLk8AAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgComponent;
