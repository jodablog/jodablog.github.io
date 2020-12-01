var windowheight = window.innerHeight;
var table = new Tabulator("#example-table", {
    height:windowheight,
    data:tabledata,
    layout:"fitDataFill",
    columns:[
    {title:"id", field:"id", sorter:"number", formatter:"link", formatterParams:{urlPrefix:"https://foodsharing.de/?page=fsbetrieb&id="},
    },
    {title:"Status", field:"status", sorter:"number", formatter:"traffic", formatterParams:{
        min:0,
        max:6,
        color:["#000000", "#808080", "#f6e257", "#79aa51", "#df4b4d","#4765f3", "#4765f3"],}
    },
    {title:"Name", field:"name", sorter:"name", formatter:"link", formatterParams:{urlPrefix:"https://foodsharing.de/?page=fsbetrieb&id=", urlField:"id"},
    },
    {title:"Straße", field:"address", sorter:"name", formatter:"link", formatterParams:{urlPrefix:"https://opentopomap.org/#marker=17/", urlField:"geo"},
    },
    {title:"PLZ", field:"zipcode", sorter:"number"},
    {title:"Ort", field:"city", sorter:"name"},
    {title:"Eingetragen", field:"added", sorter:"number"},
    {title:"1. BV", field:"bvname1", sorter:"name", formatter:"link", formatterParams:{urlPrefix:"https://foodsharing.de/profile/", urlField:"bvid1"},
    },
    {title:"2. BV", field:"bvname2", sorter:"name", formatter:"link", formatterParams:{urlPrefix:"https://foodsharing.de/profile/", urlField:"bvid2"},
    },
    {title:"3. BV", field:"bvname3", sorter:"name", formatter:"link", formatterParams:{urlPrefix:"https://foodsharing.de/profile/", urlField:"bvid3"},
    },
    {title:"Slots / Woche", field:"wslots", sorter:"number"},
    {title:"Einfachslots / Woche", field:"sslots", sorter:"number"},
    {title:"Teamgröße", field:"all", sorter:"number"},
    {title:"Aktive", field:"active", sorter:"number"},
    {title:"Springer", field:"passive", sorter:"number"},
    {title:"Teamstatus", field:"teamstatus", sorter:"number"},
    ],
});
