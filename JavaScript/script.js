(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);
;



/////////////////////////////////////////////////// ABOUT PAGE /////////////////////////////////////////////////////

var value=0
let aboutUsMain=document.getElementById("seeOurStory")
//Targeting Nav Element in JS
let aboutUsNav=document.getElementById("about")
//Creating a function to show the About Us Section with one parameter
function showAboutUs(link){
    link.addEventListener(`click`,function(){
    let output=document.getElementById("output")

    output.innerHTML=`<div class="container">

	<div class="row title-row">
		<div class="col-12 head-title">
			<h1 class="ourStory">OUR STORY</h1>
			<img src="./img/about_v1.png" alt="">
		</div>
	</div>

	<div class="row history-row">
		<div class="col-lg-8 history-img">
			<img id="historyImg" src="./img/about_g1.png" alt="">
		</div>
		<div class="col-lg-4  history-title">
			<h2 class="history-title">HIST<span style="color:#F6EC20">O</span>RY</h2>
		</div>
	</div>

	<div class="row">
		<div class="col history-text">
			<p class="historyParagraph">Ivi Cosmetics is a family company specialized in the production and distribution of Wax and Waxing products. We are the only company in Macedonia that produces Wax and one of the few in the Balkans.

			Ivi Cosmetics is present on the Macedonian market more than 10 years and till now we have had thousands of happy customers. </p>

			<p class="historyParagraph"> What distinguishes us from our competitors is that we use our own technology in the production of wax and only natural ingredients to make our Wax creams and products.
			As we said we are a small family company but our goal is to expand as fastest. </p>

			<p class="historyParagraph"> We enjoy being surrounded with beauty and the pleasure is doubled, when we combine an attractive bottle with a tempting fragrance. This is why we introduced our products to Your. Other have seen the value of IVI cosmetics, it’s time for you experience it.</p>
		</div>
	</div>

	<div class="row process-row">
		<div class="col-lg-4 process-title">
			<h2 class="process-title" >PR<span style="color:#F6EC20">O</span>CESS</h2>
		</div>
		<div class="col-lg-8 process-img">
			<img id="processImg" src="./img/about_g2.png" alt="">
		</div>
	</div>

	<div class="row">
		<div class="col process-text">
			<p>vi Cosmetics accepts with great pleasure, the information that our Wax Products have always been acknowledged as the best waxing products since we first entered the market in Macedonia. This competition advantage that we have not only on the Macedonian market but in our neighboring countries promotes and acknowledges our innovative and creative approach towards wax beauty through our value in use, appealing design and aesthetic finish. Our products are favored because they satisfy the taste of even the most demanding consumers. It makes us even prouder that the Wax collection, which is already valued by yourselves, has been recognized by the specialists. </p>

			<p>What distinguishes us from our competitors is that we use our own technology in the production of wax and only natural ingredients to make our Wax creams and products. </p>

			<p> </p>
		</div>
	</div>
</div>
<div class="container-fluid partners">
	<div class="row partners-row">
		<div class="col-12">
			<div class="flower-cont">
				<img id="yellowFlower" src="./img/about_v2.png" alt="">
			</div>
			<div class="partners-title">
				<h2>OUR PARTNERS</h2>
			</div>
		</div>


	</div>

	<div class="row rectangle-row">
		<div class="col-12 partners-logos">
			<div class="rectangle">
				<ul class="unorderedList">
					<li>
						<figure class="logo1 figure">
							<i class="fab fa-app-store"></i>
						</figure>
						<figure class="logo2 figure">
							<i class="fab fa-app-store"></i>
						</figure>
						<figure class="logo3 figure">
							<i class="fab fa-app-store"></i>
						</figure>
						<figure class="logo4 figure">
							<i class="fab fa-app-store"></i>
						</figure>
						<figure class="logo5 figure">
							<i class="fab fa-app-store"></i>
						</figure>
						<figure class="logo6 figure">
							<i class="fab fa-app-store"></i>
						</figure>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
`
scroll(0,0)
})
}
//Calling the function for the Navigation bar Link
showAboutUs(aboutUsNav)
let aboutFooter=document.getElementById("aboutFooter")
//Calling the function to show the About us when clicked on the About us from foooter

showAboutUs(aboutFooter)
showAboutUs(aboutUsMain)

/////////////////////////////////////////////////////// STORE PAGE ///////////////////////////////////////////////////////////////
let store=document.getElementById("store")
//Creating a function with one parameter to show the Store
function showStore(link){
    link.addEventListener(`click`,function(){
        let output=document.getElementById("output")

        output.innerHTML=`<div class="container-fluid" id="store">
		<div class="row">
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product1.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product2.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product3.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product4.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product5.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product6.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product7.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product8.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
			<div class="col-md-4 store-product-one ">
				<div class="img-container"><img src="img/store_product9.jpg" class="img-fluid product-img" alt=""><div class="middle"><div class="text-img">CLICK ON IMAGE TO SEE MORE</div></div></div>
				<h4 class="title-product"style="font-weight:bold">Wax depilator 100g</h4>
				<div><p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p></div>
				<div class="store-btn"><button id="addToCart" type="button" class="btn btn-outline hero-btn" style= "color:#333;">Add to cart</button></div>
			</div>
		</div>
	</div>
        
	`
	scroll(0,0)
	//Making the Counter go Up with each click on add to Cart.
		let addToCartBtn=document.getElementsByClassName("store-btn")


		for(let i=0;i<addToCartBtn.length;i++){
		addToCartBtn[i].addEventListener(`click`,function(){
			let addtoCartNumber=document.getElementById("cart-products")

			value++

			addtoCartNumber.innerText=value
			alert("Product Added to Cart")

			addtoCartNumber.style.color="red"
			addtoCartNumber.style.fontSize="1.2em"
		})}
	
	

 /////////////////////////////////////////////////////// SINGLE STORE PAGE //////////////////////////////////////////////////////////////
	let clickImages=document.getElementsByClassName("product-img");
	//Making a loop so that we can add the event listener for each elemept in order to take us to the one Product page. This function will change when we will have to make an Ajax Call.
		for(let i=0;i<clickImages.length;i++){

			clickImages[i].addEventListener(`click`,function(){

				output.innerHTML=` <div class="container">
				<div class ="row single-page-row">
				   <div class="col-lg-8">
					   <img src="./img/product1.jpg" class="img-fluid ss-img-product" alt="">
				   </div>
					   
				   <div class="col-lg-4 wax-about">
					   <h2 class="wax-title"> Wax depilator</h2>
					   <p class="wax-title" >100g</p>
					   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique autem nisi consequuntur aliquam est iusto sed explicabo doloribus, ratione quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo assumenda dolore corporis aperiam nihil fugit, veritatis possimus quam rerum. Aperiam.</p>
					   <p><b>Ingredients:</b> Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p>
					   <p class="wax-title" id="Price">320 den</p>
					   <button  type="button" class="btn btn-outline hero-btn add-btn" style="color: black;">Add to cart</button>
				   </div>
			   </div>
			   <div class="row">
					  <div class="col-md-12">
					  		<div class="add-info-title"><h4><b>Additional information</b></h4></div>
						   
					  	<div class="add-info"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eligendi sed et praesentium facilis voluptatibus sint exercitationem magnam, omnis ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi fugiat voluptates deleniti dicta maiores porro, tenetur in delectus consequuntur!</p>
						   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ea quam corporis numquam sint nam commodi repudiandae accusantium maxime, neque odit, qui alias cum nemo iste quia optio atque recusandae.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis perferendis quaerat minima illo, minus voluptate modi incidunt! Reprehenderit, rem qui?</p>
						   </div>
					   </div>
			   </div>

				   <div class="row">
					 <div class="col-md-12">
						<h4 class="similar-title"><b>Similar products</b></h4>
						  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner col-10 mx-auto">
					   <div class="carousel-item active">
						<div class="row">
							  <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product2.jpg" class="d-block w-100" alt="product image"></a>
								 <h5 class="caption">Wax depilator</h5>
						   </div>
						   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product3.jpg" class="d-block w-100" alt="product image"></a>
								 <h5 class="caption">Wax depilator</h5>
						   </div>
						   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product4.jpg" class="d-block w-100" alt="product image"></a>
								 <h5 class="caption">Wax depilator</h5>
							  </div>
						   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product5.jpg" class="d-block w-100" alt="product image"></a>
								 <h5 class="caption">Wax depilator</h5>
						   </div>
						 </div>
				   </div>
			   </div>
			   <div class="carousel-item">
					 <div class="row">
					   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product6.jpg" class="d-block w-100" alt="product image"></a>
							 <h5 class="caption">Wax depilator</h5>
					   </div>
					   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product8.jpg" class="d-block w-100" alt="product image"></a>
							 <h5 class="caption">Wax depilator</h5>
					   </div>
					   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product7.jpg" class="d-block w-100" alt="product image"></a>
							 <h5 class="caption">Wax depilator</h5>
					   </div>
					   <div class="col-md-3  col-6 grey-background"><a href="#"><img src="img/store_product9.jpg" class="d-block w-100" alt="product image"></a>
							 <h5 class="caption">Wax depilator</h5>
					   </div>
					 </div>
			   </div> 
		 </div>

		 <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		 </a>
		 <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		   <span class="carousel-control-next-icon" aria-hidden="true"></span>
		 </a>
	   </div>
	 </div>

   </div>
   <div class="row">
	   <div class="col-md-12  view-more-btn">
		   <button type="button" class="btn btn-outline hero-btn" style="color: black;">View more</button>
	   </div>
   </div>
 </div>

`

			//Incrementing the Products number in the CartElement in Singe Product Page
			//let addtoCartbtnSinglePage=document.getElementById("addtoCartSingePage")
			
			let addProductBtn=document.getElementsByClassName("add-btn")


		for(let i=0;i<addProductBtn.length;i++){
		addProductBtn[i].addEventListener(`click`,function(){
			let addProductBtnNumber=document.getElementById("cart-products")

			value++

			addProductBtnNumber.innerText=value
			alert("Product Added to Cart")

			addProductBtnNumber.style.color="red"
			addProductBtnNumber.style.fontSize="1.2em"
		})}
			})

		}

	})
	


}


// FOOTER
let storeFooter=document.getElementById("store-footer")
//Showing the Store, and the storeFooter
showStore(store)
showStore(storeFooter)

//////////////////////////////////////////////////////// CONTACT PAGE //////////////////////////////////////////////////////////////////
let contactUs=document.getElementById("contact")
//Making a function with one parameter to show the Contact section
function showContact(link){

	link.addEventListener(`click`,function(){
	let output=document.getElementById("output")
	output.innerHTML=`<div class="container my-3 my-sm-5">
	<h2 class="meet-us pt-3 mb-sm-4">MEET US</h2>
	<div class="row address ">
		<div class="col-1 yellow-rectangle"></div>
		<div class="address-info col-5 pl-5 pt-3">
			<h3>Address:</h3>
			<p class="">Bul Jane Sandanski 105 <br>1000 Skopje, <br>Macedonia</p>
		</div>
		<div class="col-6">
			<img id="brown-flower" class="img-fluid" src="img/contact_v1.png">
		</div>
	</div>

	<h2 class="row call-us pt-5 mb-sm-4 flex-row-reverse">CALL US</h2>
	<div id="callRow" class="row phone-num  flex-row-reverse">
		<div class="col-1 olive-rectangle"></div>
		<div class="phone-info col-5  pt-3">
			<h3>Phone number:</h3>
			<p>Tel +38922444528 <br> Mob: +38975869749 <br></p>
		</div>
	</div>
	<h2 class="follow-us pt-5 mb-sm-4">FOLLOW US</h2>
	<div class="row follow">
		<div class="col-1 beige-rectangle"></div>
		<div class="follow-div col-5 pl-5 pt-3">
			<h3>Social networks:</h3>
			<a href="https://www.facebook.com/IviCosmetics/" target="_blank"><i class="fab fa-4x fa-facebook-square"></i></a>
			<a href="#0"><i class="fab fa-4x fa-instagram"></i></i></a>
		</div>

	</div>
	<div class="col-12">
		<img id="yellow-flower" class="img-fluid" src="img/contact_v2.png">
	</div>

</div>`
scroll(0,0)

})
}


let contactFooter=document.getElementById("contact-footer")
//Caling the functions to show the Contact Us
showContact(contactFooter)
showContact(contactUs)

///////////////////////////////////////////////////////////// CART //////////////////////////////////////////////////////////////////////////
//Showing the Cart
 let cartBtn=document.getElementById("open-cart")
 cartBtn.addEventListener(`click`,function(){

	if(value===0){
		alert("You Have no Items in your Shopping Cart")
	}
	else{
	let output=document.getElementById("output")

	let renderSelectedProducts=`<div class="container shopping-cart-bottom ">


	
	<div class="row  shopping-cart-general" >
		<div class="col-md-2">
			<img class="shopping-cart-product-image" src="img/product1.jpg" alt="">
			</div>
			<div class="col-md-2 ">
				
				<h4 class="product-name ">Face Mask</h4>
				<p id="price-in-cart" class="cart-price " >320</p>
			</div>
				<div class="col-md-2 cart-column-general second-cart-row">
					<p class="art-num">Art Number: 00763</p> 
				</div>
				<div class="col-md-2 quantity-mobile ">
					<h4 class="quantity-cart" >Quantity</h4>
					
				

					<select  class="quantity-option cart-column-general" name="quantity" id="quantity-cart">
  					<option class="quantity-cart-values" value="1">1</option>
  					<option  class="quantity-cart-values" value="2">2</option>
					<option class="quantity-cart-values" value="3">3</option>
					  <option class="quantity-cart-values" value="4">4</option>
					  <option class="quantity-cart-values"  value="5">5</option>
					  <option class="quantity-cart-values"  value="6">6</option>
					  <option class="quantity-cart-values"  value="7">7</option>
					  <option class="quantity-cart-values"  value="8">8</option>
					  <option class="quantity-cart-values"  value="9">9</option>
					  <option class="quantity-cart-values"  value="10">10</option>
					</select>
					
				</div>
				<div class="col-md-2 cart-column-general second-cart-row"><p>Price</p></div>

				<div class="col-md-2 total-product-price cart-column-general second-cart-row">
					<p>200</p>
				</div>
				
				
				
			</div>
		</div>`
	var	multiplyingProducts=renderSelectedProducts.repeat(value)
	output.innerHTML=`
	<h1 class="shopping-cart-header">SHOPPING CART</h1>
	
		${multiplyingProducts}
	
		<div class="container">
		<div id="resizingPrices" class="row" >
			
		</div>
	</div>
		<div class="container row">
		<div class="vectors">
		
			<img class="brown-img-vector vectors" src="img/shopping-cart-vector.png" alt="">  
		
		
			<img class="yellow-img-vector vectors " src="img/home_v3.png" alt="">
		
	</div>`

	


	
	//Calculating the Prices witht the Quantity :D

	//Getting the options from the dropdown 
		let quantityOption=document.getElementsByClassName("quantity-option")
//Putting them through a loop
		for(let i=0;i<quantityOption.length;i++){
//Adding an event Listener that listens to change in dropdown. If there is a change we call the addActivityItem
			quantityOption[i].addEventListener("change",addActivityItem,false);
		}

	//We do our business logic in the addActivityItem Function
function addActivityItem(){

//We target the selec option again.
	var e=document.getElementsByClassName("quantity-option")
	//We get the Product prices (We are targetting a class, since there will be more than 1 option when two or more products are added)
	let totalProductPrice=document.getElementsByClassName("total-product-price")
	//Creating a loop to loop through the options
	for(let i=0;i<e.length;i++){
		//Making  the value of the product  200 everytime the loop iterates
		totalProductPrice[i].innerText=200
		// THe total variable parses two strings to numbers and adds them up
		 var total=parseInt(totalProductPrice[i].innerText)*parseInt(e[i].value).toString()

		 //We assign the total to the price
		totalProductPrice[i].innerText=total
	}

	


}


//Ok so it was difficult to make the prices mobile friendly
//I created a function that listens when the window resizes and changes the html accordingly. 
//This approach will make us implement the business logic twice, but until further and better implementation we will go with this method
	var resizingPrices = window.matchMedia("(max-width: 776px)")
myFunction(resizingPrices) // Call listener function at run time
 // Attach listener function on state changes
 resizingPrices.addListener(myFunction)
function myFunction(resizingPrices) {

let mobileprices = document.getElementById("resizingPrices")

	if (resizingPrices.matches) { // If media query matches
	  mobileprices.innerHTML=` 
	
	 <div class="mobile-prices row"> 
	  <div class=""></div> 
	  <!-- <div class=""> -->
		 <div class="">
			 <p class="" >Price: </p>
			 <p class="" >Shipping</p> 
			 <p class="" >Total Price</p>
			 <button class="order-btn" id="placeOrder">ORDER</button>
		 </div>
		 <div class="">
			 <p id="productsCalculated">0</p>
			 <p id="shippingPrice" >0</p>
			 <p  >0</p>
			 
		 </div>
		 </div>`
		 

	//Targeting the element which holds the Total Price
		//Getting the options from the dropdown 
		let quantityOption=document.getElementsByClassName("quantity-option")
//Putting them through a loop
		for(let i=0;i<quantityOption.length;i++){
//Adding an event Listener that listens to change in dropdown. If there is a change we call the addActivityItem
			quantityOption[i].addEventListener("change",calculateCost,false);
		}


	function calculateCost(){
		var make=[]

	let totalProductPrice=document.getElementsByClassName("total-product-price")
	let productsCalculated=document.getElementById("productsCalculated")

		for(let i=0;i<totalProductPrice.length;i++){
			

			
			make.push(parseInt(totalProductPrice[i].innerText))
			
		 
			var totalPrice=make.reduce(function(a,b ){

				return a+b;
			})
		
		}	


		productsCalculated.innerText=totalPrice;

}

	} else {
		mobileprices.innerHTML=`<div class="container">
		<div id="klasaepergjithshme" class="row" >
			 <div class="col-md-8 "></div> 
			 <!-- <div class="col-md-4 order-checkout"> -->
				<div class="col-md-2">
					<p class="total-price" >Price: </p>
					<p class="shipping-price" >Shipping</p> 
					<p class="total-cost">Total </p>
					<button class="order-btn" id="placeOrder">ORDER</button>
				</div>
				<div class="col-md-2">
					<p class="total-product-value" id="productsCalculated">0</p>
					<p class="total-product-value test-value" id="shippingPrice">0</p>
					<p class="total-product-value" id="calculatedTotal">0</p>
					
				</div>



				
			
			
			
		 </div>
		</div>
	</div>`

	//Targeting the element which holds the Total Price
		//Getting the options from the dropdown 
		let quantityOption=document.getElementsByClassName("quantity-option")
//Putting them through a loop
		for(let i=0;i<quantityOption.length;i++){
//Adding an event Listener that listens to change in dropdown. If there is a change we call the addActivityItem
			quantityOption[i].addEventListener("change",calculateCost,false);
		}


	function calculateCost(){
		var make=[]

	let totalProductPrice=document.getElementsByClassName("total-product-price")
	let productsCalculated=document.getElementById("productsCalculated")

		for(let i=0;i<totalProductPrice.length;i++){
			

			
			make.push(parseInt(totalProductPrice[i].innerText))
			
		 
			var totalPrice=make.reduce(function(a,b ){

				return a+b;
			})
		
		}	


		productsCalculated.innerText=totalPrice;

}


	}
  }


}

 })


 ////////////////////////////////////////////////////////// SINGLE BLOG PAGE //////////////////////////////////////////////////////////////
 function showSingleBlog(link){

	link.addEventListener(`click`,function(){

		let output=document.getElementById("output")

		output.innerHTML=` <div class="container-fluid">
		<div class="row">
		  <div class="col-12">
			<img class="img-fluid blog-hero-img" src="./img/blog_hero.jpg" alt="">
		  </div>
		</div>
	  </div>
	
	  <div class="container">
		<div class="row singl">
		  <div class="col-md-2"></div>
		  <div class="col-md-8 blog-details">
			<p class="blog-date"> 03.04.2020.</p>
			<h3 class="blog-title">NEWS TITLE</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			  Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis
			  id at magna orci congue amet.Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum.
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
			  lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at
			  magna orci congue amet. Aliquet consequat sed dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lorem leo, sit enim sed in facilisi proin a. Convallis id at magna orci congue amet. Aliquet consequat sed dictum.</p>
		  </div>
		  <div class="col-md-2"></div>
		</div>
	  </div>
	  <div class="container">
		<div class="row">
		  <div class="col-sm-6 col-md-4">
			<button type="button" class="btn btn-outline blog-btn blog-btn-prev">Previous blog </button> </div>
		  <div class="col-md-4">
		  </div>
		  <div class=" col-sm-6 col-md-4">
			<button type="button" class="btn btn-outline blog-btn blog-btn-next"> Next blog </button>
		  </div>
		</div>
	  </div>
	  <div class="container">
		<div class="row">
		  <div class="col-md-12 blog-sunflower">
			<img class="img-fluid" src="./img/blog_v1.png" alt="">
		  </div>
		  <div class="col-md-12 blog-recent-title">
			<h3>MOST RECENT NEWS</h3>
		  </div>
		</div>
	  </div>
	  <div class="container">
		<div class="row">
		  <div class="col-md-6 blog-news-div">
			<div class="smaller-div">
			  <div class="text-box">
				<p>03.04.2020.</p>
				<h5 class="blognews-title">NEWS TITLE</h5>
				<p class="blog-p">Author: Bob Bobsky</p>
			  </div>
			</div>
		  </div>
		  <div class="col-md-6 blog-news-div">
			<div class="smaller-div">
			  <div class="text-box">
				<p>03.04.2020.</p>
				<h5 class="blognews-title">NEWS TITLE</h5>
				<p class="blog-p">Author: Bob Bobsky</p>
			  </div>
			</div>
		  </div>
		</div>
		<div class="row">
		  <div class="col-md-12 blog-all-btn">
			<button type="button" id="seeAllBlogs" class="btn btn-outline blog-btn">See all posts</button>
		  </div>
		</div>
	  </div>`

	  try{
		  let seeAllBlogs=document.getElementById("seeAllBlogs")
		  showBlog(seeAllBlogs)
	  }

	  finally{scroll(0,0)}

	
	})
}


 
///////////////////////////////////////////////////////// BLOG PAGE //////////////////////////////////////////////////////////////////////

function showBlog(link){


	link.addEventListener(`click`,function(){

		let output=document.getElementById("output")
		let bloghtml=`	
	  <div class="container">
	  <div class="row hp-blog-row">
			<div class="col-lg-6 hp-blog-img">
			  
			  <div class="smaller-div" id="firstElementBlog">
				<div class="text-box">
				<p>03.04.2020.</p>
				<h5>News Title</h5>
				<p>Author: Bob Bobsky</p>
			  </div>
			</div>
			  </div>
			<div class="col-lg-6 hp-blog-img" id="secondElementBlog">
				<div class="smaller-div">
				  <div class="text-box">
				<p>03.04.2020.</p>
				<h5>News Title</h5>
				<p>Author: Bob Bobsky</p>
					</div>
			 </div>
			</div>
			
		</div>
		</div>`
		output.innerHTML=`
		<div>
		  
		<img class="header-blog" src="img/blog_hero.jpg" />
	  </div>
		${bloghtml + bloghtml+bloghtml}
	
		  <div class="pagination">
		
			<a href="#">1</a>
			<a href="#" class="active">2</a>
			<a href="#">3</a>
			
			<a href="#">&raquo;</a>`
try{
			
			let getBlogClass=document.getElementsByClassName("smaller-div")
			
		
			for(let i=0;i<=getBlogClass.length;i++){
			
				showSingleBlog(getBlogClass[i])
			}

		}

		finally{scroll(0,0)}
		
	})
}


let navBlog=document.getElementById("blog-nav")
let mainBlogbtn=document.getElementById("seeAllPosts")

showBlog(navBlog)
showBlog(mainBlogbtn)

let storeMainBtn=document.getElementsByClassName("storeClass")

 
console.log(storeMainBtn)


for(let i=0;i<=storeMainBtn.length;i++){

	showStore(storeMainBtn[i])
}
 //////////////////////////////////////////////////////////// STORE PAGE 2 ///////////////////////////////////////////////////////////
// SHowing the Store from the Main Butons

	
	

	



