const productList = [
        {id:"01", name:"cua hoàng đế", price:2500, image:"../assets/images/anh.jpg", productLink:"detail.html", description:"Cua hoàng đế là một trong những loại hải sản quý hiếm và được ưa chuộng nhất trên thế giới, đặc biệt tại các nước châu Á. Loại cua này có kích thước lớn, trọng lượng có thể lên đến 3-5kg/con, với mai cua màu đỏ cam rực rỡ và thịt cua vàng ươm, thơm ngon đặc trưng. Thịt cua hoàng đế rất chắc, ngọt tự nhiên, không có mùi tanh, giàu protein và các khoáng chất thiết yếu. Cua hoàng đế thường được chế biến theo nhiều cách khác nhau như hấp, luộc, nướng hoặc làm canh. Khi hấp cua hoàng đế, bạn nên dùng nước mắm pha gừng để giữ trọn vẹn hương vị tự nhiên. Thịt cua hoàng đế có thể dùng để làm nhân bánh, salad hoặc các món ăn sang trọng khác. Ngoài giá trị dinh dưỡng cao, cua hoàng đế còn được coi là biểu tượng của sự giàu có và may mắn trong văn hóa Á Đông. Tại Việt Nam, cua hoàng đế được nhập khẩu chủ yếu từ Campuchia và được bán với giá khá cao do độ khan hiếm. Khi chọn mua cua hoàng đế, bạn nên chọn những con còn sống, mai cua bóng mượt, không có vết nứt. Bảo quản cua hoàng đế trong ngăn đá tủ lạnh có thể giữ được độ tươi ngon trong vài ngày. Cua hoàng đế không chỉ ngon mà còn rất bổ dưỡng, giúp tăng cường sức khỏe và cải thiện hệ miễn dịch."},
        {id:"02", name:"tôm hùm alaska", price:3200, image:"../assets/images/tom-hum.jpg", productLink:"detail.html", description:"Tôm hùm Alaska là loại hải sản cao cấp được nuôi trồng và đánh bắt từ vùng biển lạnh giá của Alaska, Mỹ. Với thân hình to lớn, trọng lượng có thể đạt 1-2kg/con, tôm hùm Alaska có thịt ngọt lịm, dai và thơm ngon đặc trưng. Thịt tôm hùm màu trắng hồng, giàu protein, omega-3 và các vitamin thiết yếu cho sức khỏe. Tôm hùm Alaska thường được chế biến theo phong cách phương Tây như nướng bơ tỏi, hấp hoặc làm salad. Khi nướng tôm hùm Alaska, bạn nên ướp với bơ, tỏi, chanh và các loại thảo mộc để tăng hương vị. Thịt tôm hùm có thể dùng để làm súp, pasta hoặc các món ăn châu Âu tinh tế. Tôm hùm Alaska được đánh bắt theo mùa, chủ yếu vào mùa hè khi tôm đạt độ béo ngậy nhất. Tại các nhà hàng sang trọng, tôm hùm Alaska thường được phục vụ như món khai vị hoặc món chính. Giá của tôm hùm Alaska khá cao do chi phí vận chuyển và độ khan hiếm. Khi chọn mua, bạn nên chọn những con còn sống, vỏ tôm bóng mượt, không có vết trầy xước. Bảo quản tôm hùm Alaska trong nước đá hoặc ngăn đông để giữ độ tươi ngon. Tôm hùm Alaska không chỉ là món ăn ngon mà còn là biểu tượng của sự xa xỉ và đẳng cấp trong ẩm thực quốc tế."},
        {id:"03", name:"cá hồi na uy", price:180, image:"../assets/images/ca-hoi.jpg", productLink:"detail.html", description:"Cá hồi Na Uy là loại cá nổi tiếng toàn cầu với chất lượng thịt ngon và giá trị dinh dưỡng cao. Nuôi trồng tại các trang trại hiện đại ở Na Uy, cá hồi có thịt màu hồng cam tự nhiên, giàu omega-3, protein và vitamin D. Thịt cá hồi mềm mại, không có xương dăm, hương vị tươi ngon đặc trưng. Cá hồi Na Uy có thể chế biến theo nhiều cách như sashimi, sushi, nướng, hấp hoặc làm salad. Khi ăn sống, cá hồi Na Uy mang đến cảm giác mát lạnh, ngọt thanh. Khi nướng, thịt cá hồi trở nên giòn tan, thơm phức. Cá hồi còn dùng để làm pate, ruốc hoặc các món ăn châu Âu. Na Uy là nước dẫn đầu thế giới về nuôi trồng cá hồi với công nghệ tiên tiến, đảm bảo an toàn vệ sinh thực phẩm. Cá hồi Na Uy được xuất khẩu đến hơn 100 quốc gia, đáp ứng tiêu chuẩn nghiêm ngặt về chất lượng. Khi chọn mua, bạn nên chọn cá có màu hồng tự nhiên, mắt trong, mang đỏ tươi. Bảo quản cá hồi trong ngăn đông có thể giữ được 6 tháng. Cá hồi Na Uy không chỉ ngon mà còn rất tốt cho sức khỏe tim mạch, não bộ và thị lực. Đây là lựa chọn hoàn hảo cho những ai quan tâm đến sức khỏe và ẩm thực tinh tế."},
        {id:"04", name:"hàu sữa", price:90, image:"../assets/images/hau.jpg", productLink:"detail.html", description:"Hàu sữa là loại hải sản phổ biến và được yêu thích tại Việt Nam với hương vị ngọt béo đặc trưng. Loại hàu này có kích thước vừa phải, vỏ dày chắc, bên trong chứa thịt hàu màu trắng đục, giàu dinh dưỡng. Thịt hàu sữa mềm mại, ngọt lịm, có vị hơi mặn tự nhiên từ biển cả. Hàu sữa thường được ăn sống với chanh, tỏi hoặc chế biến thành các món nướng mỡ hành, hấp hoặc làm canh. Khi ăn sống, hàu sữa mang đến cảm giác tươi mát, bổ dưỡng. Khi nướng, thịt hàu trở nên thơm phức, giòn tan. Hàu sữa còn dùng để làm nhân bánh hoặc các món ăn vặt. Tại Việt Nam, hàu sữa được nuôi trồng chủ yếu ở các tỉnh ven biển như Quảng Ninh, Hải Phòng. Hàu sữa có giá thành phải chăng, phù hợp với nhiều đối tượng khách hàng. Khi chọn mua, bạn nên chọn những con còn sống, vỏ khép chặt, không có mùi hôi. Bảo quản hàu sữa trong nước đá để giữ độ tươi ngon. Hàu sữa không chỉ ngon mà còn cung cấp nhiều khoáng chất như kẽm, sắt và vitamin cho cơ thể. Đây là món ăn phổ biến trong các bữa tiệc gia đình hoặc quán hải sản ven biển."},
        {id:"05", name:"mực ống", price:120, image:"../assets/images/muc.jpg", productLink:"detail.html", description:"Mực ống là loại hải sản quen thuộc trong ẩm thực Việt Nam với thịt dai ngon, giá thành hợp lý. Loại mực này có thân hình dài, màu trắng hồng, trọng lượng từ 200-500g/con. Thịt mực ống chắc, ngọt, không có mùi tanh, giàu protein và các khoáng chất. Mực ống có thể chế biến theo nhiều cách như xào, nướng, luộc hoặc làm lẩu. Khi xào mực ống, bạn nên xào nhanh tay để giữ độ dai giòn. Khi nướng, mực ống trở nên thơm phức với lớp vỏ cháy xém. Mực ống còn dùng để làm chả, ruốc hoặc các món ăn đường phố. Tại Việt Nam, mực ống được đánh bắt quanh năm ở các vùng biển Đông và Tây. Mực ống có giá thành phải chăng, phù hợp với mọi gia đình. Khi chọn mua, bạn nên chọn mực có mắt trong, thân hình đàn hồi, không có vết thâm. Bảo quản mực ống trong ngăn đá có thể giữ được vài ngày. Mực ống không chỉ ngon mà còn cung cấp nhiều dưỡng chất cho sức khỏe. Đây là nguyên liệu phổ biến trong các món ăn gia đình và nhà hàng hải sản."},
        {id:"06", name:"sò điệp", price:200, image:"../assets/images/so-diep.jpg", productLink:"detail.html", description:"Sò điệp là loại hải sản cao cấp với hương vị tinh tế, thịt ngọt và dai đặc trưng. Loại sò này có vỏ hình tròn, màu trắng hồng, bên trong chứa thịt sò màu trắng hồng, giàu dinh dưỡng. Thịt sò điệp mềm mại, ngọt lịm, có vị hơi mặn tự nhiên. Sò điệp thường được chế biến theo phong cách châu Á như sashimi, áp chảo hoặc nướng phô mai. Khi ăn sống, sò điệp mang đến cảm giác mát lạnh, bổ dưỡng. Khi áp chảo, thịt sò trở nên vàng giòn, thơm ngon. Sò điệp còn dùng để làm súp, salad hoặc các món ăn châu Âu. Tại Việt Nam, sò điệp được nuôi trồng và nhập khẩu từ các nước châu Á. Sò điệp có giá thành khá cao do độ khan hiếm và chất lượng. Khi chọn mua, bạn nên chọn những con còn sống, vỏ khép chặt, thịt sò đầy đặn. Bảo quản sò điệp trong nước đá để giữ độ tươi ngon. Sò điệp không chỉ ngon mà còn cung cấp nhiều omega-3 và khoáng chất cho sức khỏe. Đây là lựa chọn hoàn hảo cho những bữa ăn sang trọng và tinh tế."},
        {id:"07", name:"ghẹ xanh", price:150, image:"../assets/images/ghe.jpeg", productLink:"detail.html", description:"Ghẹ xanh là loại hải sản phổ biến tại Việt Nam với thịt ngọt, chắc và giàu dinh dưỡng. Loại ghẹ này có mai xanh bóng, chân dài, trọng lượng từ 300-600g/con. Thịt ghẹ xanh màu trắng hồng, ngọt lịm, giàu canxi và protein. Ghẹ xanh có thể chế biến theo nhiều cách như hấp, luộc, rang muối tiêu hoặc làm canh. Khi hấp ghẹ xanh, bạn nên dùng gừng và rượu để khử mùi tanh. Khi rang muối tiêu, thịt ghẹ trở nên thơm phức, cay nồng. Ghẹ xanh còn dùng để làm nhân bánh hoặc các món ăn đặc trưng. Tại Việt Nam, ghẹ xanh được nuôi trồng và đánh bắt ở các vùng biển Đông. Ghẹ xanh có giá thành hợp lý, phù hợp với nhiều gia đình. Khi chọn mua, bạn nên chọn ghẹ còn sống, mai xanh bóng, chân khỏe mạnh. Bảo quản ghẹ xanh trong nước đá có thể giữ được độ tươi ngon. Ghẹ xanh không chỉ ngon mà còn rất bổ dưỡng, giúp tăng cường sức khỏe xương khớp. Đây là món ăn quen thuộc trong ẩm thực Việt Nam."},
        {id:"08", name:"bạch tuộc", price:140, image:"../assets/images/bach-tuoc.jpg", productLink:"detail.html", description:"Bạch tuộc là loại hải sản đa dạng trong cách chế biến với thịt dai giòn, thơm ngon. Loại bạch tuộc này có thân hình tròn, màu trắng hồng, xúc tu dài, trọng lượng từ 500g-1kg/con. Thịt bạch tuộc chắc, ngọt, không có mùi tanh, giàu protein và vitamin. Bạch tuộc có thể chế biến theo nhiều cách như nướng, luộc, xào hoặc làm lẩu. Khi nướng bạch tuộc, bạn nên ướp gia vị để tăng hương vị. Khi làm lẩu, thịt bạch tuộc trở nên mềm mại, ngọt lịm. Bạch tuộc còn dùng để làm salad, sushi hoặc các món ăn châu Á. Tại Việt Nam, bạch tuộc được nhập khẩu và đánh bắt từ biển Đông. Bạch tuộc có giá thành phải chăng, phù hợp với nhiều món ăn. Khi chọn mua, bạn nên chọn bạch tuộc có mắt trong, thân hình đàn hồi. Bảo quản bạch tuộc trong ngăn đá có thể giữ được vài ngày. Bạch tuộc không chỉ ngon mà còn cung cấp nhiều dưỡng chất cho sức khỏe. Đây là nguyên liệu phổ biến trong các nhà hàng hải sản."},
        {id:"09", name:"cá ngừ đại dương", price:210, image:"../assets/images/ca-ngu.jpg", productLink:"detail.html", description:"Cá ngừ đại dương là loại cá lớn với thịt chắc, ngọt và giàu dinh dưỡng. Loại cá này có thân hình thuôn dài, màu xanh đen, trọng lượng có thể lên đến 100kg/con. Thịt cá ngừ màu hồng đỏ, chắc thịt, giàu omega-3 và protein. Cá ngừ đại dương có thể chế biến theo nhiều cách như sushi, sashimi, nướng hoặc làm sốt chả cá. Khi ăn sống, cá ngừ mang đến cảm giác tươi mát, bổ dưỡng. Khi nướng, thịt cá trở nên thơm phức, giòn tan. Cá ngừ còn dùng để làm hộp, ruốc hoặc các món ăn châu Á. Tại Việt Nam, cá ngừ được đánh bắt từ biển Đông và Thái Bình Dương. Cá ngừ có giá thành hợp lý, phù hợp với nhiều đối tượng. Khi chọn mua, bạn nên chọn cá có mắt trong, mang đỏ tươi, thịt chắc. Bảo quản cá ngừ trong ngăn đông có thể giữ được vài tháng. Cá ngừ không chỉ ngon mà còn rất tốt cho sức khỏe tim mạch. Đây là loại cá phổ biến trong ẩm thực quốc tế."},
        {id:"10", name:"tôm sú", price:170, image:"../assets/images/tom-su.jpg", productLink:"detail.html", description:"Tôm sú là loại hải sản quen thuộc nhất tại Việt Nam với thịt ngọt, chắc và giá thành hợp lý. Loại tôm này có thân hình dài, màu hồng cam, trọng lượng từ 20-50g/con. Thịt tôm sú màu trắng hồng, ngọt lịm, giàu protein và khoáng chất. Tôm sú có thể chế biến theo nhiều cách như chiên bơ tỏi, luộc, hấp hoặc làm gỏi. Khi chiên bơ tỏi, tôm sú trở nên vàng giòn, thơm ngon. Khi luộc, thịt tôm giữ được độ ngọt tự nhiên. Tôm sú còn dùng để làm nhân bánh, chả hoặc các món ăn gia đình. Tại Việt Nam, tôm sú được nuôi trồng ở các tỉnh Đồng bằng sông Cửu Long. Tôm sú có giá thành phải chăng, phù hợp với mọi gia đình. Khi chọn mua, bạn nên chọn tôm còn sống, vỏ bóng mượt, thịt chắc. Bảo quản tôm sú trong ngăn đá có thể giữ được vài ngày. Tôm sú không chỉ ngon mà còn cung cấp nhiều dưỡng chất cho sức khỏe. Đây là nguyên liệu phổ biến trong ẩm thực Việt Nam."}
    ]

function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class","product-item col");

    const productImage = document.createElement ("div");
    productImage.setAttribute("class","product-image ratio ratio-1x1 overflow-hidden mb-2");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover");   
    
    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info text-center");

    const productName = document.createElement("p");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.textContent = price + "k";

    const productLink = document.createElement("a");
    productLink.textContent = "xem chi tiết";
    productLink.setAttribute("href", hyperLink + "?id=" + encodeURIComponent(id));
    productLink.setAttribute("class", "btn btn-sm btn-primary mt-2");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function getProductById(id) {
    return productList.find(function(item) {
        return item.id === id;
    });
}

function renderDetail(id) {
    const product = getProductById(id);
    const detailContainer = document.getElementById("detail");

    if (!detailContainer) {
        return;
    }

    if (!product) {
        detailContainer.innerHTML = '<div class="alert alert-warning">Sản phẩm không tồn tại. <a href="page6.html">Quay lại danh sách</a>.</div>';
        return;
    }

    detailContainer.innerHTML = `
        <div class="row g-4">
            <div class="col-md-5">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
            </div>
            <div class="col-md-7">
                <h2>${product.name}</h2>
                <p class="fs-5 text-danger">Giá: ${product.price}k</p>
                <p>${product.description}</p>
                <p><strong>Mã sản phẩm:</strong> ${product.id}</p>
                <a href="page6.html" class="btn btn-outline-secondary">← Quay lại danh sách</a>
                <button type="button" class="btn btn-success ms-2" onclick="buyNow('${product.id}')">Mua ngay</button>
            </div>
        </div>
    `;
}

function buyNow(id) {
    const product = getProductById(id);
    if (!product) {
        return;
    }
    // Thực hiện logic mua hàng ở đây
}