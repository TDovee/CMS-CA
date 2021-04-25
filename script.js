const url = "https://www.mgportfolio.no/wp-json/wc/store/products/"
const out = document.querySelector(".mydivcontainer")


fetch(url, {
	"method": "GET"
})
  .then(response => response.json())
  .then(data => myProducts(data))





const myProducts = (products) => {

	


	for (let product of products) {
		console.log(product)
		let newOut = `<ul>

			
			
			<img src="${product.images[0].thumbnail}"></img>
			<h2>${product.name}</h2>
			<p>Price: ${product.prices.price}${product.prices.currency_prefix}</p>
			<button>View more</button>
			

			</ul>`


		out.innerHTML += newOut;
	}
}