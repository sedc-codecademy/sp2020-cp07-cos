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
			<h2 class="history">HIST<span style="color:#F6EC20">O</span>RY</h2>
		</div>
	</div>

	<div class="row">
		<div class="col history-text">
			<p class="historyParagraph">Иви Козметика е фамилијарна фирма која постои на Македонскиот пазар од 1992 година.
				Од самите почетоци се специјализира во произвотство на продукти за депилација, а
				како бренд продукт е восочниот депилатор кој од самиот старт е најпродаван
				Македонски продукт од овој тип. Нашите депилатори се веке присутни на пазарите во
				Србија, Албанија, Црна Гора и Косово, а преку разработената дистрибутивна мрежа и на
				одредени локали во Германија.
				Низ годините оригиналниот восочен депилатор добива свои под производи како Путер
				депилатор кој се користи кај кожа каде е потребна дополнителна хидратацијана и Зелен
				депилатор кој има зголемен сооднос на етерични масла. Од пред неколку
				години
				сме
				мегу ретките компании кои произведуваат ладен депилатор кој се користи за брза
				депилација и кај луге со поосетлива кожа на топлина. </p>

			<p class="historyParagraph"> Она што не разликува од конкуренцијата се природните состојки кои ги користиме во
				процесто на произвотство како и сопствената технологија на произвотство во која
				користиме пчелин восок како и природни етерични масла. Една од главните
				карактеристики на нашите депилатори отпага и во процесот на селекција и избор на
				калафониумот (смола) кои мора да задоволат одредени карактеристики на квалитет, боја
				и стабилност. Калафонумот се набавува од борови шуми од Белорусија па до
				Источна
				Азија.
				Квалитетот на нашите производи го имаме докажано и покажано на повеке
				интернационални саеми како EuroAsia Beauty Турција, саемите за убавина во Белград,
				Загреб, Бања Лука. </p>

			<p class="historyParagraph"> Иви Козметика е мала компанија но нашите планови се во догледно време да го
				прошириме како асортиманот на производи така и пазарите во кои извезуваме поради што
				сме во постојана потрага по дистрибутери.</p>
		</div>
	</div>

	<div class="row process-row">
		<div class="col-lg-4 process-title">
			<h2>PROCE<span style="color:#6F693A">SS</h2>
		</div>
		<div class="col-lg-8 process-img">
			<img id="processImg" src="./img/about_g2.png" alt="">
		</div>
	</div>

	<div class="row">
		<div class="col process-text">
			<p>Иви Козметика е фамилијарна фирма која постои на Македонскиот пазар од 1992 година.
				Од самите почетоци се специјализира во произвотство на продукти за депилација, а
				како бренд продукт е восочниот депилатор кој од самиот старт е најпродаван
				Македонски продукт од овој тип. Нашите депилатори се веке присутни на пазарите во
				Србија, Албанија, Црна Гора и Косово, а преку разработената дистрибутивна мрежа и на
				одредени локали во Германија.
				Низ годините оригиналниот восочен депилатор добива свои под производи како Путер
				депилатор кој се користи кај кожа каде е потребна дополнителна хидратацијана и Зелен
				депилатор кој има зголемен сооднос на етерични масла. Од пред неколку
				години
				сме
				мегу ретките компании кои произведуваат ладен депилатор кој се користи за брза
				депилација и кај луге со поосетлива кожа на топлина. </p>

			<p>Она што не разликува од конкуренцијата се природните состојки кои ги користиме во
				процесто на произвотство како и сопствената технологија на произвотство во која
				користиме пчелин восок како и природни етерични масла. Една од главните
				карактеристики на нашите депилатори отпага и во процесот на селекција и избор на
				калафониумот (смола) кои мора да задоволат одредени карактеристики на квалитет, боја
				и стабилност. Калафонумот се набавува од борови шуми од Белорусија па до
				Источна
				Азија.
				Квалитетот на нашите производи го имаме докажано и покажано на повеке
				интернационални саеми како EuroAsia Beauty Турција, саемите за убавина во Белград,
				Загреб, Бања Лука. </p>

			<p>Иви Козметика е мала компанија но нашите планови се во догледно време да го прошириме
				како асортиманот на производи така и пазарите во кои извезуваме поради што сме во
				постојана потрага по дистрибутери. </p>
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

let store=document.getElementById("store")
//Creating a function with one parameter to show the Store
function showStore(link){
    link.addEventListener(`click`,function(){
        let output=document.getElementById("output")

        output.innerHTML=`<div id="store">
		<div class="row ">
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store ">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
		</div>
		<div class="row ">
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store">
				<img class="image-extra " src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store">
				<img id="insertVector" class="image-extra background-image-vector" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
		</div>
		<div class="row ">
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
			<div class="col-md-4 align-extra-store">
				<img class="image-extra" src="img/product.png" alt="">
				<button class="addtoCart">Add To Cart</button>
			</div>
		</div>
	</div>
        
	`
	scroll(0,0)
	//Making the Counter go Up with each click on add to Cart.
		let addtoCartbtn=document.getElementsByClassName("addtoCart")


		for(let i=0;i<addtoCartbtn.length;i++){
		addtoCartbtn[i].addEventListener(`click`,function(){
			let addtoCartNumber=document.getElementById("cart-products")

			value++

			addtoCartNumber.innerText=value
			alert("Product Added to Cart")

			addtoCartNumber.style.color="red"
			addtoCartNumber.style.fontSize="1.2em"
		})}
	
	//Ading the flower with JS.
	let backgroundIMG=document.getElementById("insertVector");

		
		backgroundIMG.style.backgroundImage="url('img/Vector.png')";
		backgroundIMG.style.backgroundColor="rgba(255, 255, 255, 0)";
		backgroundIMG.style.backgroundRepeat="no-repeat";
		backgroundIMG.style.backgroundSize="contain";
	let clickImages=document.getElementsByClassName("image-extra")

	
	//Making a loop so that we can add the event listener for each elemept in order to take us to the one Product page. This function will change when we will have to make an Ajax Call.
		for(let i=0;i<clickImages.length;i++){

			clickImages[i].addEventListener(`click`,function(){

				output.innerHTML=`<div class="Picture-Small-Info">
				<div class="picture-product">
					<img src='img/product-example.png'/>
				</div>
	
	
				<div class="Small-Info">
					<h2>Bee Wax</h2>
					<p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p>
					<p id="Popust">-30%</p>
					<p id="Price">32 &#8364;</p>
					<a href="#" id="addtoCartSingePage" class="BuyBtn"><p>ADD TO CART</p></a>
				</div>
			</div>
	
	
			<div class="Full-Info">
				<h2>INSTRUCTION FOR USE | ADITIONAL INFORMATION</h2>
				<hr />
				<p>
					Heat the wax in the tin container till it reaches body temperature. Use the piece of wood provided in the box to put the wax on your skin. Put it in the hair growing direction and take it off the opposite direction . Do not put it on the parts covered with pimples .!!!!
					<br /><br />
					Put a small amount of the depilatory and then wait 24 hours. If there is not any allergic reaction use the wax products.
					<br /><br />
					We strongly recommend you to use one of our supplementary tonics to cool down your skin.
				</p>
			</div>
	
	
			<div class="Heading-Similar-Products">
				<h2>SIMILAR PRODUCTS</h2>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
	
						<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner col-10 mx-auto">
								<div class="carousel-item active">
									<div class="row">
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-01</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-02</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-03</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-04</p></a></div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="row">
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-05</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-06</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-07</p></a></div>
										<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-08</p></a></div>
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
			</div>
			<br /><br />
			<button class="btn-similar-products">Show More</button>`

			//Incrementing the Products number in the CartElement in Singe Product Page
			var addtoCartbtnSinglePage=document.getElementById("addtoCartSingePage")
			
			addtoCartbtnSinglePage.addEventListener(`click`,function(){
					let addtoCartNumber=document.getElementById("cart-products")
		
					value++
		
					addtoCartNumber.innerText=value
					alert("Product Added to Cart")
		
					addtoCartNumber.style.color="red"
					addtoCartNumber.style.fontSize="1.2em"

					
				})
			})

		}

	})
	


}

let storeFooter=document.getElementById("store-footer")
//Showing the Store, and the storeFooter
showStore(store)
showStore(storeFooter)

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
			<h3>Address</h3>
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
			<h3>Social networks</h3>
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
			<img class="shopping-cart-product-image" src="img/product.png" alt="">
			</div>
			<div class="col-md-2 ">
				
				<h4 class="product-name ">Face Mask</h4>
				<p id="price-in-cart" class="cart-price " >$200</p>
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

				<div class="col-md-2 cart-column-general second-cart-row" id="productPriceTotal">
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

	//Doing Business Logic for Large Screens

	let productPrice=document.getElementById("price-in-cart")
		gettingPriceValue=parseInt(productPrice.innerText.slice(1))
	
	// Getting quantity value
try{
	let quantityInCart=document.getElementsByClassName("quantity-option")
	for(let i=0;i<=quantityInCart.length;i++){
	
		quantityInCart[i].addEventListener("change", addActivityItem, false);

		
	}
	function addActivityItem(){
		let totalProductPrice=document.getElementById("productPriceTotal")
		stringToNumberPrice=parseInt(totalProductPrice.innerText)
		//Getting the values to multiply them with the price

		let quantityCartValues=document.getElementsByClassName("quantity-cart-values")
		for(let i=0;i<quantityCartValues.length;i++){
		
			console.log(quantityCartValues[i].label)

			for(let j=0;j<=i;j++){
		switch(quantityCartValues[j].label){
			
			case "1":

			totalProductPrice.innerText=200
			break;

			case "2":
				totalProductPrice.innerText=200*2
				break;

				case "3":
					totalProductPrice.innerText=200*3
				break;
				case "4":
					totalProductPrice.innerText=200*4
				break;
				case "5":
					totalProductPrice.innerText=200*5
				break;
				case "6":
					totalProductPrice.innerText=200*6
				break;
				case "7":
					totalProductPrice.innerText=200*7
				break;
				case "8":
					totalProductPrice.innerText=200*8
				break;
				case "9":
					totalProductPrice.innerText=200*9
				break;
				case "10":
					totalProductPrice.innerText=200*10
				break;

		}

	}
	}
		
		
  }

}


finally{

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
			 <p class="">Price: </p>
			 <p class="">Shipping</p> 
			 <p class="">Total Price</p>
			 <button class="order-btn ">ORDER</button>
		 </div>
		 <div class="">
			 <p>0</p>
			 <p >0</p>
			 <p >0</p>
			 
		 </div>
		 </div>`
	} else {
		mobileprices.innerHTML=`<div class="container">
		<div id="klasaepergjithshme" class="row" >
			 <div class="col-md-8 "></div> 
			 <!-- <div class="col-md-4 order-checkout"> -->
				<div class="col-md-2">
					<p class="total-price ">Price: </p>
					<p class="shipping-price ">Shipping</p> 
					<p class="total-cost ">Total </p>
					<button class="order-btn ">ORDER</button>
				</div>
				<div class="col-md-2">
					<p class="total-product-value">0</p>
					<p class="total-product-value test-value">0</p>
					<p class="total-product-value">0</p>
					
				</div>



				
			
			
			
		 </div>
		</div>
	</div>`
	scroll(0,0)
	}
  }


}
}
 })
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


 // SHowing the Store from the Main Butons

 

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

let storeMainBtn=document.getElementsByClassName("hero-btn")

 console.log(storeMainBtn.length)

// SHowing the Store from the Main Butons
 for(let i=0;i<storeMainBtn.length-2;i++){

	storeMainBtn[i].addEventListener(`click`,function(){
	

	
			let output=document.getElementById("output")
	
			output.innerHTML=`<div id="store">
			<div class="row">
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store ">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store">
					<img class="image-extra " src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store">
					<img id="insertVector" class="image-extra background-image-vector" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
				<div class="col-md-4 align-extra-store">
					<img class="image-extra" src="img/product.png" alt="">
					<button class="addtoCart">Add To Cart</button>
				</div>
			</div>
		</div>
			
		`
	
		//Making the Counter go Up with each click on add to Cart.
			let addtoCartbtn=document.getElementsByClassName("addtoCart")
	
	
			for(let i=0;i<addtoCartbtn.length;i++){
			addtoCartbtn[i].addEventListener(`click`,function(){
				let addtoCartNumber=document.getElementById("cart-products")
	
				value++
	
				addtoCartNumber.innerText=value
				alert("Product Added to Cart")
	
				addtoCartNumber.style.color="red"
				addtoCartNumber.style.fontSize="1.2em"
			})}
		
		//Ading the flower with JS.
		let backgroundIMG=document.getElementById("insertVector");
	
			
			backgroundIMG.style.backgroundImage="url('img/Vector.png')";
			backgroundIMG.style.backgroundColor="rgba(255, 255, 255, 0)";
			backgroundIMG.style.backgroundRepeat="no-repeat";
			backgroundIMG.style.backgroundSize="contain";
		let clickImages=document.getElementsByClassName("image-extra")
	
		
		//Making a loop so that we can add the event listener for each elemept in order to take us to the one Product page. This function will change when we will have to make an Ajax Call.
			for(let i=0;i<clickImages.length;i++){
	
				clickImages[i].addEventListener(`click`,function(){
	
					output.innerHTML=`<div class="Picture-Small-Info">
					<div class="picture-product">
						<img src='img/product-example.png'/>
					</div>
		
		
					<div class="Small-Info">
						<h2>Bee Wax</h2>
						<p>Ingredients: Rosin, pine resin, bee resin, herbal ointment, boric oil, castor etc…</p>
						<p id="Popust">-30%</p>
						<p id="Price">32 &#8364;</p>
						<a href="#" id="addtoCartSingePage" class="BuyBtn"><p>ADD TO CART</p></a>
					</div>
				</div>
		
		
				<div class="Full-Info">
					<h2>INSTRUCTION FOR USE | ADITIONAL INFORMATION</h2>
					<hr />
					<p>
						Heat the wax in the tin container till it reaches body temperature. Use the piece of wood provided in the box to put the wax on your skin. Put it in the hair growing direction and take it off the opposite direction . Do not put it on the parts covered with pimples .!!!!
						<br /><br />
						Put a small amount of the depilatory and then wait 24 hours. If there is not any allergic reaction use the wax products.
						<br /><br />
						We strongly recommend you to use one of our supplementary tonics to cool down your skin.
					</p>
				</div>
		
		
				<div class="Heading-Similar-Products">
					<h2>SIMILAR PRODUCTS</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-12">
		
							<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner col-10 mx-auto">
									<div class="carousel-item active">
										<div class="row">
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-01</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-02</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-03</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-04</p></a></div>
										</div>
									</div>
									<div class="carousel-item">
										<div class="row">
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-05</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-06</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-07</p></a></div>
											<div class="col-md-3  col-6 grey-background"><a id="link-similar-products" href="#"><img src="img/store_3.png" class="d-block w-100" alt="product image"><p id="text-similar-products">Product-08</p></a></div>
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
				</div>
				<br /><br />
				<button class="btn-similar-products">Show More</button>`
	
				//Incrementing the Products number in the CartElement in Singe Product Page
				var addtoCartbtnSinglePage=document.getElementById("addtoCartSingePage")
				
				addtoCartbtnSinglePage.addEventListener(`click`,function(){
						let addtoCartNumber=document.getElementById("cart-products")
			
						value++
			
						addtoCartNumber.innerText=value
						alert("Product Added to Cart")
			
						addtoCartNumber.style.color="red"
						addtoCartNumber.style.fontSize="1.2em"
						scroll(0,0)
					
					})
				})
	
			}
	
		})
		
	
	
	}
		

	



