export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      // console.log("1");
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
