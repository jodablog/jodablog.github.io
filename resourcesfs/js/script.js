    //sample data to be used in all tabulators
    var tabledata = [
    {id:1, name:"Oli Bob", progress:12, location:"United Kingdom", gender:"male", rating:1, col:"red", dob:"14/04/1984", car:1, lucky_no:5, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:2, name:"Mary May", progress:1, location:"Germany", gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true, lucky_no:10, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:3, name:"Christine Lobowski", progress:42, location:"France", gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true", lucky_no:12, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:4, name:"Brendon Philips", progress:100, location:"USA", gender:"male", rating:1, col:"orange", dob:"01/08/1980", car:false, lucky_no:18, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:5, name:"Margret Marmajuke", progress:16, location:"Canada", gender:"female", rating:5, col:"yellow", dob:"31/01/1999", car:false, lucky_no:33, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:6, name:"Frank Harbours", progress:38, location:"Russia", gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1, lucky_no:2, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:7, name:"Jamie Newhart", progress:23, location:"India", gender:"male", rating:3, col:"green", dob:"14/05/1985", car:true, lucky_no:63, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:8, name:"Gemma Jane", progress:60, location:"China", gender:"female", rating:0, col:"red", dob:"22/05/1982", car:"true", lucky_no:72, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:9, name:"Emily Sykes", progress:42, location:"South Korea", gender:"female", rating:1, col:"maroon", dob:"11/11/1970", car:false, lucky_no:44, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:10, name:'<a>https://www.w3schools.com/</a>', progress:73, location:"Japan", gender:"male", rating:5, col:"red", dob:"22/03/1998", car:false, lucky_no:9, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    ];

var table = new Tabulator("#example-table", {
    height:"311px",
    data:tabledata,
    columns:[
    {title:"Name", field:"name", formatter:"link"},
    {title:"Progress", field:"progress", sorter:"number"},
    {title:"Gender", field:"gender"},
    {title:"Rating", field:"rating"},
    {title:"Favourite Color", field:"col"},
    {title:"Date Of Birth", field:"dob", hozAlign:"center"},
    ],
});
