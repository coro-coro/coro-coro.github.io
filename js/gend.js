var chart_eec64939f7e04dd48f77dcc98ddc1a77 = echarts.init(
            document.getElementById('eec64939f7e04dd48f77dcc98ddc1a77'), 'white', {renderer: 'canvas'});
        var option_eec64939f7e04dd48f77dcc98ddc1a77 = {
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
                    "value": 36
                },
                {
                    "name": "\uc5ec",
                    "value": 46
                },
                {
                    "name": "\ud655\uc778 \uc911",
                    "value": 22
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
                "\uc5ec",
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
            "text": "\uc131\ubcc4(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_eec64939f7e04dd48f77dcc98ddc1a77.setOption(option_eec64939f7e04dd48f77dcc98ddc1a77);
