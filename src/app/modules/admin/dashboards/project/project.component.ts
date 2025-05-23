import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';

@Component({
    selector       : 'project',
    templateUrl    : './project.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, OnDestroy
{
    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    chartOccupancyStatus:ApexOptions={};
    chartMaintenanceTrend: ApexOptions={};
    chartRentStacked: ApexOptions={};
    data: any;
    selectedProject: string = 'ACME Corp. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _projectService: ProjectService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the data
        this._projectService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Prepare the chart data
                this._prepareChartData();
            });

        // Attach SVG fill fixer to all ApexCharts
        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    }
                }
            }
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
             .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
             .forEach((el) => {
                 const attrVal = el.getAttribute('fill');
                 el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
             });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {
        // Github issues
        this.chartGithubIssues = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            colors     : ['#64748B', '#94A3B8'],
            dataLabels : {
                enabled        : true,
                enabledOnSeries: [0],
                background     : {
                    borderWidth: 0
                }
            },
            grid       : {
                borderColor: 'var(--fuse-border)'
            },
            labels     : this.data.githubIssues.labels,
            legend     : {
                show: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            series     : this.data.githubIssues.series,
            states     : {
                hover: {
                    filter: {
                        type : 'darken',
                        value: 0.75
                    }
                }
            },
            stroke     : {
                width: [3, 0]
            },
            tooltip    : {
                followCursor: true,
                theme       : 'dark'
            },
            xaxis      : {
                axisBorder: {
                    show: false
                },
                axisTicks : {
                    color: 'var(--fuse-border)'
                },
                labels    : {
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                },
                tooltip   : {
                    enabled: false
                }
            },
            yaxis      : {
                labels: {
                    offsetX: -16,
                    style  : {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            }
        };

        // Task distribution
        this.chartTaskDistribution = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'polarArea',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            labels     : this.data.taskDistribution.labels,
            legend     : {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    spokes: {
                        connectorColors: 'var(--fuse-border)'
                    },
                    rings : {
                        strokeColor: 'var(--fuse-border)'
                    }
                }
            },
            series     : this.data.taskDistribution.series,
            states     : {
                hover: {
                    filter: {
                        type : 'darken',
                        value: 0.75
                    }
                }
            },
            stroke     : {
                width: 2
            },
            theme      : {
                monochrome: {
                    enabled       : true,
                    color         : '#93C5FD',
                    shadeIntensity: 0.75,
                    shadeTo       : 'dark'
                }
            },
            tooltip    : {
                followCursor: true,
                theme       : 'dark'
            },
            yaxis      : {
                labels: {
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            }
        };

        // Budget distribution
        this.chartBudgetDistribution = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'radar',
                sparkline : {
                    enabled: true
                }
            },
            colors     : ['#818CF8'],
            dataLabels : {
                enabled   : true,
                formatter : (val: number): string | number => `${val}%`,
                textAnchor: 'start',
                style     : {
                    fontSize  : '13px',
                    fontWeight: 500
                },
                background: {
                    borderWidth: 0,
                    padding    : 4
                },
                offsetY   : -15
            },
            markers    : {
                strokeColors: '#818CF8',
                strokeWidth : 4
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors   : 'var(--fuse-border)',
                        connectorColors: 'var(--fuse-border)'
                    }
                }
            },
            series     : this.data.budgetDistribution.series,
            stroke     : {
                width: 2
            },
            tooltip    : {
                theme: 'dark',
                y    : {
                    formatter: (val: number): string => `${val}%`
                }
            },
            xaxis      : {
                labels    : {
                    show : true,
                    style: {
                        fontSize  : '12px',
                        fontWeight: '500'
                    }
                },
                categories: this.data.budgetDistribution.categories
            },
            yaxis      : {
                max       : (max: number): number => parseInt((max + 10).toFixed(0), 10),
                tickAmount: 7
            }
        };

        // Weekly expenses
        this.chartWeeklyExpenses = {
            chart: {
                type: 'bar',
                height: 400,
                fontFamily: 'inherit',
                foreColor: 'inherit',
                toolbar: {
                    show: true
                }
            },
            series: [
                {
                    name: 'Monthly Profit',
                    data: [7000, 9000, 6400, 9000, 9000, 5000]
                }
            ],
            colors: ['#4CAF50'], // Green color for profit
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 4,
                    columnWidth: '55%',
                    colors: {
                        ranges: [
                            {
                                from: -Infinity,
                                to: 0,
                                color: '#F44336' // Red for negative profit (loss)
                            }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val: number): string => `$${val}`,
                style: {
                    fontSize: '10px',
                    colors: ['#fff']
                }
            },
            xaxis: {
                categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Profit ($)'
                },
                labels: {
                    formatter: (val: number): string => `$${val}`,
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'dark',
                y: {
                    formatter: (val: number): string => `$${val}`
                }
            },
            legend: {
                position: 'top',
                labels: {
                    colors: 'var(--fuse-text-secondary)'
                }
            },
            grid: {
                borderColor: 'var(--fuse-border)'
            }
        };
        
        this.chartOccupancyStatus = {
            chart: {
                type: 'pie',
                height: 400, // ← set height in number (px)
                fontFamily: 'inherit',
                foreColor: 'inherit'
            },
            labels: ['Occupied', 'Vacant'],
            series: [65, 19],
            colors: ['#4973A0', '#B4B4B4'],
            legend: {
                position: 'bottom',
                labels: {
                    colors: 'var(--fuse-text-secondary)'
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val: number): string => `${val.toFixed(1)}%`,
                style: {
                    fontSize: '12px',
                    fontWeight: '500'
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: (val: number): string => `${val} units`
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.85
                    }
                }
            },
            stroke: {
                show: false
            }
        };
        this.chartMaintenanceTrend = {
            chart: {
                type: 'line',
                height: 350,
                fontFamily: 'inherit',
                foreColor: 'inherit',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#F59E0B'], // Orange for visibility
            stroke: {
                curve: 'smooth',
                width: 3
            },
            series: [
                {
                    name: 'Maintenance Cost',
                    data: [1200, 1800, 950, 2500, 2200, 2700] // Example values
                }
            ],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                labels: {
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            },
            yaxis: {
                labels: {
                    formatter: (val: number): string => `$${val}`,
                    style: {
                        colors: 'var(--fuse-text-secondary)'
                    }
                }
            },
            tooltip: {
                theme: 'dark',
                y: {
                    formatter: (val: number): string => `$${val}`
                }
            },
            grid: {
                borderColor: 'var(--fuse-border)'
            },
            markers: {
                size: 5
            }
        };
        
        this.chartRentStacked = {
            series: [
              {
                name: 'Collected',
                data: [12000, 14000, 13500, 15000, 14500, 15000]
              },
              {
                name: 'Due',
                data: [3000, 2000, 2500, 1000, 1500, 1000]
              }
            ],
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              }
            },
            colors: ['#10B981', 'rgb(254, 121, 104)'], // Green & Red for Collected and Due
            plotOptions: {
              bar: {
                horizontal: true,  // Changed to true for horizontal bars
                columnWidth: '50%',
                borderRadius: 4
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              title: {
                text: 'Amount ($)'
              },
              labels: {
                formatter: function(value: string, timestamp?: number, opts?: any): string {
                  return '$' + parseFloat(value).toLocaleString();
                }
              },
              categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              }
            },
            yaxis: {
              // No specific configuration needed here
            },
            tooltip: {
              y: {
                formatter: function(value: number, opts?: any): string {
                  return '$' + value.toLocaleString();
                }
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'center'
            },
            fill: {
              opacity: 1
            },
            grid: {
              show: true,
              borderColor: '#e5e7eb',
              strokeDashArray: 4,
              xaxis: {
                lines: {
                  show: true
                }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            }
          };

        // Monthly expenses
        this.chartMonthlyExpenses = {
            chart  : {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#4ADE80'],
            series : this.data.monthlyExpenses.series,
            stroke : {
                curve: 'smooth'
            },
            tooltip: {
                theme: 'dark'
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.monthlyExpenses.labels
            },
            yaxis  : {
                labels: {
                    formatter: (val): string => `$${val}`
                }
            }
        };

        // Yearly expenses
        this.chartYearlyExpenses = {
            chart  : {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#FB7185'],
            series : this.data.yearlyExpenses.series,
            stroke : {
                curve: 'smooth'
            },
            tooltip: {
                theme: 'dark'
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.yearlyExpenses.labels
            },
            yaxis  : {
                labels: {
                    formatter: (val): string => `$${val}`
                }
            }
        };
    }
}
