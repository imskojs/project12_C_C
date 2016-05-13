(function() {
  'use strict';
  angular.module('app')
    .component('koHeader', {

      bindings: {
        title: '@',
        onBack: '&'
      },

      template: `
       <ion-header-bar class="bar bar-stable"
         align-title="center"
       >
         <div class="buttons">
           <button class="button button-icon" 
             ng-click="$ctrl.onBack()"
           >
             <img class="bar__button-icon__img"src="img/ic_back.png">
           </button>
         </div>
         <h1 class="title">{{$ctrl.title}}</h1>
       </ion-header-bar> 
      `,

      controller: function() {}

    });

})();



// this.onDelete is not defined in controller of the compoenent however we have bindings.onDelete,
// it is used in templete ng-click="$ctrl.onDelete({hero: $ctrl.hero})".
// $ctrl.onDelete is a function that is passed from parent. In parent we have <on-delete="$ctrl.deleteHero(hero)">
