var chart_59febc23a6614878a3629ae8346a72ad = echarts.init(
            document.getElementById('59febc23a6614878a3629ae8346a72ad'), 'white', {renderer: 'canvas'});
        var option_59febc23a6614878a3629ae8346a72ad = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "cornflowerblue",
        "salmon",
        "gray"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\ub0a8",
                    "value": 20
                },
                {
                    "name": "\uc5ec",
                    "value": 26
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "color": [
                    "black"
                ],
                "margin": 8,
                "fontSize": 11,
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\ub0a8",
                "\uc5ec"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    "title": [
        {
            "text": "\uc131\ubcc4(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_59febc23a6614878a3629ae8346a72ad.setOption(option_59febc23a6614878a3629ae8346a72ad);
