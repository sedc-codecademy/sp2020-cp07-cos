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







let aboutUsNav=document.getElementById("about")

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
})
}

showAboutUs(aboutUsNav)
let aboutFooter=document.getElementById("aboutFooter")
showAboutUs(aboutFooter)
let home=document.getElementById("home")

home.addEventListener(`click`,function(){
    let output=document.getElementById("output")

    output.innerHTML=""
})

let store=document.getElementById("store")

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

	
	let backgroundIMG=document.getElementById("insertVector");

		
		backgroundIMG.style.backgroundImage="url('img/Vector.png')";
		backgroundIMG.style.backgroundColor="rgba(255, 255, 255, 0)";
		backgroundIMG.style.backgroundRepeat="no-repeat";
		backgroundIMG.style.backgroundSize="contain";
	let clickImages=document.getElementsByClassName("image-extra")

	console.log(clickImages)
	
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
					<a href="#" class="BuyBtn"><p>ADD TO CART</p></a>
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
			})

		}

	})
	


}

let storeFooter=document.getElementById("store-footer")

showStore(store)
showStore(storeFooter)

let contactUs=document.getElementById("contact")

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
			<a href="#0"><i class="fab fa-4x fa-facebook-square"></i></a>
			<a href="#0"><i class="fab fa-4x fa-instagram"></i></i></a>
		</div>

	</div>
	<div class="col-12">
		<img id="yellow-flower" class="img-fluid" src="img/contact_v2.png">
	</div>

</div>`

})
}


let contactFooter=document.getElementById("contact-footer")

showContact(contactFooter)
showContact(contactUs)

