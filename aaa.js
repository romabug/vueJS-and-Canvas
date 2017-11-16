$(document).ready(function() {




    var vm = new Vue({
        el: '#demo',
        data: {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        },
        watch: {
            firstName: function(val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function(val) {
                this.fullName = this.firstName + ' ' + val
            }
        }
    })


    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }


    })

    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'TWO WAY'
        },

        watch: {
            message: function(val) {
            //    this.fullName = val + ' ' + this.lastName ;
                console.log( this.message);

// Caman('#canvas', img, function() {
//             this.revert(false);
//             this.brightness(54).render();
//         });



            }
        }
    })




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

    loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tCNr_XPvLJw28ZERWuFk6WEput49oggVOPko82XAp_UQoBMcZg");



    var bright = parseInt($('#bright').val());
    var cntrst = parseInt($('#contrast').val());


    $("#bright").on('input', function() {
        bright = parseInt($('#bright').val());

        Caman('#canvas', img, function() {
            this.revert(false);
            this.brightness(bright).contrast(cntrst).render();
        });

    });



    $("#contrast").on('input', function() {
        cntrst = parseInt($('#contrast').val());

        Caman('#canvas', img, function() {
            this.revert(false);
            this.brightness(bright).contrast(cntrst).render();
        });

    });



});