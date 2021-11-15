<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
   
    <el-date-picker
      v-model="checkedDate"
      type="date"
      value-format="yyyy-MM-dd"
      @change="showTimesData($event)"
      placeholder="Please select a date"
    >
    </el-date-picker>

    <time-tracking ref="timeTableRef" :timecols="timeIntCols"></time-tracking>
  </div>
</template>

<script>
import axios from "axios";
import TimeTracking from "@/pages/TimeTracking.vue";

export default {
  data() {
    return {
      msg: "The following data have time entries: 2021-11-01, 2021-11-04, 2021-11-05 ",
      checkedDate: null,
      timeColArray: [
        { id: "start", prop: "start", label: "start " },
        { id: "end", prop: "end", label: "end " },
      ],
      timeIntCols: []
    };
  },
  components: {
    "time-tracking": TimeTracking,
  },

  methods: {
    showTimesData() {
      
      var url = "api/getAllTimeEntries?username=a1&dateStr=" + this.checkedDate;
      axios
        .get(url)
        .then(
          (response) => {
            this.timeIntCols = this.timeColArray;
            this.$refs.timeTableRef.timedata = response.data;
          }

          // this.timeIntsOneDay = response.data
        )
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style >
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>


