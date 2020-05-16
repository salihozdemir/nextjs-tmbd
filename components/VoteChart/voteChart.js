import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const getPathColor = (score) => {
  let red = 0,
    green = 0
  if (score >= 75) {
    red = 255 - Math.round(((score - 50) / 50) * 255)
    green = 255
  } 
  else {
    red = 255
    green = Math.round((score / 75) * 255)
  }
  return 'rgb(' + red + ',' + green + ',0)'
}

const voteChart = ({ voteAverage = 0, className }) => (
  <CircularProgressbar
    value={voteAverage}
    text={`${voteAverage}%`}
    className={className}
    background={true}
    styles={buildStyles({
      pathColor: getPathColor(voteAverage),
      textColor: '#fff',
      trailColor: '#1d4328',
      backgroundColor: '#0a1b22',
      textSize: '32px',
    })}
  />
)

export default voteChart
