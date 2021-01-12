import React from 'react'
import { LineChartProps } from '../../../../types'
import LineChart from '../../../containers/analytics/LineChart'

function PostDiagnosis({ data, width, height }: LineChartProps) {
  return (
    <div>
      <LineChart data={data} width={width} height={height} />
    </div>
  )
}

export default PostDiagnosis
