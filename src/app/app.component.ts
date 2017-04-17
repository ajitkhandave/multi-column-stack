import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public from:any;
  public to:any;

   constructor() {
        this.options = {
          chart:{type:'column'},

            title : { text : 'Multi-column stacked bar chart' },

            xAxis: {
               categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
              },

             yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    point: {
             events: {
                       click: function() {
                        console.log(this)
                      }
              }
         }
                }
            },

            credits: {
                  enabled: false
              },
            series: [{
                name: 'Ajit',
                data: [20, 30, 40, 80],
                stack: 'c1'
            },
            {
                name: 'Amit',
                data: [56, 46, 70, 69],
                stack: 'c1'
            },
            {
                name: 'Aditya',
                data: [36, 80, 46, 40],
                stack: 'c2'
            },
            {
                name: 'Amar',
                data: [68, 36, 89, 91],
                stack: 'c2'
            }]
        };
    }
    options: Object;

}
