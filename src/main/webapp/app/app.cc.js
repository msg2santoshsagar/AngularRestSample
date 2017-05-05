!function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null,a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}(),function(){"use strict";angular.module("angularSampleApp").constant("VERSION","0.0.1-SNAPSHOT").constant("DEBUG_INFO_ENABLED",!0)}(),function(){"use strict";function t(t){t.initialize()}angular.module("angularSampleApp",["ngStorage","ui.router","jkAngularRatingStars"]).run(t),t.$inject=["stateHandler"]}(),function(){"use strict";function t(t){t.state("app",{abstract:!0,views:{"navbar@":{templateUrl:"app/layouts/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){var a=this;a.ratingList=[{rating:3},{rating:2},{rating:1},{rating:4},{rating:5}],a.addRating=function(){a.ratingList.push({rating:parseInt(a.ratingPoint)}),a.ratingPoint=null;a.ratingList.map(function(t){return t.rating})}}angular.module("angularSampleApp").controller("jkRatingTestController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("jkRatingTest",{parent:"app",url:"/jkRatingTest",data:{authorities:[]},views:{"content@":{templateUrl:"app/jkRating/rating.html",controller:"jkRatingTestController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n){}angular.module("angularSampleApp").controller("HomeController",t),t.$inject=["$scope","$state"]}(),function(){"use strict";function t(t){t.state("home",{parent:"app",url:"/",data:{authorities:[]},views:{"content@":{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}}})}angular.module("angularSampleApp").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,n,a,e,r){function o(){t.VERSION=r;var n=t.$on("$stateChangeStart",function(n,a,r,o){t.toState=a,t.toStateParams=r,t.fromState=o,a.external&&(n.preventDefault(),e.open(a.url,"_self"))}),a=t.$on("$stateChangeSuccess",function(t,n,a,r,o){var l="Angular Sample App";n.data.pageTitle&&(l=n.data.pageTitle),e.document.title=l});t.$on("$destroy",function(){angular.isDefined(n)&&null!==n&&n(),angular.isDefined(a)&&null!==a&&a()})}return{initialize:o}}angular.module("angularSampleApp").factory("stateHandler",t),t.$inject=["$rootScope","$state","$sessionStorage","$window","VERSION"]}(),function(){"use strict";function t(t){}angular.module("angularSampleApp").controller("NavbarController",t),t.$inject=["$state"]}();