Page({
	data: {
		imgUrls: [
			'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
			'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
			'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
		],
		indicatorDots: false,
		vertical: false,
		autoplay: true,
		circular: false,
		interval: 4000,
		duration: 500,
		previousMargin: 0,
		nextMargin: 0
	},
	changeProperty: function (e) {
		var propertyName = e.currentTarget.dataset.propertyName
		var newData = {}
		newData[propertyName] = e.detail.value
		this.setData(newData)
	},
	changeIndicatorDots: function (e) {
		this.setData({
			indicatorDots: !this.data.indicatorDots
		})
	},
	changeAutoplay: function (e) {
		this.setData({
			autoplay: !this.data.autoplay
		})
	},
	intervalChange: function (e) {
		this.setData({
			interval: e.detail.value
		})
	},
	durationChange: function (e) {
		this.setData({
			duration: e.detail.value
		})
	}
})
