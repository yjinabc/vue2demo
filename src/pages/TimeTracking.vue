<template>
  <div>
    <el-table :data="timedata" border style="width: 100%">
      <el-table-column
        v-for="item in timecols"
        :prop="item.prop"
        :formatter="changDate"
        :label="item.label"
        :key="item.id"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: function () {
    return {
      timedata: [],
    };
  },
  props: {
    timecols: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changDate(row, col) {
      var colDate = row[col.property];
      return moment(colDate).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>
