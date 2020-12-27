import React, { useState } from 'react'
import {
  XYPlot,
  LineMarkSeries,
  XYPlotProps,
  LineMarkSeriesPoint,
  Hint,
  LineMarkSeriesProps,
} from 'react-vis'
import {
  deleteAttributeFromArrayElement,
  modifyItem,
} from '../../utils/arrayItemManipulation'

function LineChart({
  width,
  height,
  data: MockData,
}: XYPlotProps & LineMarkSeriesProps) {
  const [previousVisitedIndex, setIndex] = useState<number>(0)
  const [data, setData] = useState(MockData)
  const [tooltipCoordinate, setTooltipCoordinate] = useState<
    LineMarkSeriesPoint
  >({
    x: 0,
    y: 0,
  })
  const { y: pulseValue } = tooltipCoordinate
  return (
    <XYPlot width={width} height={height}>
      <LineMarkSeries
        data={data}
        onNearestXY={(datapoint, { index }) => {
          setTooltipCoordinate(datapoint)
          setData((prevData) => {
            const removedPrevVisited = deleteAttributeFromArrayElement(
              prevData,
              previousVisitedIndex,
              'color',
            )
            setIndex(index)
            return modifyItem(removedPrevVisited, index, {
              color: '1',
            })
          })
        }}
        animation="noWobble"
      />
      <Hint value={{ pulse: pulseValue }} />
    </XYPlot>
  )
}

export default LineChart
