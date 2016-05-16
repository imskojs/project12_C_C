(function() {
  'use strict';

  angular.module('app')
    .factory('CategoryListModel', CategoryListModel);

  CategoryListModel.$inject = [];

  function CategoryListModel() {

    class Model {
      constructor() {
        this.selectedCategories = [];
        this.categories = [];

        this._generateCategories();
      }

      //====================================================
      //  Private
      //====================================================
      _generateCategories() {
        let colors = [
          '#ed1c24', '#ff9600', '#ffd800', '#fae9ac', '#603913',
          '#00bff3', '#008ae4', '#003471', '#8beb00', '#00a651',
          '#587723', '#00e49c', '#f06eaa', '#a730a9', '#e30076',
          '#202020', '#acacac', '#bab2ff'
        ];
        let texts = [
          '방송/음악과 영화', '지역과 상점', '기업과\n 브랜드.서비스', 'IT와 기술', '홍보와 마케팅',
          '연예인과 유명인', '게임과 웹툰', '교육.학습과 육아', '취업과 커리어', '자기개발과 책',
          '패션과 뷰티', '스포츠와 건강', '정치와 경제', '요리와 음식', '쇼핑과 소비',
          '취미와 스포츠', '종교', '기타'
        ];
        for (let i = 1; i <= 18; i += 1) {
          let category = {};
          if (i < 10) {
            category.name = `category0${i}`;
            category.icon = `img/category_icon_0${i}.png`;
          } else {
            category.name = `category${i}`;
            category.icon = `img/category_icon_${i}.png`;
          }
          category.color = colors[i - 1];
          category.text = texts[i - 1];

          this.categories.push(category);
        }
      }


    } // Constructor Ends
    return new Model();
  }
})();
