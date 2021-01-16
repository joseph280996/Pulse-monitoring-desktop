import React from 'react'
import {
  XYPlot,
  LineMarkSeries,
  XYPlotProps,
  LineMarkSeriesProps,
} from 'react-vis'

function LineChart({
  width,
  height,
  getX,
  getY,
  data,
}: XYPlotProps & LineMarkSeriesProps) {
  return (
    <XYPlot width={width} getX={getX} getY={getY} height={height}>
      <LineMarkSeries data={data} animation={{ stiffness: 300 }} />
    </XYPlot>
  )
}

export default LineChart
