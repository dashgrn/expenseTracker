import React from 'react'
import { ChartBar } from './ChartBar'
import './Chart.css'

export const Chart = (props) => {

    return (
        <div className="chart">
            {
                props.dataPoins.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={null}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
}