"use strict";angular.module("stratocacheApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","getCanDoListService","hotspot","productService"]).controller("global",["$scope","$location","$rootScope",function(a,b,c){a.bodyClass="",a.setTime=function(){c.lastDigestRun=Date.now(),console.log(c.lastDigestRun)},c.isActive=function(a){return a===b.path()}}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/cando",{templateUrl:"views/cando.html",controller:"CandoCtrl",controllerAs:"cando"}).when("/getstarted",{templateUrl:"views/getStarted.html",controller:"startedCtrl",controllerAs:"started"}).when("/faq",{templateUrl:"views/faq.html",controller:"FaqCtrl",controllerAs:"faq"}).when("/productCat",{templateUrl:"views/productCat.html",controller:"ProductCtrl",controllerAs:"product"}).when("/servicePlans",{templateUrl:"views/servicePlans.html",controller:"ServicePlansCtrl",controllerAs:"servicePlans"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location","$interval",function(a,b,c){a.lastDigestRun=Date.now(),c(function(){console.log("check idle");var c=Date.now();c-a.lastDigestRun>18e4&&"/"!==b.path()&&(console.log("go home"),b.path("/"))},29e3),a.$on("$routeChangeStart",function(){a.lastDigestRun=Date.now()})}]),angular.module("stratocacheApp").controller("MainCtrl",["$scope",function(a){a.bodyClass="main"}]),angular.module("stratocacheApp").controller("AboutCtrl",["$scope",function(a){a.bodyClass="about",a.about=!0}]),angular.module("stratocacheApp").controller("CandoCtrl",["$scope","CanDoList",function(a,b){a.list=[],a.hotspot_coord=[],a.bodyClass="cando",a.menu=["Home Protection","Water Leak"],a.setMaster=function(b){a.selected=b},a.isSelected=function(b){return a.selected===b},a.sectionSelect=function(b){a.activeSection=b},a.isSelecteded=function(b){return a.activeSection===b},a.mainImage={"background-image":"url('images/cando/house.jpg')"},a.checkIt=function(b){a.activeSection=b,a.mainImage={background:"url('images/cando/"+a.list[b].img+"')"},a.imgImg="images/cando/"+a.list[b].img,a.hotspot_coord=[],a.currentSection=a.list[b];var c=a.list[b].hotspots;for(var d in c){var e=c[d];a.hotspot_coord.push(e)}},b.query().$promise.then(function(b){a.list=b,a.checkIt(0)})}]),angular.module("stratocacheApp").controller("startedCtrl",["$scope",function(a){a.bodyClass="started",a.about=!0}]),angular.module("stratocacheApp").controller("FaqCtrl",["$scope",function(a){a.bodyClass="faq",a.podPosition=0,a.downInactive=!1,a.upInactive=!0;var b=-1460;a.downClick=function(){0===a.podPosition&&(a.upInactive=!1),a.podPosition>b&&(a.podPosition-=365,a.upIntactive=!1,a.pod+=1,-1460===a.podPosition&&(a.downInactive=!0))},a.upClick=function(){a.podPosition===b&&(a.downInactive=!1,a.upInactive=!1),a.podPosition<0&&(a.podPosition+=365,a.upInactive=!1,a.pod-=1),0===a.podPosition&&(a.upInactive=!0)}}]),angular.module("stratocacheApp").controller("ProductCtrl",["$scope","ProductList",function(a,b){a.bodyClass="product",a.products=[],a.setMaster=function(b){a.selected=b},a.isSelected=function(b){return a.selected===b},b.query().$promise.then(function(b){a.products=b[0].products})}]),angular.module("stratocacheApp").controller("ServicePlansCtrl",["$scope",function(a){a.bodyClass="servicePlans",a.about=!0}]);var app=angular.module("getCanDoListService",["ngResource"]);app.factory("CanDoList",["$resource",function(a){return a("cando.json",{},{query:{method:"GET",params:{hotspot:"hotspots"},isArray:!0}})}]);var app=angular.module("productService",["ngResource"]);app.factory("ProductList",["$resource",function(a){return a("product.json",{},{query:{method:"GET",params:{product:"products"},isArray:!0}})}]),function(){var a=angular.module("hotspot",[]);a.directive("hotspot",function(){function a(a,b){b.css({top:a.hotspot.top+"px",left:a.hotspot.left+"px",position:"absolute"})}return{restrict:"E",templateUrl:"includes/hotspot.html",link:a}})}(),angular.module("stratocacheApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-10 col-md-offset-1"> <h1>A Smarter Way to Live.</h1> </div> </div> <div class="row"> <div class="col-md-10 col-md-offset-1"> <p>Iris is a simple, customizable smart home system by Lowe\'s. Iris connects all of your smart devices, like lights, locks or your thermostat, to a single app and allows you to control and monitor them all. </p> </div> </div> <div class="row"> <div class="col-md-12 text-center house_diagram"> <a href="#/cando" class="button">What can Iris do? <span class="whiteArrow"> <object type="image/svg+xml" data="images/smallWhiteArrow.svg" class="arrow"> <!-- fallback image in CSS --> </object> </span></a> </div> </div> </div> </div>'),a.put("views/cando.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-10 col-md-offset-1"> <h1>What can Iris do?</h1> <h2>Touch a scenario below to see what iris can do for you.</h2> </div> </div> <div class="row"> <div class="col-md-12 blueMenu"> <div class="row"> <div class="col-md-5 item active" ng-class="{active : activeSection === 0}" ng-click="checkIt(0)">Home Protection</div> <div class="col-md-5 item" ng-class="{active : activeSection === 1}" ng-click="checkIt(1)">Water Leak Alert</div> <div class="col-md-5 item" ng-class="{active : activeSection === 2}" ng-click="checkIt(2)">Kids Home Safe</div> <div class="col-md-5 item two-lines" ng-class="{active : activeSection === 3}" ng-click="checkIt(3)">Carbon Monoxide Detection</div> <div class="col-md-5 item" ng-class="{active : activeSection === 4}" ng-click="checkIt(4)">Night Activity</div> </div> </div> </div> <div class="row"> <div class="col-md-12 focusArea" ng-style="mainImage"> <div ng-repeat="item in list" style="opacity:0; height:0"> <img ng-src="images/cando/{{item.img}}" alt="" style="opacity:0"> <!-- <div ng-repeat="h in item.hotspots">\n			<img ng-src="images/cando/{{h.icon}}.png" alt="" style="opacity:0;">\n			<img ng-src="images/cando/{{h.active}}.png" alt="" style="opacity:0;">\n			<img ng-src="images/cando/{{h.inactive}}.png" alt="" style="opacity:0;">\n		</div> --> </div> <div ng-repeat="hotspot in hotspot_coord"> <hotspot></hotspot> </div> </div> </div> <div class="row"> <div class="col-md-12 blueMenu"> <div class="row"> <div class="col-md-5 item" ng-class="{active : activeSection === 5}" ng-click="checkIt(5)">Protect Valuables</div> <div class="col-md-5 item" ng-class="{active : activeSection === 6}" ng-click="checkIt(6)">Pet Monitoring</div> <div class="col-md-5 item" ng-class="{active : activeSection === 7}" ng-click="checkIt(7)">Night Watch</div> <div class="col-md-5 item" ng-class="{active : activeSection === 8}" ng-click="checkIt(8)">Glass Breaking</div> <div class="col-md-5 item two-lines" ng-class="{active : activeSection === 9}" ng-click="checkIt(9)">Hands-Off <br>Cabinets</div> </div> </div> </div> <div class="row"> <div class="col-md-12 sectionDetails"> <h4>IRIS CAN</h4> <h3>{{currentSection.details.title}}</h3> <div class="row"> <div class="" ng-class="{\'col-md-5\' : currentSection.addSpace, \'col-md-6\': !currentSection.addSpace}"> <p> {{currentSection.details.description}} </p> </div> <div class="" ng-class="{\'col-md-7\' : currentSection.addSpace, \'col-md-6\': !currentSection.addSpace}"> <div class="icon" ng-repeat="hotspot in hotspot_coord"> <div> <img ng-src="images/cando/{{hotspot.inactive}}.png" ng-click="setMaster(hotspot)" style="position;relative:top:0" ng-style="isSelected(hotspot) === true && {\'opacity\':\'0\'}"> </div> <div> <img ng-src="images/cando/{{hotspot.active}}.png" ng-click="setMaster()" style="position:relative;top:-100px" ng-show="isSelected(hotspot)"> </div> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/faq.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-10 col-md-offset-1"> <h1>Frequently asked questions.</h1> </div> </div> <div class="row"> <div class="col-md-8 col-md-offset-1 podContainer"> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>What is Home Automation or Smart Home?</h2> <p>The use of the Internet to automate and control the devices in your home for improved comfort, energy efficiency and security.</p> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>What is Iris?</h2> <p>Iris is a simple, customizable home automation system by Lowe\'s. Iris lets you manage your smart devices from a single app, giving you control, whether you’re home or away. Great for home owners or renters!</p> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>Why should I buy Iris over other systems?</h2> <ul> <li>Iris by Lowe’s offers a wide breadth of products with over 50 devices.</li> <li>Iris is FREE for basic use and has a premium service as well to create rules between devices. (turn on your lights when the motion detector senses movement)</li> <li>DIY – Create the system you want, grow it over time.</li> <li>No long-term commitments with month-to-month service.</li> <li>Value priced products from nationally recognized brands.</li> <li>Iris devices are wireless which allows for easy portability.</li> </ul> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>What do I need?</h2> <ul> <li>Iris Hub</li> <li>Smartphone</li> <li>Broadband Internet</li> <li>Router or modem</li> <li>Iris compatible products</li> </ul> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>How do I get started?</h2> <p>Getting started is easy. Purchase an Iris hub, download the app and connect your products.</p> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>Can I get Iris professionally installed?</h2> <p>Yes. Professional installation is available through our partner, InstallerNet (iris.installernet.com). Need an electrician? Plumber? Find a trusted professional for any job at porch.com.</p> </div> </div> <div class="row faqPod" ng-style="{\'top\': podPosition}"> <div class="col-md-12"> <h2>Where can I learn more about Iris?</h2> <p>For more information, go to www.irisbylowes.com</p> </div> </div> </div> <div class="col-md-3" style="height:1095px"> <img src="images/upArrow.png" height="75" width="76" alt="Up Arrow" class="upArrow arrow" ng-click="upClick()" ng-class="{inactive: upInactive }"> <img src="images/upArrow.png" height="75" width="76" alt="Up Arrow" class="downArrow arrow" ng-click="downClick()" ng-class="{inactive: downInactive }"> </div> </div> </div> </div>'),a.put("views/getStarted.html",'<div class="background {{bodyClass}}"> <div class="container"> </div> </div> <div class="row"> <div class="col-md-12 text-center startedBtn"> <a href="#/faq"><img src="images/startedQuestions.png" height="167" width="1079" alt=""></a> </div> </div>'),a.put("views/main.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-12 homeAnimation"> <video onended="this.play()" autoplay loop id="homeVideo"> <source src="media/iris_final_2.mp4" type="video/mp4"> <source src="media/iris_final_2.ogv" type="video/ogg"> </video> </div> </div> <div class="row"> <div class="col-md-12 text-center"> <a class="button homeButton" href="#/about"> Touch to see what else iris can do <span class="whiteArrow"> <object type="image/svg+xml" data="images/smallWhiteArrow.svg" class="arrow"> <!-- fallback image in CSS --> </object> </span> </a> </div> </div> <div class="row"> <div class="col-md-12 text-center"> <object type="image/svg+xml" data="images/iris-white-logo.svg" class="homeLogo"> <!-- fallback image in CSS --> </object> </div> </div> <div class="row"> <div class="col-md-12 text-center"> <div class="button">Español</div> </div> </div> </div> </div> <script type="text/javascript" src="scripts/seeThru.min.js"></script> <script>var transparentVideo = seeThru.create(\'#homeVideo\');</script>'),a.put("views/productCat.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-10 col-md-offset-1"> <h1>Products tailored just for your home.</h1> </div> </div> <div class="row"> <div class="col-md-10 col-md-offset-1"> <div class="row"> <div class="col-md-4 productBlock" ng-repeat="product in products" ng-class="{blank : product.blank}" ng-click="setMaster(product)"> <div ng-if="product.icon"> <img ng-src="images/product_cat/{{product.icon}}.png" alt="" class="block"> <h4>{{product.title}}</h4> </div> <div ng-if="product.blank"> <h4>{{product.title}}</h4> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 productInfoBox" ng-repeat="product in products" ng-class="{active : isSelected(product)}"> <div class="back" ng-click="setMaster()"> <img src="images/product_cat/backButton.png" height="58" width="161" alt=""> </div> <div class="productInfo"> <img ng-src="images/product_cat/{{product.pic}}.png" alt=""> <h2>{{product.headline}}</h2> <h3>{{product.description}}</h3> <a href="#/getstarted"><img src="images/product_cat/started_btn.png" height="58" width="374" alt=""></a> </div> </div> </div> </div> </div>'),a.put("views/servicePlans.html",'<div class="background {{bodyClass}}"> <div class="container"> <div class="row"> <div class="col-md-10 col-md-offset-1"> <h1>Basic service is free. Upgrade to Premium for just <sup style="top:-.35em; font-size:65%">$</sup>9.99 a month.</h1> <p>Choose from two levels of plans. The Basic Plan is free and allows you to control your devices from your iris app. The Premium Plan provides advanced ways to monitor and control your home. It\'s free for the first two months then $9.99 a month (plus applicable taxes) with no contract.</p> <p class="details">For more information on plans and additional services, visit irisbylowes.com</p> </div> </div> <div class="row"> <div class="col-md-10 col-md-offset-1"> <img src="images/serviceChart.png" alt="Service Chart"> </div> </div> </div> </div>'),a.put("includes/footer.html",'<footer> <ul> <a href="#/productCat"><li ng-class="{selected: isActive(\'/productCat\') }">Product Categories</li></a> <a href="#/servicePlans"><li ng-class="{selected: isActive(\'/servicePlans\') }">Service Plans</li></a> </ul> </footer>'),a.put("includes/hotspot.html",'<div class="hotspot" ng-class="{active : isSelected(hotspot)}"> <img src="images/cando/hotspot.png" height="90" width="91" ng-click="setMaster(hotspot)"> <div class="description" ng-class="{ left : hotspot.position == \'left\'}" ng-click="setMaster()"><img ng-src="images/cando/{{hotspot.icon}}.png" alt="Icon"> <h3>{{hotspot.title}}</h3> <p>{{hotspot.description}}</p> </div> </div>'),a.put("includes/navigation.html",'<header ng-hide="isActive(\'/\')" ng-class="{ faqActive: isActive(\'/faq\') , productActive: isActive(\'/productCat\')}"> <ul> <a href="#/about"><li ng-class="{selected: isActive(\'/about\') }">About Iris</li></a> <a href="#/cando"><li ng-class="{selected: isActive(\'/cando\') }">What it can do</li></a> <a href="#/getstarted"><li ng-class="{selected: isActive(\'/getstarted\') }">Get started</li> <a href="#/faq"><li ng-class="{selected: isActive(\'/faq\') }">FAQs</li> </a></a></ul> </header>')}]);