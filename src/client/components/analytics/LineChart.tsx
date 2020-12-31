import React, { useState } from 'react'
import {
  XYPlot,
  LineMarkSeries,
  XYPlotProps,
  LineMarkSeriesPoint,
  Hint,
  LineMarkSeriesProps,
} from 'react-vis'

function LineChart({ width, height, data }: XYPlotProps & LineMarkSeriesProps) {
  const [tooltipCoordinate, setTooltipCoordinate] = useState<
    LineMarkSeriesPoint
  >({
    x: 0,
    y: 0,
  })

  const { y: pulseValue } = tooltipCoordinate
  return (
    <XYPlot width={width} height={height}>
      <LineMarkSeries data={data} animation="noWobble" />
      <Hint value={{ pulse: pulseValue }} />
    </XYPlot>
  )
}

export default LineChart
