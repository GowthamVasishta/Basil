/*
 *
 * @package Basil.js
 * @developer R Gowtham Vasishta
*/   
    //defining a constructor
    var basil = function (selector) {
        return basil.gt.init(selector);
    };
    
    basil.gt = basil.prototype = {
        init: function (selector) {
            var i, t, output = new Array();
            //handle null, undefined cases
            if(!selector) {
                return this;
            }
            //break the string into an array
            selector = selector.split(' ');
            this.selector = selector;
            //optimize the loop, by assigning the array length
            this.length = this.selector.length;
            this.output = output;
           //iterate through selector array to get the elements from the DOM
            for(i = 0; i < this.length; i++){
                
                //identify the id's (find indexof '#')
                if(selector[i].indexOf("#") == 0){
                    var t;
                    //remove ash ('#')
                    t = selector[i].split("#");
                    this.output[i] = this.id(t[1]);
                }
                //check for the class (find indexof '.')
                else if(selector[i].indexOf(".") == 0){
                    //remove dot ('.')
                    t = selector[i].split(".");
                    this.output[i] = this.classes(t[1]); 
                }
                //else consider as tag (yes! we need more filtering over here!)
                else {
                    this.output[i] = this.get_tag(selector);
                }
            }
            
            return this;
            
        },
        //get the length of the array
        size: function () {
            return this.length;
        },
        //displays the selectors
        display: function() {
            return this.selector;
        },
        //get the output of selector engine
        get: function() {
            if(this.output.length == 1)
                return this.output[0];
            else
                return this.output;
        },
        //deals with id's
        id: function (selector) {
            var id;
            id = document.getElementById(selector);
            return id;
        },
        //deals with classes
        classes: function (selector) {
            var classes;
            classes = document.getElementsByClassName(selector);
            return classes;
        },
        //deals with elements
        get_tag: function (selector){
            var tagger;
            tagger = document.getElementsByTagName(selector);
            return tagger;
        }
    };

    
    

