const productList = [
        {id:"01", name:"cua hoàng đế", price:250, image:"../assets/images/anh.jpg", productLink:"product-detail.html"},
        {id:"02", name:"tôm hùm alaska", price:320, image:"../assets/images/tom-hum.jpg", productLink:"product-detail.html"},
        {id:"03", name:"cá hồi na uy", price:180, image:"../assets/images/ca-hoi.jpg", productLink:"product-detail.html"},
        {id:"04", name:"hàu sữa", price:90, image:"../assets/images/hau.jpg", productLink:"product-detail.html"},
        {id:"05", name:"mực ống", price:120, image:"../assets/images/muc.jpg", productLink:"product-detail.html"},
        {id:"06", name:"sò điệp", price:200, image:"../assets/images/so-diep.jpg", productLink:"product-detail.html"},
        {id:"07", name:"ghẹ xanh", price:150, image:"../assets/images/ghe.jpeg", productLink:"product-detail.html"},
        {id:"08", name:"bạch tuộc", price:140, image:"../assets/images/bach-tuoc.jpg", productLink:"product-detail.html"},
        {id:"09", name:"cá ngừ đại dương", price:210, image:"../assets/images/ca-ngu.jpg", productLink:"product-detail.html"},
        {id:"10", name:"tôm sú", price:170, image:"../assets/images/tom-su.jpg", productLink:"product-detail.html"}
    ]
function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class","product-item col m-2");

    const productImage = document.createElement ("div");
        productImage.setAttribute("class","product-image h-75 ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", image);
    Image.setAttribute("class", "img-fluid object-fit-cover");   
    
    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info h-25 text-center");

    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);


    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}