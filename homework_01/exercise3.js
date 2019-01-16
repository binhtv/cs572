const item = {
	"name": "Biscuits",
	"type": "regular",
	"category": "food",
	"price": 200
}

function applyCoupon(item) {
	return function(discount) {
		return {
			...item,
			price: (item.price * (100 - discount) / 100)
		}
	}
}

applyCoupon(item)(10).price === 180;