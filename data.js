var APP_DATA = {
  "scenes": [
    {
      "id": "0-straenansicht",
      "name": "Straßenansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.01427996660722286,
        "pitch": 0.009154397979649787,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.39884600268066883,
          "pitch": 0.015783757302644474,
          "rotation": 6.283185307179586,
          "target": "1-gehweg"
        },
        {
          "yaw": -0.1654001923401225,
          "pitch": 0.023071984302163173,
          "rotation": 0,
          "target": "2-auffahrt"
        },
        {
          "yaw": -0.7934994726197964,
          "pitch": 0.06254030267181321,
          "rotation": 0,
          "target": "7-abenddmmerung"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gehweg",
      "name": "Gehweg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1656476126438271,
        "pitch": -0.12031470776882358,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.7951021194241488,
          "pitch": 0.06240970636711474,
          "rotation": 10.995574287564278,
          "target": "2-auffahrt"
        },
        {
          "yaw": -0.012841167829380495,
          "pitch": -0.35050924251818216,
          "rotation": 0,
          "target": "3-balkon-haupteingang"
        },
        {
          "yaw": -0.6409387842563081,
          "pitch": 0.0817361170239721,
          "rotation": 0,
          "target": "7-abenddmmerung"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-auffahrt",
      "name": "Auffahrt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.8311304764991547,
          "pitch": 0.07837841970098225,
          "rotation": 0.7853981633974483,
          "target": "1-gehweg"
        },
        {
          "yaw": 0.17761242634859364,
          "pitch": -0.03563086976964236,
          "rotation": 3.141592653589793,
          "target": "4-foyer"
        },
        {
          "yaw": -0.05034440339065682,
          "pitch": -0.2903497334595375,
          "rotation": 0,
          "target": "3-balkon-haupteingang"
        },
        {
          "yaw": 1.4793371630438132,
          "pitch": 0.0026747805630424892,
          "rotation": 4.71238898038469,
          "target": "5-innenhof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balkon-haupteingang",
      "name": "Balkon Haupteingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.22562290736495072,
        "pitch": 0.04315248330549437,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.5686395906539534,
          "pitch": 0.31618030142719533,
          "rotation": 3.141592653589793,
          "target": "2-auffahrt"
        },
        {
          "yaw": 0.7326805411562631,
          "pitch": 0.18971906632446967,
          "rotation": 3.141592653589793,
          "target": "0-straenansicht"
        },
        {
          "yaw": 2.3199981745474503,
          "pitch": 0.24846469704897345,
          "rotation": 3.141592653589793,
          "target": "7-abenddmmerung"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05521587088128044,
        "pitch": -0.0013082000516959624,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.2669579682416092,
          "pitch": 0.01966604824987428,
          "rotation": 4.71238898038469,
          "target": "2-auffahrt"
        },
        {
          "yaw": 0.002919163673498204,
          "pitch": -0.9857947502316868,
          "rotation": 0,
          "target": "3-balkon-haupteingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-innenhof",
      "name": "Innenhof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12661570391738763,
        "pitch": 0.023539880519070522,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.2547784909565003,
          "pitch": 0.023979839866186126,
          "rotation": 1.5707963267948966,
          "target": "2-auffahrt"
        },
        {
          "yaw": 0.8390409751749193,
          "pitch": -0.44525975427996123,
          "rotation": 0,
          "target": "6-balkon-innenhof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-balkon-innenhof",
      "name": "Balkon Innenhof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.35319117408539924,
        "pitch": 0.015693253679387453,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.5200072321762423,
          "pitch": 0.05749488985900442,
          "rotation": 0,
          "target": "4-foyer"
        },
        {
          "yaw": -1.4550808857618591,
          "pitch": 0.5347070557313351,
          "rotation": 3.141592653589793,
          "target": "5-innenhof"
        },
        {
          "yaw": -0.5337239475920548,
          "pitch": 0.1585264087092071,
          "rotation": 1.5707963267948966,
          "target": "2-auffahrt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-abenddmmerung",
      "name": "Abenddämmerung",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10355149009234665,
          "pitch": -0.23073966965263537,
          "rotation": 0,
          "target": "3-balkon-haupteingang"
        },
        {
          "yaw": 0.7619692310345982,
          "pitch": 0.003417663310274932,
          "rotation": 4.71238898038469,
          "target": "2-auffahrt"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
