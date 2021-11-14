import { dateFormat } from "./parseDate";

const createConfig = (state) => {

  let labels = [];
  let dataCom = [];
  let dataPen = [];
  for (let key of Object.keys(state)) {
    labels.push(dateFormat(key))
    let countPen = 0;
    let countCom = 0;
    for (let status of state[key]) {
      if (status === 'pending') {
        countPen++
      }
      if (status === 'completed') {
        countCom++
      }
    }
    dataCom.push(countCom);
    dataPen.push(countPen);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'pending',
        data: dataPen,
        borderColor: 'red'
      },
      {
        label: 'completed',
        data: dataCom,
        borderColor: 'green',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
        },
      ],
    },
  };
  const config = { data, options }
  return config
}
export default createConfig