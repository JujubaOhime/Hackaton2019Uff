<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "ProblemsCategory",
  extends: Doughnut,
  mounted() {
    let chartdata = {
      labels: ["Limpeza", "Técnicos", "Segurança", "Emergência", "Ambiente"],
      datasets: [
        {
          backgroundColor: [
            "#48dbfb",
            "#feca57",
            "#1dd1a1",
            "#ff6b6b",
            "#01a3a4"
          ],
          data: [10, 20, 5, 4, 15]
        }
      ]
    };
    let options = {};
    this.renderChart(chartdata, options);
  }
};
</script>

<style></style>
