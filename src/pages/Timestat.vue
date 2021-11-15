<template>
  <div>
    <h2>vue echarts time entires from last 7 days</h2>
    <div id="chartExa"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.showChart();
  },
  methods: {
    showChart() {
      let dateArrayTmp = "";
      let nowDateTmp = new Date();
      for (let i = 1; i < 8; i++) {
        nowDateTmp.setDate(nowDateTmp.getDate() - 1);
        dateArrayTmp += this.getFormatDate(nowDateTmp);
        if (i !== 7) {
          dateArrayTmp += ", ";
        }
      }
      var url =
        "api/getAllTimeEntriesLast7Days?username=a1&dateStrArray=" +
        dateArrayTmp;
      axios
        .get(url)
        .then(
          (response) => {
            var sourceTmp = [["time", "ist", "soll"]];
            var timerecordsMoreDays = response.data;
            for (let i = 0; i < timerecordsMoreDays.length; i++) {
              const element = timerecordsMoreDays[i];
              let dayRecordingtmp = [];
              let keyTmp = Object.keys(element)[0];
              dayRecordingtmp.push(keyTmp);
              dayRecordingtmp.push(this.getRecordSum(element[keyTmp]));
              dayRecordingtmp.push(8);
              sourceTmp.push(dayRecordingtmp);
            }
            this.drawChart(sourceTmp);
          }
        )
        .catch(function (error) {
          console.log(error);
        });
    },

    getTimeText(timeNumber) {
      let timeText;
      if (Number(timeNumber) < 10) {
        timeText = "0" + timeNumber;
      } else {
        timeText = "" + timeNumber;
      }
      return timeText;
    },

    getFormatDate(dateF) {
      return (
        dateF.getFullYear() +
        "-" +
        this.getTimeText(dateF.getMonth() + 1) +
        "-" +
        this.getTimeText(dateF.getDate())
      );
    },

    getRecordSum(timerecordsOneDay) {
      let t = 0.0;
      for (let i = 0; i < timerecordsOneDay.length; i++) {
        let tTmp = (timerecordsOneDay[i]["duration"] / 60 / 60).toFixed(2);
        t += +tTmp;
      }
      return t.toFixed(2);
    },

    drawChart(sourceTmp) {
      let myChart = this.$echarts.init(document.getElementById("chartExa"));
      myChart.setOption({
        legend: {},
        tooltip: {},

        dataset: {
          source: sourceTmp,
        },
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: 30 },
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      });
    },
  },
};
</script>

<style scoped>
#chartExa {
  width: 50%;
  height: 500px;
  border: 1px solid;
  margin: 0 auto;
}
</style>