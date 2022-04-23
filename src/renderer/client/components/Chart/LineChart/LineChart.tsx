import { ReactElement, useState } from 'react';
import {
  XYPlot,
  XYPlotProps,
  LineSeriesProps,
  LineSeries,
  Highlight,
  HighlightArea,
} from 'react-vis';

function LineChart({
  width,
  height,
  getX,
  getY,
  data,
}: XYPlotProps & LineSeriesProps): ReactElement {
  const [lastDrawFrame, setLastDrawFrame] = useState<
    HighlightArea | null | undefined
  >();
  return (
    <XYPlot
      width={width}
      xDomain={lastDrawFrame && [lastDrawFrame.left, lastDrawFrame.right]}
      yDomain={lastDrawFrame && [lastDrawFrame.bottom, lastDrawFrame.top]}
      getX={getX}
      getY={getY}
      height={height}
    >
      <LineSeries
        data={data}
        curve="curveBasis"
        animation={{ stiffness: 300 }}
      />
      <Highlight
        onBrushEnd={(area) => {
          setLastDrawFrame(area);
        }}
        onDrag={(area) => {
          setLastDrawFrame((prevDrawFrame) => {
            return {
              bottom:
                (prevDrawFrame?.bottom || 0) +
                ((area?.top || 0) - (area?.bottom || 0)),
              top:
                (prevDrawFrame?.top || 0) +
                ((area?.top || 0) - (area?.bottom || 0)),
              left:
                (prevDrawFrame?.left || 0) +
                ((area?.right || 0) - (area?.left || 0)),
              right:
                (prevDrawFrame?.right || 0) +
                ((area?.right || 0) - (area?.left || 0)),
            };
          });
        }}
      />
    </XYPlot>
  );
}

export default LineChart;
