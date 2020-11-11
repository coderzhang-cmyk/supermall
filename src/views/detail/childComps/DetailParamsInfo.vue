<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="params-mea-table">
      <tr v-for="item in paramsInfo.rule.tables[0]" class="mea-table-tr">
        <td v-for="size in item" class="mea-table-td">{{ size }}</td>
      </tr>
    </table>
    <table class="params-set-table">
      <tr v-for="record in paramsInfo.info.set">
        <td class="set-table-td">
          <p class="set-table-td-p">{{ record.key }}</p>
        </td>
        <td class="set-table-td color-deepened">{{ record.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-params-info {
  padding: 20px 15px;
  border-top: 10px solid #eeeeee;
  border-bottom: 10px solid #eeeeee;
  text-align: left;
  font-size: 13px;
}
.params-mea-table {
  width: 100%;
}
.mea-table-td,
.set-table-td {
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
}
.set-table-td-p {
  width: 95px;
}
.color-deepened {
  color: var(--color-high-text);
}
</style>