import {Component, OnInit, Output, Type} from '@angular/core';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ConfigService } from 'src/app/config.services';



@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styles: []
})

export class RegularComponent implements OnInit {
  @Output() RegularComponent : Type<Component>;
  heading = 'Regular Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  public page = 1;
  public pageSize = 10
  myresult:any;
  dataList: Array<any> = [];
  benifit: any;

  constructor(private config: ConfigService) {
    this.dataList = [
      { code: 5, pagination: "1" },
      { code: 10, pagination: "2" },
      { code: 20, pagination: "3" },
      { code: 30, pagination: "4" }
    ]
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


   // PolarArea
   public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
   public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
   public polarAreaLegend = true;
 
   public polarAreaChartType: ChartType = 'polarArea';
 
  ngOnInit() {
    this.config.getData().subscribe((result: any) => {
        this.myresult = result.PersonalInfolistModel;
        this.benifit = result.benifittotal;
        console.log(this.myresult, this.benifit)
      });
  }
  getHeaders() {
    let headers: string[] = [];
    if(this.myresult) {
      this.myresult.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }


  
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
