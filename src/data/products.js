
export const productsdata = [
{
    id: 1 ,
    title: "Pizza" ,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id facilisis urna, in condimentum velit. Nam tempus ac neque eget vestibulum. Proin pharetra, ante ut consequat sagittis, magna tortor tincidunt mi, non pulvinar nulla massa non purus. Phasellus fermentum pellentesque nulla et lobortis. Sed velit lacus, consectetur eget ligula nec, malesuada condimentum enim. Maecenas suscipit volutpat metus, ut faucibus lacus malesuada a. Nam dictum orci a egestas iaculis. Fusce scelerisque neque nec facilisis congue. Etiam tellus leo, porta vel laoreet nec, sollicitudin quis neque. Duis metus sapien, sodales nec nibh eu, vulputate cursus justo. Duis placerat ultrices leo, non euismod nulla condimentum consectetur. Nullam iaculis maximus risus, at imperdiet arcu suscipit et. Donec accumsan dictum mauris eget consectetur." ,
    price: 1100 ,
    availability: "In-Stock" ,
    reviews:30,
    image:"Images/cat-pizza1-440x440.jpg"
    
},

{
    id: 2 ,
    title: "Burger" ,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id facilisis urna, in condimentum velit. Nam tempus ac neque eget vestibulum. Proin pharetra, ante ut consequat sagittis, magna tortor tincidunt mi, non pulvinar nulla massa non purus. Phasellus fermentum pellentesque nulla et lobortis. Sed velit lacus, consectetur eget ligula nec, malesuada condimentum enim. Maecenas suscipit volutpat metus, ut faucibus lacus malesuada a. Nam dictum orci a egestas iaculis. Fusce scelerisque neque nec facilisis congue. Etiam tellus leo, porta vel laoreet nec, sollicitudin quis neque. Duis metus sapien, sodales nec nibh eu, vulputate cursus justo. Duis placerat ultrices leo, non euismod nulla condimentum consectetur. Nullam iaculis maximus risus, at imperdiet arcu suscipit et. Donec accumsan dictum mauris eget consectetur." ,
    price: 400 ,
    availability: "In-Stock" ,
    reviews:40 ,
    image:"Images/cat-burger1-440x440.jpg"
    
},

{
    id: 3 ,
    title: "Drinks" ,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id facilisis urna, in condimentum velit. Nam tempus ac neque eget vestibulum. Proin pharetra, ante ut consequat sagittis, magna tortor tincidunt mi, non pulvinar nulla massa non purus. Phasellus fermentum pellentesque nulla et lobortis. Sed velit lacus, consectetur eget ligula nec, malesuada condimentum enim. Maecenas suscipit volutpat metus, ut faucibus lacus malesuada a. Nam dictum orci a egestas iaculis. Fusce scelerisque neque nec facilisis congue. Etiam tellus leo, porta vel laoreet nec, sollicitudin quis neque. Duis metus sapien, sodales nec nibh eu, vulputate cursus justo. Duis placerat ultrices leo, non euismod nulla condimentum consectetur. Nullam iaculis maximus risus, at imperdiet arcu suscipit et. Donec accumsan dictum mauris eget consectetur." ,
    price: 350 ,
    availability: "In-Stock" ,
    reviews:20 ,
    image:"Images/cat-drinks1-440x440.jpg"
    
},

{
    id: 4 ,
    title: "Sandwich" ,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id facilisis urna, in condimentum velit. Nam tempus ac neque eget vestibulum. Proin pharetra, ante ut consequat sagittis, magna tortor tincidunt mi, non pulvinar nulla massa non purus. Phasellus fermentum pellentesque nulla et lobortis. Sed velit lacus, consectetur eget ligula nec, malesuada condimentum enim. Maecenas suscipit volutpat metus, ut faucibus lacus malesuada a. Nam dictum orci a egestas iaculis. Fusce scelerisque neque nec facilisis congue. Etiam tellus leo, porta vel laoreet nec, sollicitudin quis neque. Duis metus sapien, sodales nec nibh eu, vulputate cursus justo. Duis placerat ultrices leo, non euismod nulla condimentum consectetur. Nullam iaculis maximus risus, at imperdiet arcu suscipit et. Donec accumsan dictum mauris eget consectetur." ,
    price: 550 ,
    availability: "In-Stock" ,
    reviews:21 ,
    image:"Images/cat-sandwiches1-440x440.jpg"
    
},

{
    id: 5 ,
    title: "Deserts" ,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id facilisis urna, in condimentum velit. Nam tempus ac neque eget vestibulum. Proin pharetra, ante ut consequat sagittis, magna tortor tincidunt mi, non pulvinar nulla massa non purus. Phasellus fermentum pellentesque nulla et lobortis. Sed velit lacus, consectetur eget ligula nec, malesuada condimentum enim. Maecenas suscipit volutpat metus, ut faucibus lacus malesuada a. Nam dictum orci a egestas iaculis. Fusce scelerisque neque nec facilisis congue. Etiam tellus leo, porta vel laoreet nec, sollicitudin quis neque. Duis metus sapien, sodales nec nibh eu, vulputate cursus justo. Duis placerat ultrices leo, non euismod nulla condimentum consectetur. Nullam iaculis maximus risus, at imperdiet arcu suscipit et. Donec accumsan dictum mauris eget consectetur." ,
    price: 750 ,
    availability: "In-Stock" ,
    reviews:15 ,
    image:"Images/cat-dessert1-440x440.jpg"
    
},



]


export function getProductById(id){
    let product=productsdata.find(current => current.id=== Number(id));
    return product;
}