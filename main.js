const navBar = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const btnMenuMobile = document.querySelector('.menu');

const btnCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

navBar.addEventListener('click',toggleDeskMenu);
btnMenuMobile.addEventListener('click', toggleMovileMenu);
btnCart.addEventListener('click', toggleCartMenu);


function toggleDeskMenu(){
     const isAsaidCartMenu = asideCart.classList.contains('inactive');

     if(!isAsaidCartMenu){
        asideCart.classList.toggle('inactive');
     }

    deskMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    const isAsaidCartMenu = asideCart.classList.contains('inactive');
    

    if(!isAsaidCartMenu){
        asideCart.classList.toggle('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMenuMobileClose = mobileMenu.classList.contains('inactive');
    const isDeskMenu = deskMenu.classList.contains('inactive');
    if(!isDeskMenu){
        deskMenu.classList.toggle('inactive');
    }

    if(!isMenuMobileClose){
        mobileMenu.classList.toggle('inactive');
    }

    asideCart.classList.toggle('inactive');
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
        productCard.innerHTML = (` <!--// estamos insertando codigo HTML con innerHTML en el div con la clase "product-card" que se genero en las dos lineas anteriores-->
        <div class="product-card">
        <img src="${product.img}" alt="">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
        `)
    });
}

renderProduct(productList); //se manda a llamar la funcion y se le pone como para metro al arreglo deonde se encintran los productos