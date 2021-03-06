
//store all links in a variableƒ

let allLinks= document.querySelectorAll('.clickable-link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(event) {

    let current = document.getElementsByClassName("active");
    //Remove active class of previously clicked elements
    console.log(current);
    current[0].classList.remove('active')

    this.classList.add('active');  
      
        const divsToHide = document.getElementsByClassName("all-work"); 

        for(var i = 0; i < allLinks.length; i++){
            allLinks[i].classList.remove("active");
        }
        
        //Hide all pieces of work before showing again 
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }

       

        //Initialize variable holding divs to show in the following switch statement, using a 'for' loop
        //Intiallize outsize switch so it's available in every case
        let divsToShow; 

        //Get the id of the element that was clicked on
        switch(this.id) {
            case 'all-links':
                console.log('all-links was selected');
                divsToShow = document.getElementsByClassName("all-work"); //show all pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                 //Add active class to clicked element 
                     this.classList.add("active");
                break;
            case 'branding-link':
                console.log('all-links was selected');
                divsToShow = document.getElementsByClassName("branding"); //show all branding pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                    //Add active class to clicked element 
                    this.classList.add("active");
                break;

            case 'illustration-link':
                divsToShow = document.getElementsByClassName("illustration"); //show all branding pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                    //Add active class to clicked element 
                    this.classList.add("active");
                break;

            case "email-link":
                divsToShow = document.getElementsByClassName("edm"); //collect all work sections in an array
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                };
                    //Add active class to clicked element 
                    this.classList.add("active");
                break;

            case "trade-show-link":
                divsToShow = document.getElementsByClassName("trade-show"); //collect all work sections in an array
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                };
                //Add active class to clicked element 
                this.classList.add("active");
                break;
            }
        
            }); 
    });
