window.addEventListener("DOMContentLoaded", function()
{





    selectedPoints = [];
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    var myimage  = new Image();
    myimage.id = 'swMapImage';
    myimage.src = "./mapImage.png";
    // myimage.src = 'https://github.com/UdarGIT829/SW-Galaxy-Map/raw/master/mapImage.png';

    myimage.onload = function()
    {
        var canvasMap = document.createElement("canvas");
        canvasMap.id = "canvasMap";
        canvasMap.style.cursor="crosshair";
        canvasMap.width  = myimage.naturalWidth;
        canvasMap.height = myimage.naturalHeight;
        document.body.appendChild(canvasMap);
    

        var contextMap = canvasMap.getContext("2d");
        var indexedSystems = [
            [1517,219,"Belkadan"], [1504,320,"Helska"], [1446,350,"Gree"],
            [1526,369,"Sernpidal"], [1672,421,"Birgis"], [1492,420,"Plooma"],
            [1393,457,"Dubrillion"], [909,937,"Ilum"], [1084,806,"Esfandia"],
            [1236,596,"Valc"], [1229,533,"Kalee"], [1325,429,"Bastion"],
            [1323,475,"Bescane"], [1327,505,"Jaemus"], [1389,684,"Garq"],
            [1447,670,"Moltok"], [1438,659,"Ord Biniir"], [1528,654,"Horuz"],
            [1438,533,"Dantooine"], [1612,634,"Akuria"], [677,1101,"Csilla"],
            [849,1487,"Rakata Prime"], [784,1704,"Zonama Sekot"], [964,2037,"Rattatak"],
            [953,1915,"Zaddja"], [1134,2101,"Cerea"], [950,2058,"Bunduki"],
            [859,2115,"Bakura"], [998,2129,"Endor"], [1300,824,"Uba"],
            [1422,777,"Ord Cantrell"], [1843,793,"Dathomir"], [1665,831,"Er'Kit"],
            [1322,589,"Entralla"], [1737,534,"Bimmiel"], [1438,1254,"Coruscant"],
            [1515,1318,"Vulpter"], [1439,1355,"Tython"], [1556,1233,"Tepasi"],
            [1390,1175,"Borleias"], [1394,1199,"Pantolomin"], [1513,1208,"Brentaal"],
            [1459,1240,"Alsakan"], [1488,1222,"Anaxes"], [1580,1461,"Ojom"],
            [1786,885,"Taris"], [1581,842,"Ithor"]
        ];
        
        for (var i = 0, len = indexedSystems.length; i < len; i++) {
            indexedSystems[i][3] = "https://starwars.fandom.com/wiki/"+indexedSystems[i][2];
        }
        console.log(indexedSystems)

        setTimeout(drawMap(myimage,indexedSystems),3000);

        window.addEventListener('contextmenu', function(evt) { 
        evt.preventDefault();
        }, false);
        var whichButton = function (e) {
            // Handle different event models
            var e = e || window.event;
            var btnCode;
        
            if ('object' === typeof e) {
                btnCode = e.button;
                var evt = e;
        
                switch (btnCode) {
                    case 0:
                        console.log('Left button clicked.');
                        //Upon left click get x,y coords of mouse;
                        //  deliver to display canvas, and push to array with name prompt
                        //  popup after every new input showing copy/pastable indexedSystems array

                        var xPosition = Math.round(mousePos.x);
                        var yPosition = Math.round(mousePos.y); 
                        var message = "Mouse button " + evt.button + " down at position: " + xPosition + ',' + yPosition;
                        
                        //Warn for nearby system
                        var myNearestSystem = nearestSystem(xPosition,yPosition,indexedSystems);
                        if (myNearestSystem[1]<100){
                            Popup("Nearest system: "+myNearestSystem[0]+"\n"+"Distance: "+myNearestSystem[1]);
                        }

                        if (confirm("Would you like to enter a new system?")){
                            //Prompt for new system name
                            var newSystemName = prompt("Enter Name of new system.");
                            if (newSystemName === "") {
                                // user pressed OK, but the input field was empty
                            } else if (newSystemName) {
                                // user typed something and hit OK
                                indexedSystems.push([xPosition,yPosition,newSystemName]);
                            } else {
                                // user hit cancel
                            }
                            //Push new system to array
                            console.log(newSystemName);
                        } else {
                            //User
                        }



                        Popup("",indexedSystems);

                        var message = "Mouse up at position: " + Math.round(mousePos.x) + ',' + Math.round(mousePos.y);
                        writeMessage(canvas, message,myNearestSystem[0]);

                        //Draw circle where mouse clicks
                        drawCircle(contextMap,mousePos.x,mousePos.y,3,);

                        
                        break;
        
                    case 1:
                        console.log('Middle button clicked.');
                        //Scroll mouse when 
                    break;
        
                    case 2:
                        console.log('Right button clicked.');
                        myFrame = document.getElementById("myFrame");
                        var xPosition = Math.round(mousePos.x);
                        var yPosition = Math.round(mousePos.y); 
                        var myNearestSystem = nearestSystem(xPosition,yPosition,indexedSystems);
                        console.log(myNearestSystem);
                        myFrame.src = myNearestSystem[2];

                        modal.style.display = "block";
                        modalImg.src = myFrame.src;

                    break;
        
                    default:
                        console.log('Unexpected code: ' + btnCode);
                }
            }
        }
        canvasMap.onmouseup=whichButton;
        canvasMap.oncontextmenu= event.preventDefault();
        canvasMap.addEventListener('mousemove', function (evt) {
            mousePos = getMousePos(canvasMap, evt);
            var message = 'Mouse position: ' + Math.round(mousePos.x) + ',' + Math.round(mousePos.y);
            writeMessage(canvas, message,nearestSystem(Math.round(mousePos.x),Math.round(mousePos.y),indexedSystems)[0]);

        }, false);
    
        canvasMap.addEventListener('mousedown', function (evt) {
            mouseButton = evt.button;
            var message = 'Mouse position: ' + Math.round(mousePos.x) + ',' + Math.round(mousePos.y);
            writeMessage(canvas, message);
            console.log(message)
    
        }, false);
    
        canvasMap.addEventListener('mouseup', function (evt) {
        }, false);

        canvasMap.addEventListener('contextmenu', function(evt) { // Right click
            evt.preventDefault();
            evt.stopPropagation();
        },false);



    }


    async function drawMap(myImage,indexedSystems)
    {
        //Draw circles over all currently indexed systems
        var contextMap = canvasMap.getContext("2d");
        contextMap.drawImage(myimage, 0, 0);
    
        for (var i = 0, len = indexedSystems.length; i < len; i++) {
            element = indexedSystems[i];
            drawCircle(contextMap,element[0],element[1],3,);
        }
    
    
    }
    
    function nearestSystem(inputX,inputY,systemCoordArray)
    {
        function getDistance(x1, y1, x2, y2){
            let y = x2 - x1;
            let x = y2 - y1;
            
            return Math.sqrt(x * x + y * y);
        }
        bestDistance = 9003000; // 3000 * 3001
        nearestPlanet = "N/A"
        nearestLink = ""
        systemCoordArray.forEach(element => {
            let thisDistance = getDistance(inputX,inputY,element[0],element[1])
            if (thisDistance < bestDistance){
                bestDistance = thisDistance;
                nearestPlanet = element[2];
                nearestLink = element[3];
            }
        });
        return [nearestPlanet,bestDistance,nearestLink]
    }
    
    function writeMessage(canvas, message,message2="") {
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '12pt Calibri';
        ctx.fillStyle = 'black';
        ctx.fillText(message, 10, 25);
        if(message2 != "")
        {ctx.fillText(message2,10,45);}
        
        ctx.restore();
    }
    
    function getMousePos(canvas, evt) {
        // necessary to take into account CSS boudaries
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    
    function drawCircle(ctx, X, Y, radius) {
        ctx.lineWidth = 3;
        var dotColor = 'rgba(214, 171, 55, 0.7)';
        var dotColor = 'red'
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(X, Y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
      }
    
    function Popup(text,indexedSystems=undefined) {
        if (indexedSystems==undefined){
            window.alert(text);
        }   else {
            output = "var indexedSystems = [\n\t";
            for (var i = 0, len = indexedSystems.length; i < len; i++) {
                element = indexedSystems[i];
                output+="["+element[0]+","+element[1]+",\""+element[2]+"\"]";
                if (i==len-1)
                {
                    //Last system in array
                    output+="\n";
                } else {
                    if (isEveryOther(i+1,indexedSystems.length)){
                        output+=",\n\t";
                    } else {
                        output+=", ";
                    }
                }
            }
            // indexedSystems.forEach(element => {output+="\t["+element[0]+","+element[1]+","+element[2]+"],\n"});
            output += "]\n"
            window.alert(output+"\n______\nDon't forget to copy to clipboard!")
        }
    
        }
    function isEveryOther(num,myLen) { var lineLimit = Math.round(Math.sqrt(myLen)/2);return (num % lineLimit) == 0 && num > 0;}
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("canvasMap");
    var modalImg = document.getElementById("myFrame");
    var captionText = document.getElementById("caption");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
});
