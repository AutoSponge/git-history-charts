import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Loader from './Loader'

const commitsFactor = 10
const commitsLabel = `commits (x${commitsFactor})`
const contributorsLabel = 'contributors'

const groupData = data =>
  data.reduce((r, o) => {
    const d = o.date
    const e = o.email
    const mm = d.replace(/-\d*$/, '')
    r[mm] = r[mm] || {}
    r[mm][e] = r[mm][e] || 0
    r[mm][e] += 1
    return r
  }, {})

const formatData = data => {
  return Object.entries(groupData(data))
    .map(([month, value]) => {
      const contributors = Object.keys(value).length
      const commits =
        Object.values(value).reduce((a, b) => a + b, 0) / commitsFactor
      return {
        month,
        [contributorsLabel]: contributors,
        [commitsLabel]: commits
      }
    })
    .sort((a, b) => (new Date(a.month) > new Date(b.month) ? 1 : -1))
}

const colorBy = context => {
  switch (context.id) {
    case commitsLabel:
      return '#eed312'
    case contributorsLabel:
      return '#38bcb2'
    default:
  }
}

export default class Chart extends React.Component {
  componentWillReceiveProps () {
    this.render()
  }

  render () {
    const { source, data } = this.props
    if (!source) {
      return <Loader />
    }
    return (
      <main>
        <article>
          <h2><a href={source.url}>{source.name}</a></h2>
          <ResponsiveBar
            groupMode='grouped'
            animate={false}
            data={formatData(data)}
            keys={['contributors', 'commits (x10)']}
            indexBy='month'
            colorBy={colorBy}
            margin={{
              top: 0,
              right: 150,
              bottom: 70,
              left: 60
            }}
            padding={0.3}
            borderColor='inherit:darker(1.6)'
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -75,
              legend: 'month',
              legendPosition: 'center',
              legendOffset: 56
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'activity',
              legendPosition: 'center',
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor='inherit:darker(1.6)'
            motionStiffness={90}
            motionDamping={15}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 2,
                symbolSize: 20
              }
            ]}
          />
        </article>
      </main>
    )
  }
}
