var chart_6facb0b994be42c1b8fe5fae9091d1b0 = echarts.init(
            document.getElementById('6facb0b994be42c1b8fe5fae9091d1b0'), 'white', {renderer: 'canvas'});
        var option_6facb0b994be42c1b8fe5fae9091d1b0 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#b09880",
        "#f0d0c8",
        "gray"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\uc911\uad6d",
                    "value": 6
                },
                {
                    "name": "\ud55c\uad6d",
                    "value": 40
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
                "\uc911\uad6d",
                "\ud55c\uad6d"
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
            "text": "\uad6d\uc801(\uba85)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_6facb0b994be42c1b8fe5fae9091d1b0.setOption(option_6facb0b994be42c1b8fe5fae9091d1b0);
