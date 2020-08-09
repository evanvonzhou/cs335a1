// function to show homepage
function showhomepage(){
    if (document.getElementById("home").style.display = "none") {
        document.getElementById("home").style.display = "block";
        document.getElementById("product").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("news").style.display = "none";
        document.getElementById("guestbook").style.display = "none";
        document.getElementById("nav1").style.backgroundColor = "white";
        document.getElementById("nav2").style.backgroundColor = "brown";
        document.getElementById("nav3").style.backgroundColor = "brown";
        document.getElementById("nav4").style.backgroundColor = "brown";
        document.getElementById("nav5").style.backgroundColor = "brown";
    }
}

// function to show homepage
function showproductpage(){
    // get products when the page is loaded
    showproduct();
    if (document.getElementById("product").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("product").style.display = "block";
        document.getElementById("map").style.display = "none";
        document.getElementById("news").style.display = "none";
        document.getElementById("guestbook").style.display = "none";
        document.getElementById("nav1").style.backgroundColor = "brown";
        document.getElementById("nav2").style.backgroundColor = "white";
        document.getElementById("nav3").style.backgroundColor = "brown";
        document.getElementById("nav4").style.backgroundColor = "brown";
        document.getElementById("nav5").style.backgroundColor = "brown";
    }
}

// function to show products
function showproduct() {
    // fetch contents
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/items", 
      {
          headers:{
            "Accept" : "application/json",
          },
      });
    const streamPromise = fetchPromise.then((response) => response.json());
        
    let f = document.getElementById("product");
    let c = document.getElementById("showpdt");
    let content = "";

    // put fetched contents into webpage
    const update = (data) => {
        console.log(data);
        for(let i=0; i<data.length; i++){
            content += "<div class='pdtdiv'><img style='width: 150px; height: 150px;' src='http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=" + data[i].ItemId + 
            "'/><p>" +data[i].Title+ "</p><p>" + data[i].Origin + "</p><p>" + data[i].Type + "</p><p>$ " + data[i].Price + "</p><button>BUY</button></div>";
        }
        c.innerHTML = content;
            f.appendChild(c);
    }

    streamPromise.then(update);
}

// function to search products

let boo = 0;
let timer;

function starttimer () {
    timer = setTimeout(function(){
        boo = 1; go();}, 200);
}
function closetimer() {
    clearTimeout(timer);
    boo = 0;
}

function go(){
    if(boo){
        searchproduct();
    }
}

function searchproduct(){
    // fetch contents
    let search_term = document.getElementById("searchbar").value;
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/search?term=" + search_term, 
      {
          headers:{
            "Accept" : "application/json",
          },
      });
    const streamPromise = fetchPromise.then((response) => response.json());
        
    let f = document.getElementById("product");
    let c = document.getElementById("showpdt");
    let content = "";

    // put fetched contents into webpage
    const update = (data) => {
        console.log(data);
        for(let i=0; i<data.length; i++){
            content += "<div class='pdtdiv'><img style='width: 150px; height: 150px;' src='http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=" + data[i].ItemId + 
            "'/><p>" +data[i].Title+ "</p><p>" + data[i].Origin + "</p><p>" + data[i].Type + "</p><p>$ " + data[i].Price + "</p><button>BUY</button></div>";
        }
        c.innerHTML = content;
            f.appendChild(c);
    }

    streamPromise.then(update);
}

//function to show mappage
function showmappage(){
    // get location info when the page is loaded
    showlocation();
    if (document.getElementById("map").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("map").style.display = "block";
        document.getElementById("news").style.display = "none";
        document.getElementById("guestbook").style.display = "none";
        document.getElementById("nav1").style.backgroundColor = "brown";
        document.getElementById("nav2").style.backgroundColor = "brown";
        document.getElementById("nav3").style.backgroundColor = "white";
        document.getElementById("nav4").style.backgroundColor = "brown";
        document.getElementById("nav5").style.backgroundColor = "brown";
    }
}

//function to show location info
function showlocation(){
    //fetch contents
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/vcard");
    const streamPromise = fetchPromise.then((response) => response.text());
        
    let f = document.getElementById("map");
    let c = document.getElementById("showloc");
    let content = "";
    let tel = "";
    let email = "";
    let loc = "";
    let out = "";

    // put fetched contents into webpage
    const update = (data) => {
        console.log(data);
        content = data;
        content = content.split("\n");
        tel = content[3].replace(RegExp("TEL;WORK;VOICE:", "g"), "");
        email = content[5].replace(RegExp("EMAIL:", "g"), "");
        loc = content[4].replace(RegExp("ADR;WORK;PREF:;;", "g"), "");
        loc = loc.replace(RegExp(";", "g"), ", ")
        out += "<p>" + loc + "</p><a style='margin-right: 10px;' href='mailto: " + email + "'>📧: " + email + 
        "</a><a style='margin-left: 10px;' href='tel: " + tel + "'>📞: " + tel + "</a><div></div><a href='http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/vcard'>Add us to your address book</a>";
        c.innerHTML = out;
        f.appendChild(c);
    }

    streamPromise.then(update);
}

//function to show newspage
function shownewspage(){
    //get news when page is loaded
    shownews();
    if (document.getElementById("news").style.display = "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("news").style.display = "block";
        document.getElementById("guestbook").style.display = "none";
        document.getElementById("nav1").style.backgroundColor = "brown";
        document.getElementById("nav2").style.backgroundColor = "brown";
        document.getElementById("nav3").style.backgroundColor = "brown";
        document.getElementById("nav4").style.backgroundColor = "white";
        document.getElementById("nav5").style.backgroundColor = "brown";

        
    }
}

//function to get news
function shownews(){
    //fetch content
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/news", 
      {
          headers:{
            "Accept" : "application/json",
          },
      });
    const streamPromise = fetchPromise.then((response) => response.json());
        
    let f = document.getElementById("news");
    let c = document.getElementById("shownws");
    let content = "";

    // put fetched contents into webpage
    const update = (data) => {
        console.log(data);
        for(let i=0; i<data.length; i++){
            content += "<div style='border: 2px solid;'><a href='" + data[i].linkField + "'><h3>" + data[i].titleField + 
            "</h3>\n<img style='width: 100%; height: auto;' src='" + data[i].enclosureField.urlField + "'/></a>\n" + "<p>" + 
            data[i].pubDateField + "</p><p style='font-weight: bold;'> " + data[i].descriptionField + "</p>\n</div><div style='height: 10px;'></div>";
        }
        c.innerHTML = content;
            f.appendChild(c);
    }

        streamPromise.then(update);

}

//function to get guestbookpage
function showguestbookpage(){
    if (document.getElementById("guestbook").style.display == "none") {
        document.getElementById("home").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("news").style.display = "none";
        document.getElementById("guestbook").style.display = "block";
        document.getElementById("nav1").style.backgroundColor = "brown";
        document.getElementById("nav2").style.backgroundColor = "brown";
        document.getElementById("nav3").style.backgroundColor = "brown";
        document.getElementById("nav4").style.backgroundColor = "brown";
        document.getElementById("nav5").style.backgroundColor = "white";

    }
}

//function to submit comments
function submitcomment(){
    //post comment
    let name = document.getElementById("nm").value;
    let comment = document.getElementById("cmt").value;
    let jsoncomment = JSON.stringify(comment);
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/comment?name=" + name, 
        {
            headers:{
                "Content-Type" : "application/json",
            },
            method: "POST",
            body: jsoncomment
        });

    // when post is done, no matter it success or not, refresh the comments
    fetchPromise.then(
        function(){
            document.getElementById('showcmt').src = document.getElementById('showcmt').src;
            document.getElementById("nm").value = "";
            document.getElementById("cmt").value = "";
        }
    )

}