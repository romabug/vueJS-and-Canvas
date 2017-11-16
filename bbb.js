window.onload = function() {

    function readFile(e) {
        var file = e;

        if (file.size > 5 * 1024 * 1024) { //用size属性判断文件大小不能超过5M 
            alert(" SIZE TOO BIG");
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                loadImage(this.result);
            }
        }
    }


    var changeImg = new Vue({
        el: '#change-img',
        data: {
            show: true,
            imageurl: "",
            myfile: ""
        },
    
        methods: {
            updateimg: function(event) {
                this.show = !this.show;
                var tmp = document.querySelector('#File');
                readFile(tmp.files[0]);

            }
        }

    })

 

    var adjustImage = new Vue({
        el: '#adjust-bar',
        data: {
            message1: 'bright',
            message2: 'contrast',
            message3: 'file'
        },

        watch: {
            message1: function() {
                mybright = parseInt(this.message1);

                Caman('#canvas', img, function() {
                    this.revert(false);
                    this.brightness(mybright).contrast(mycontrast).render();
                });

            },
            message2: function() {
                console.log("contrast" + this.message2);
                mycontrast = parseInt(this.message2);

                Caman('#canvas', img, function() {
                    this.revert(false);
                    this.brightness(mybright).contrast(mycontrast).render();
                });

            }

        }
    })

    var myimage = "";
    var mybright = 0;
    var mycontrast = 0;

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var undoImg;
    var img = new Image();

    loadImage = function(src) {

        img.crossOrigin = '';
        img.src = src;

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        }
    }

    var dog1 = "http://cdn1.bigcommerce.com/server3400/72ba2/product_images/uploaded_images/beagle-and-toad.jpg";
    // var dog1 = "./flower.jpg";
    loadImage(dog1);

}