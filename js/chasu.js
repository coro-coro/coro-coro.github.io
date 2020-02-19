var chart_3631526c556f4a38b0836ed996d74129 = echarts.init(
            document.getElementById('3631526c556f4a38b0836ed996d74129'), 'white', {renderer: 'canvas'});
        var option_3631526c556f4a38b0836ed996d74129 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "maroon",
        "firebrick",
        "orangered",
        "gray"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "1\ucc28",
                    "value": 15
                },
                {
                    "name": "2\ucc28",
                    "value": 9
                },
                {
                    "name": "3\ucc28",
                    "value": 5
                },
                {
                    "name": "\ud655\uc778 \uc911",
                    "value": 17
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
                "formatter": "{b}:\n{d}%"
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
                "1\ucc28",
                "2\ucc28",
                "3\ucc28",
                "\ud655\uc778 \uc911"
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
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_3631526c556f4a38b0836ed996d74129.setOption(option_3631526c556f4a38b0836ed996d74129);
