new Vue({
    el:"#instrument-store",
    data: {
        instruments: [
            {
                img:"https://stuff.fendergarage.com/images/m/3/y/Fender_AmProII_WebsiteBanner_OlympicWhite_1360x900px@2x.jpg",
                name: "Guitar",
                price: "2,000",
                brand:"Fender",
                inCart: false,
                details:false,
            },
            {
                img:"https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
                name: "Bass Guitar",
                price: "632",
                brand:"Fender",
                inCart: false,
                details:false,
            },
            {
                img:"https://cdn11.bigcommerce.com/s-sjkuycrcgv/images/stencil/1280x1280/products/1955/7051/Screen_Shot_2020-05-29_at_11.56.15_AM__31851.1646847207.png?c=2",
                name: "Electric Violin",
                price: "1350",
                brand:"Yamaha",
                inCart: false,
                details: false,
            },
            {
                img:"https://m.media-amazon.com/images/I/71FClrxqlWL._AC_SL1500_.jpg",
                name: "Oboe",
                price:"670",
                brand:"Yamaha",
                inCart: false,
                details: false,
            },
            {
                img:"https://cdn3.volusion.com/lqpzc.dkrfy/v/vspfiles/photos/18523-2.jpg?v-cache=1645439189",
                name:"Mini 12 String Guitar",
                price:"1,749",
                brand:"Maton",
                inCart: false,
                details: false,
            },
            {
                img:"https://cdn.shoplightspeed.com/shops/646137/files/33819165/1652x1652x2/maton-maton-s70-dreadnought-solid-a-sitka-spruce-t.jpg",
                name:"Maton S70 Acoustic Guitar",
                price:"1,479",
                brand:"Maton",
                inCart: false,
                details:false,
            },
        ],
        cart: [],
        addInstrumentPopUp:false
    },

    methods:{
        addNewInstrument: function(){
            this.addInstrumentPopUp = !this.addInstrumentPopUp;
        },
        addInstrument: function(){
            this.instruments.push({
                img: this.instruments.img,
                name: this.instruments.name,
                price: this.instruments.price,
                brand: this.instruments.brand,
                inCart: false,
                details: false,})
            this.addInstrumentPopUp = !this.addInstrumentPopUp;
        },

        addToCart : function(instrument){
            instrument.inCart = true;
            instrument.details = false;
            this.cart.push(instrument);
        },
        emptyCart: function(instrument){
            this.instruments.forEach(function(instrument){
                instrument.inCart = false;
                instrument.details = false;
            })
            this.cart= [];
        },

        displayInfo:function(instrument){
            instrument.details = !instrument.details
        }
    },

    });

