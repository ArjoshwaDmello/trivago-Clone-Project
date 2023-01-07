var locaData=JSON.parse(localStorage.getItem("items"))||[];

//  ghjk

  
let funto =()=>{
     
    var items=[
      
       {
         id: 1,
         image:" https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/70/3170860_v2.jpeg",
         hotel_name: "Holiday Inn Chennai City Centre Hotel",
         hotel_apartment: "Hotel",
         Address: "6.2 km to City center",
         number: 8.0,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹3,86,120",
         price: "₹12,455",
         country: "chennai",
         latitude: 13.033675760623233,
         longitude: 80.05215162411332,
         
       }, {
         id: 2,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/51/66/5166516_v2.jpeg",
         hotel_name: "Regenta Central, Chennai",
         hotel_apartment: "Entire House / Apartment",
         Address: "4.2 km to City center",
         number: 9.0,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹43,320",
         price: "₹3,931",
         country: "chennai",
         latitude: 12.794251484125862,
         longitude: 80.22302074357867,
         
       }, {
          id: 3,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/50/75/5075390.jpeg ",
         hotel_name: "FabExpress Travelers Inn Nirman Nagar",
         hotel_name: "Hotel",
         Address: "3.5 km to City center",
         number: 7.5,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹47,320",
         price: "₹2,931",
         country: "chennai",
         latitude: 13.025114510527914,
        longitude: 80.22878279909492,
       }, {
         id: 4,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/20/38/2038649_v1.jpeg ",
         hotel_name: "FabHotel The Lodge Bani Park",
         hotel_apartment: "Hotel",
         Address: "4.8 km to City center",
         number: 9.2,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹123,320",
         price: "₹3,431",
         country: "chennai",
         latitude: 13.022592110955353,
        longitude: 80.18440062180161,

       }, {
         id: 5,
         image:" https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/53/99530_v4.jpeg",
         hotel_name: "Treebo Trend Natraj",
         hotel_apartment: "Hotel",
         Address: "5.6 km to City center",
         number: 8.5,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹49,320",
         price: "₹1,931",
         country: "chennai",
         latitude: 12.976256592008259,
        longitude: 80.25144813582301,
       }, {
         id: 6,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/49/86/4986586_v2.jpeg",
         hotel_name: "Sneh Deep Guest House",
         hotel_apartment: "Entire House / Apartment",
         Address: "2.5 km to City center",
         number: 8.8,
         good_excellent: "good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹42,320",
         price: "₹5,931",
         country: "chennai",
         latitude: 13.022592110955353,
                   longitude: 80.18440062180161,
       }, {
         id: 7,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/12/991263_v3.jpeg ",
         hotel_name: "Taj Inn",
         hotel_apartment: "Hotel",
         Address: " 3.5 km to City center",
         number: 8.5,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹19,320",
         price: "₹6,931",
         country: "chennai",
         latitude: 12.976058929770568,
        longitude: 80.25868574157357,
       }, {
         id: 8,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/33/58/3358312_v5.jpeg ",
         hotel_name: "Lemon Tree Premier Jaipur",
         hotel_apartment: "Hotel",
         Address: "2.8 km to City center",
         number: 9.5,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹3,95,320",
         price: "₹5,131",
         country: "chennai",
         latitude: 13.076027139121067,
        longitude: 80.2136323414743,
       }, {
         id: 9,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/73/66/7366588.jpeg ",
         hotel_name: "Mayaa Mansion",
         hotel_apartment: "Hotel",
         Address: "1.5 km to City center",
         number: 9.4,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹55,320",
         price: "₹7,83",
         country: "chennai",
         latitude: 13.050398867730518,
        longitude: 80.24875720962882,
       }, {
         id: 10,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/82/3182850_v1.jpeg ",
         hotel_name: "Man Sagar",
         hotel_apartment: "Entire House / Apartment",
         Address: "2.2 km to City center",
         number: 8.6,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹62,320",
         price: "₹3,931",
         country: "chennai",
         latitude: 13.029121170218943,
        longitude: 80.17792275175452,
       },
       
   
       {
         id: 11,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/22/15/2215962_v3.jpeg ",
         hotel_name: "Holiday Inn Mumbai Internation",
        hotel_apartment: "Hotel",
         Address: "3.4 km to Bandra west",
           number: 7.9,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹92,320",
         price: "₹3,100",
         country: "mumbai",
         latitude: 13.061290636440742,
         longitude: 80.23026371374726,
       }, {
         id: 12,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/21/08/2108550_v1.jpeg ",
         hotel_name: "InterContinental Marine Drive-Mumbai",
         hotel_apartment: "Hotel",
         Address: "6.2 km to City center",
         number: 8.9,
         good_excellent: "good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹77,320",
         price: "₹3,200",
         country: "mumbai",
         latitude: 12.81728434645851,
         longitude: 80.04026273265481,
       }, {
         id: 13,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/14/55/1455487_v4.jpeg ",
         hotel_name: "Hotel Bawa Suites",
         hotel_apartment: "Hotel",
         Address: "2.2 km to City center",
         number: 9.3,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹89,320",
         price: "₹7,931",
         country : "mumbai",
         latitude: 13.08433858669283,
      longitude: 80.20555416669325,
       }, {
         id: 14,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/94/93/949345_v3.jpeg ",
         hotel_name: "Ramee Guestline Hotel Khar",
         hotel_apartment: "Entire House / Apartment",
         Address: "5.2 km to City center",
         number: 8.6,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹33,320",
         price: "₹6,781",
         country: "mumbai",
         latitude: 12.858641466915977,
      longitude: 80.2289323322475,
       }, {
         id: 15,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/11/14/1114845_v1.jpeg ",
         hotel_name: "Shubhangan Hotel",
         hotel_apartment: "Entire House / Apartment",
         Address: "5.2 km to City center",
         number: 4,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹1,12,988",
         price: "₹4,781",
         country: "mumbai",
         latitude: 13.02449932013155,
      longitude: 80.176614416415,
       }, {
         id: 16,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/26/62/2662524_v2.jpeg ",
         hotel_name: "Hotel Singhs International ",
         hotel_apartment: "Hotel",
         Address: "3.2 km to City center",
         number: 9.0,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹47,320",
         price: "₹3,781",
         country: "mumbai",
         latitude: 12.971591558858378,
      longitude: 80.24560829624534,
       }, {
         id: 17,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/52/12520470.jpeg ",
         hotel_name: "Holiday Inn Mumbai International Airport",
         hotel_apartment: "Hotel",
         Address: "2.2 km to City center",
         number: 10,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "68,678",
         price: "₹6,781",
         country: "mumbai",
         latitude: 13.070614788442693,
         longitude: 80.21528877317905
       }, {
         id: 18,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/17/33/17334832_v1.jpeg ",
         hotel_name: "The UniContinental Hotel",
         hotel_apartment: "Hotel",
         Address: "4.2 km to City center",
         number: 9.6,
         good_excellent: "good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹57,320",
         price: "₹4,781",
         country: "mumbai",
         latitude: 12.853728918264009,
         longitude: 80.06818285211921
       }, {
         id: 19,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/31/46/3146982_v3.jpeg ",
         hotel_name: "Hotel Lucky",
         hotel_apartment: "Entire House / Apartment",
         Address: "1.2 km to City center",
         number: 8.2,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹67,320",
         price: "₹6,781",
         country: "mumbai",
         latitude: 12.98123566604031,
                    longitude: 77.7523060888052
       }, {
         id: 20,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/19/42/1942097_v1.jpeg ",
         hotel_name: "Golden Galaxy",
         hotel_apartment: "Hotel",
         Address: "4.2 km to City center",
         number: 10,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹47,320",
         price: "₹4,781",
         country: "mumbai",
         latitude: 12.87536,
                        longitude: 77.59942
       },
   
       {
         id: 21,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/12/58/1258160_v3.jpeg ",
         hotel_name: "Holiday Inn New Delhi Int'l ",
         hotel_apartment: "Hotel",
         Address: "1.2 km to City center",
         number: 7.9,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹97,320",
         price: "₹2,781",
         country: "delhi",
         latitude: 12.84098,
                    longitude: 77.644797
       }, {
         id: 22,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/48/99481_v10.jpeg ",
         hotel_name: "Crowne Plaza New Delhi M",
         hotel_apartment: "Hotel",
         Address: "0.2 km to City center",
         number: 9.3,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹27,320",
         price: "₹1,981",
         country: "delhi",
         latitude: 12.822714623723474,
                        longitude: 80.02590151503682
       }, {
         id: 23,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/14/89/1489067_v2.jpeg ",
         hotel_name: "Capital O 14768 The Grand",
         hotel_apartment: "Entire House / Apartment",
     Address: "3.2 km to City center",
         number: 8.2,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹1,47,320",
         price: "₹6,781",
         country: "delhi",
         latitude: 12.942472861139453,
                        longitude: 80.21574307233095
       }, {
         id: 24,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/11/97/1197952_v3.jpeg",
         hotel_name: "Bajrang Guest House",
         hotel_apartment: "Hotel",
         Address: "1.2 km to City center",
         number: 9.5,
         good_excellent: "good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹67,320",
         price: "₹4,781",
         country: "delhi",
         latitude: 13.035230130366493,
                    longitude: 80.16590216141064
       }, {
         id: 25,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/47/99471_v1.jpeg ",
         hotel_name: "Grand Lawson New Delhi ",
         hotel_apartment: "Hotel",
         Address: "3.2 km to City center",
         number: 9.7,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹35,320",
         price: "₹1,781",
         country: "delhi",
         latitude: 13.068700799181023,
                        longitude: 80.20972000434995
       }, {
         id: 26,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/30/45/3045898_v4.jpeg ",
         hotel_name: "FabHotel Olivia Suite New ",
         hotel_apartment: "Hotel",
         Address: "4.2 km to City center",
         number: 10,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "₹1,67,320",
         price: "₹4,781",
         country: "delhi",
         latitude: 12.971591558858378,
                    longitude: 80.24560829624534
       }, {
         id: 27,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/99/53/99530_v4.jpeg ",
         hotel_name: "OYO 8462 Hotel Galaxy",
         hotel_apartment: "Entire House / Apartment",
         Address: "8.2 km to City center",
         number: 8.2,
         good_excellent: "good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹46,320",
         price: "₹5,231",
         country: "delhi",
         latitude: 13.076027139121067,
                        longitude: 80.2136323414743
       }, {
         id: 28,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/92/98/929877_v2.jpeg",
         hotel_name: "The Park New Delhi",
         hotel_apartment: "Entire House / Apartment",
         Address: "5.7 km to City center",
         number: 9.3,
         good_excellent: "Excellent",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "56,678",
         price: "₹3,781",
         country: "delhi",
         latitude: 13.025114510527914,
                    longitude: 80.22878279909492
       }, {
         id: 29,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/98/85/9885320_v2.jpeg",
         hotel_name: "Hotel Lloyd Residency",
         hotel_apartment: "Hotel",
         Address: "4.2 km to City center",
         number: 7.6,
         good_excellent: "Very Good",
         Agoda_Makemytrip: "Agoda",
         price_31nights: "₹49,320",
         price: "₹2,781",
         country: "delhi",
         latitude: 13.068700799181023,
                        longitude: 80.20972000434995
       }, {
         id: 30,
         image:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/21/05/2105938_v1.jpeg",
         hotel_name: "FabHotel Prime Jasmine Bo",
         hotel_apartment: "Hotel",
         Address: "5.2 km to City center",
         number: 8.6,
         good_excellent: "good",
         Agoda_Makemytrip: "Makemytrip",
         price_31nights: "18,789",
         price: "₹1,781,",
         country: "delhi",
         latitude: 13.036353265508147,
        longitude: 80.15331754544285
       }
     ]
     
     
   
   localStorage.setItem("trivago",JSON.stringify(items));
    //  console.log(items)
   
   displayData(items);
   
   
   
     }

const displayData=(data,cityName)=>{
    console.log(data)
    let search= document.getElementById("search").value;
    let container=document.querySelector("#container")
    // container.innerHTML=""
    data.forEach(ele =>{
        let div=document.createElement("div")
        div.setAttribute("id","three");
        let div1=document.createElement("div")
        div1.setAttribute("id","three1");
        let img=document.createElement("img")
        img.src=ele.image;
       
        let div2=document.createElement("div")
        div2.setAttribute("id","three2");
        let hotelName=document.createElement("h2")
        hotelName.textContent=ele.hotel_name;
        // let heart=document.createElement("div")
        // heart.innerHTML=`<i class="fa-solid fa-heart"></i>`
        // heart.attribute("id","heart")


        let hotelApart=document.createElement("p")
        hotelApart.textContent=ele.hotel_apartment

        let address=document.createElement("p")
        address.textContent=ele.Address
        let rating=document.createElement("p")
        rating.textContent=ele.number

        let good=document.createElement("h4")
        good.textContent=ele.good_excellent
    
        let div3=document.createElement("div")
        div3.setAttribute("id","three3");
        let div31=document.createElement("div")
        div31.setAttribute("id","ruby");

        let agoda=document.createElement("p")
        agoda.textContent=ele.Agoda_Makemytrip

        let freeCancellation=document.createElement("p")
        freeCancellation.textContent="Free cancellation"
        let price31Night=document.createElement("p")
        price31Night.textContent="31 nights for"+ ele.price_31nights

        let div311=document.createElement("div")
        div311.setAttribute("id","three311");
        let price=document.createElement("h2")
        price.textContent=ele.price

        let viewDeal=document.createElement("button")
        viewDeal.textContent="View Deal"
    
        let div32=document.createElement("div")
        let ourLowestPrice=document.createElement("p")
        ourLowestPrice.textContent="Our Lowest Price:"+ele.price
     
        let div321=document.createElement("div")
        let price1=document.createElement("h2")
        price1.textContent=ele.name
        let agoda1=document.createElement("p")
        agoda1.textContent=ele.name

        var map = document.getElementById("gmap_canvas");
        map.src = `https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`


    div321.append(price1,agoda1)
    div32.append(ourLowestPrice,div321)
    div31.append(agoda,freeCancellation,price31Night, div311)
    div3.append(div31,div32)
    div311.append(price,viewDeal)

    div2.append(hotelName,hotelApart,address,rating,good)
    
     
      
    div1.append(img)
    div.append(div1,div2,div3)
    container.append(div);
      div.addEventListener("mouseover",function(){
        getWeather(data,ele.longitude,ele.latitude);
      })
    // div.addEventListener("click",mapFun);
    
    
    })
    
    
    }
    async function getWeather(items,long,lat) {
        
      //   if(cityName.value== undefined){
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2b231bae54b7abcb70f298ce8f585aea`;
              // }
              // else{
                  // url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=2b231bae54b7abcb70f298ce8f585aea`;
              // }
        try {
          var weatherdata = await fetch(url);
          var data = await weatherdata.json();
          console.log(data);
          displayData(items,data.name);
        } catch (e) {
          console.log(e);
        }
      }


     
     
  
  