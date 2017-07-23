var ViewModel = function() {
    this.clickCount = ko.observable(0),
    this.name = ko.observable('Murrty'),
    this.imgSrc = ko.observable('http://www.wishgoodmorning.org/wp-content/uploads/2016/04/Good-Morning-Cat-Image-wg16158-600x450.jpg'),
    this.level = ko.computed(function() {
        if(this.clickCount() < 10) {
            return 'Infant';
        } else if (this.clickCount() < 20) {
            return 'Toddler';
        } else if (this.clickCount() < 30) {
            return 'Kid';
        } else if (this.clickCount() < 40) {
            return 'Teen';
        } else if (this.clickCount() < 50) {
            return 'Adult';
        } else {
            return 'Grandma';
        }
    },this),
    this.nicknames = ko.observableArray([
        { nickname: 'Marti, malkata smifchica' },
        { nickname: 'Pupelina' },
        { nickname: 'Pup pu rup' },
        { nickname: 'Paldjocheto' },
        { nickname: 'Bazuneka' },
        { nickname: 'Udjek' }
    ]);{}

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());