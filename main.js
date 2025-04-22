// Vue.component ('Blog-details', {
//     props: ['selectedCategory'],
//     data() {
//         return {
//             kitchenDetailsBlog: [
//                 {
//                     id: 1,
//                     title_one: 'Создадим лучший проект перепланировки',
//                     image_one: 'img/kitchen.png',
//                     date: '26 декабрь, 2022',
//                     textDescInDate: 'Интерьер / Домой / Декор',
//                     textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...',
//                     img_quote: 'img/Quotes.png',
//                     quote: 'Какая-то умная и красивая цитата',
//                     title_two: 'Design sprints are grea',
//                     textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль',
//                     textList: [
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
//                     ],
//                     image_two: 'img/kitchen.png',
//                     textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
//                 }
//             ],
//             bedroomDetailsBlog: [

//                 {
//                     id: 2,
//                     title_one: 'Создадим лучший макет перепланировки',
//                     image_one: 'img/bedroom.png',
//                     date: '26 декабря 2022',
//                     textDescInDate: 'Интерьер / Домой / Декор',
//                     textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...',
//                     img_quote: 'img/Quotes.png',
//                     quote: 'Какая-то умная и красивая цитата',
//                     title_two: 'Design sprints are grea',
//                     textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль.',
//                     textList: [
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
//                         'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
//                     ],
//                     image_two: 'img/bedroom.png',
//                     textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.',
//                 }
//             ],
//         }
//     },
//     template: `
//     <div class="container_blog_details">
//     <div class="blog_details_left" v-if="selectedCategory === 'Кухня'"
//     v-for="(item, index) in kitchenDetailsBlog" :key="item.id">
//     <h2 class="title_blog_one">{{item.title_one}}</h2>
//     <img class="img_blog_one" :src="item.img_one" alt="">
//     <div class="blog_details_date">
//     <span class="date">{{item.date}}></span>
//     <span class="text_desc_InDate">{{item.textDescInDate}}</span>
//     </div>
//     <p class="textDesc_blog_one">{{item.textDesk_one}}</p>
//     <div class="blok_quote">
//     <img class="img_quote" :src="item.img_quote" alt="">
//     </div>
//     <h2 class="title_blog_two">{{item.title_two}}</h2>
//     <p class="textDesk_blog_two">{{item.titleDesk_two}}</p>
//     <ol>
//     <li v-for="(textItem, textIndex) in item.textList" :key="textIndex">{{textItem}}</li>
//     </ol>
//     <img class="img_blog_two" :src="item.img_two" alt="">
//     <p class="textDesk_blog_tree">{{item.textDesk_tree}}</p>
    
//     </div>
    
    
//     </div>
//     `

    
    
// });

// Vue.component('btn-tag', {
  

//   data() {
//     return {
//         btn_tag_name: [
//             'Кухня',
//             'Спальня',
//             'Здание',
//             'Архитектура',
//             'Планировка',
//             'Гостинная'
            
//         ],
//         selectedTag: 'Кухня',
      
//     }
//   },

//  template: `
//  <div class="btn_tag">
//  <h2>Теги</h2>
//  <div class="btn_tag_container">
//  <button v-for="(item, index) in btn_tag_name" :key="index" @click="selectTag(item)" :class="{'selected': item === selectedTag}" class="btn_tag_button">{{item}}</button>
//  </div>
//  </div>
 
//  `,
//  methods: {
//     selectTag(item) {
//         this.selectedTag = item;
//         this.$emit('tag-click', item);
//     }
//  },

// });

// new Vue({
//     el: '#app',
//     data() {
//         return {
//             selectedCategory: 'Кухня'
//         }
//     },
//     methods: {
//         changeCategory(category) {
//             this.selectedCategory = category;
//         }
//     },
// });





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Blog Details</title>
//     <script src="https://unpkg.com/vue@3"></script>
//     <style>
//         /* Добавьте свои стили здесь */
//     </style>
// </head>
// <body>
//     <div id="app">
//        <btn-tag @tag-click="changeCategory"></btn-tag>
//         <blog-details :selected-category="selectedCategory"></blog-details>
//     </div>

//     <script>
//         const { createApp, ref, defineComponent } = Vue;

//         const BlogDetails = defineComponent({
//             props: ['selectedCategory'],
//             setup(props) {
//                 const kitchenDetailsBlog = ref([
//                     {
//                         id: 1,
//                         title_one: 'Создадим лучший проект перепланировки',
//                         image_one: 'img/kitchen.png',
//                         date: '26 декабрь, 2022',
//                         textDescInDate: 'Интерьер / Домой / Декор',
//                         textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» ...',
//                         img_quote: 'img/Quotes.png',
//                         quote: 'Какая-то умная и красивая цитата',
//                         title_two: 'Design sprints are great',
//                         textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est ...',
//                         textList: [
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...',
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...',
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...'
//                         ],
//                         image_two: 'img/kitchen.png',
//                         textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» ...',
//                     }
//                 ]);

//                 const bedroomDetailsBlog = ref([
//                     {
//                         id: 2,
//                         title_one: 'Создадим лучший макет перепланировки',
//                         image_one: 'img/bedroom.png',
//                         date: '26 декабря 2022',
//                         textDescInDate: 'Интерьер / Домой / Декор',
//                         textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» ...',
//                         img_quote: 'img/Quotes.png',
//                         quote: 'Какая-то умная и красивая цитата',
//                         title_two: 'Design sprints are great',
//                         textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est ...',
//                         textList: [
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...',
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...',
//                             'С того времени этот, похожий на латинский, текст стал стандартом ...'
//                         ],
//                         image_two: 'img/bedroom.png',
//                         textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» ...',
//                     }
//                 ]);

//                 return { kitchenDetailsBlog, bedroomDetailsBlog };
//             },
//             template: `
//                 <div class="container_blog_details">
//                     <div v-if="selectedCategory === 'Кухня'" v-for="item in kitchenDetailsBlog" :key="item.id" class="blog_details_left">
//                         <h2 class="title_blog_one">{{ item.title_one }}</h2>
//                         <img class="img_blog_one" :src="item.image_one" alt="">
//                         <div class="blog_details_date">
//                             <span class="date">{{ item.date }}</span>
//                             <span class="text_desc_InDate">{{ item.textDescInDate }}</span>
//                         </div>
//                         <p class="textDesc_blog_one">{{ item.textDesk_one }}</p>
//                         <div class="blok_quote">
//                             <img class="img_quote" :src="item.img_quote" alt="">
//                         </div>
//                         <h2 class="title_blog_two">{{ item.title_two }}</h2>
//                         <p class="textDesk_blog_two">{{ item.textDesk_two }}</p>
//                         <ol>
//                             <li v-for="(textItem, textIndex) in item.textList" :key="textIndex">{{ textItem }}</li>
//                         </ol>
//                         <img class="img_blog_two" :src="item.image_two" alt="">
//                         <p class="textDesk_blog_tree">{{ item.textDesk_tree }}</p>
//                     </div





