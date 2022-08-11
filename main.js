const navBar = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuMobile = document.querySelector('.menu');

const btnCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

const productDetailsSecundary = document.querySelector('.product-detail-second');
const iconCloseProductDetail = document.querySelector('.product-detail-close-second');

navBar.addEventListener('click',toggleDeskMenu);
btnMenuMobile.addEventListener('click', toggleMovileMenu);
btnCart.addEventListener('click', toggleCartMenu);
iconCloseProductDetail.addEventListener('click', closeProductDetailsSecundary);


function toggleDeskMenu(){
     const isAsaidCartMenu = asideCart.classList.contains('inactive');
     
     productDetailsSecundary.classList.add('inactive');

     if(!isAsaidCartMenu){
        asideCart.classList.toggle('inactive');
     }

    deskMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    const isAsaidCartMenu = asideCart.classList.contains('inactive');
    productDetailsSecundary.classList.add('inactive');
    

    if(!isAsaidCartMenu){
        asideCart.classList.toggle('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMenuMobileClose = mobileMenu.classList.contains('inactive');
    const isDeskMenu = deskMenu.classList.contains('inactive');

    const isProductDetailsSecundary = productDetailsSecundary.classList.add('inactive');

    if(!isProductDetailsSecundary){
        productDetailsSecundary.classList.add('inactive');
    }

    if(!isDeskMenu){
        deskMenu.classList.toggle('inactive');
    }

    if(!isMenuMobileClose){
        mobileMenu.classList.toggle('inactive');
    }

    asideCart.classList.toggle('inactive');
}

function openProductDetailsSecundary(){
    productDetailsSecundary.classList.remove('inactive');
    asideCart.classList.add('inactive');
    deskMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    
}

function closeProductDetailsSecundary(){
    productDetailsSecundary.classList.add('inactive');
}

const cardContainer = document.querySelector('.cards-container');// estanos llamanado al div con la clase "cards-container" que esta en el html
const productList = [];// estamos creando un array vacio para los productos

productList.push({// estamos añadeindo un nuvo producto
    name: "bicicleta",
    price:  500,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({// estamos añadeindo un nuvo producto
    name: "Pantalla",
    price:  1000,
    img:"https://cdn1.coppel.com/images/catalog/pm/2989683-1.jpg",
});
productList.push({// estamos añadeindo un nuvo producto
    name: "Compu",
    price:  35000,
    img:"https://d500.epimg.net/cincodias/imagenes/2020/11/13/lifestyle/1605248711_693646_1605248762_noticia_normal.jpg",
});




function renderProduct(arr){// se encapsula en una funcion, para poder tener orden en el codigo, y mayor escalabilidad
    
    arr.map(function (product){ 
        const productCard = document.createElement('div');// esta linea esta creando un div de html desde JS
        productCard.classList.add('product-card');// aqui se le asigna una clase css al div anteriormente creado
        cardContainer.appendChild(productCard);// con appendChild estamos diciendole que introduzca el div con la clase "productCard" dentro de un elemento, en este caso otro div, pero con la clase "cardContainer" que es llamado desde el html atravez de su classe con un querySelector (en la linea 51 de esta codigo)
        
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src',product.img);
        productCard.appendChild(imgProduct);

        imgProduct.addEventListener('click',openProductDetailsSecundary);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);

        const divPrice = document.createElement('div');
        productInfo.appendChild(divPrice);

        const pPrice = document.createElement('p');
        pPrice.innerText = `$${product.price}`;
        divPrice.appendChild(pPrice);

        const pName = document.createElement('p');
        pName.innerText = `${product.name}`;
        divPrice.appendChild(pName);

        const figure = document.createElement('figure');
        productInfo.appendChild(figure);

        const iconCart = document.createElement('img');
        iconCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        figure.appendChild(iconCart);
       

        // productCard.innerHTML = (` <!--// estamos insertando codigo HTML con innerHTML en el div con la clase "product-card" que se genero en las dos lineas anteriores-->
        // <img class="img-product" src="${product.img}" alt="">
        // <div class="product-info">
        //   <div>
        //     <p>$${product.price}</p>
        //     <p>${product.name}</p>
        //   </div>
        //   <figure>
        //     <img src="./icons/bt_add_to_cart.svg" alt="">
        //   </figure>
        // </div>
        // `)
    })
    
    
    
}

renderProduct(productList); //se manda a llamar la funcion y se le pone como para metro al arreglo deonde se encintran los productos,0,