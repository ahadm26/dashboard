import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  chart = [];
  //part = [];
  doughnut: any;
  constructor() {}

  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: ["12 JUN", "16 JUN", "20 JUN", "24 JUN"],
        datasets: [
          {
            label: "g1",
            data: [0, 100, 150, 250],
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false,
          },
        ],
      },
    });
    this.doughnut = new Chart("doughnut", {
      type: "doughnut",
      options: {
        responsive: true,
        title: {
          display: false,
          text: "Doughnut Chart",
        },
        legend: {
          position: "top",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
      data: {
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ["blue", "orange"],
            label: "Dataset 1",
          },
        ],
      },
    });
  }
}
