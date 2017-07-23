var Cat = function() {
    this.clickCount = ko.observable(0),
    this.name = ko.observable('Murrty'),
    this.imgSrc = ko.observable('http://www.wishgoodmorning.org/wp-content/uploads/2016/04/Good-Morning-Cat-Image-wg16158-600x450.jpg'),
    this.nicknames = ko.observableArray([
        { nickname: 'Marti, malkata smifchica' },
        { nickname: 'Pupelina' },
        { nickname: 'Pup pu rup' },
        { nickname: 'Paldjocheto' },
        { nickname: 'Bazuneka' },
        { nickname: 'Udjek' }
    ]),
    this.level = ko.computed(function() {
        if(this.clickCount() < 5) {
            return 'Kitten';
        } else if (this.clickCount() < 10) {
            return 'Cat';
        } else if (this.clickCount() < 20) {
            return 'Wild Cat';
        } else if (this.clickCount() < 30) {
            return 'Puma';
        } else if (this.clickCount() < 45) {
            return 'Cougar';
        } else if (this.clickCount() < 60) {
            return 'Leopard';
        } else if (this.clickCount() < 80) {
            return 'Tiger';
        } else if (this.clickCount() < 100) {
            return 'Lion';
        } else {
            return 'Ninja';
        }
    },this)
}

var ViewModel = function() {
    var self = this;
    this.currentCat = ko.observable(new Cat()),

    
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
