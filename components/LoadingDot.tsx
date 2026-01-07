const LoadingDot = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <circle cx="4" cy="12" r="0" fill="currentColor">
          <animate
            fill="freeze"
            attributeName="r"
            begin="0;SVGUppsBdVN.end"
            calcMode="spline"
            dur="0.5s"
            keySplines=".36,.6,.31,1"
            values="0;3"
          />
          <animate
            fill="freeze"
            attributeName="cx"
            begin="SVGqCgsydxJ.end"
            calcMode="spline"
            dur="0.5s"
            keySplines=".36,.6,.31,1"
            values="4;12"
          />
          <animate
            fill="freeze"
            attributeName="cx"
            begin="SVG3PwDNd6F.end"
            calcMode="spline"
            dur="0.5s"
            keySplines=".36,.6,.31,1"
            values="12;20"
          />
          <animate
            id="SVG3V8yEdYE"
            fill="freeze"
            attributeName="r"
            begin="SVG6wCQhd9Q.end"
            calcMode="spline"
            dur="0.5s"
            keySplines=".36,.6,.31,1"
            values="3;0"
          />
          <animate
            id="SVGUppsBdVN"
            fill="freeze"
            attributeName="cx"
            begin="SVG3V8yEdYE.end"
            dur="0.001s"
            values="20;4"
          />
        </circle>
        {/* rest unchanged */}
      </svg>
    </div>
  );
};

export default LoadingDot;
